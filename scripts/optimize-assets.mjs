/**
 * ASSET OPTIMIZER
 *
 * Converts source images (PNG/JPG/JPEG/WebP) to compressed WebP and writes them
 * into `public/assets/`. This is the required intake step for every image added
 * to the project — see AGENTS.md §14 "Assets and Images".
 *
 * Usage:
 *   node scripts/optimize-assets.mjs <source> [<source> ...] [--name=<slug>] [--width=<px>]
 *                                    [--quality=<1-100>] [--trim]
 *
 * Examples:
 *   node scripts/optimize-assets.mjs "C:/Users/me/Downloads/hero.png" --name=hero-tree-removal --width=1920
 *   node scripts/optimize-assets.mjs "./torn-edge.png" --name=hero-torn-edge --trim
 *   node scripts/optimize-assets.mjs ./incoming/*.jpg
 *
 * Notes:
 *   - `--name` only applies when a single source file is given.
 *   - `--trim` crops away uniform/transparent borders before resizing. Use it for
 *     cut-out overlays exported on a full-size canvas.
 *   - Existing files in public/assets are overwritten (re-running is safe).
 *   - Source files are never modified or deleted.
 */

import { readdir, mkdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const OUTPUT_DIR = path.resolve("public/assets");
const SUPPORTED_INPUT = new Set([".png", ".jpg", ".jpeg", ".webp", ".avif", ".tiff"]);

const DEFAULTS = {
  quality: 82,
  maxWidth: 1920,
};

/** Turn an arbitrary filename into a clean, meaningful asset slug. */
function toSlug(filename) {
  return path
    .basename(filename, path.extname(filename))
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function formatBytes(bytes) {
  return `${(bytes / 1024).toFixed(0)} KB`;
}

function parseArguments(argv) {
  const sources = [];
  const options = { ...DEFAULTS, name: null, trim: false, trimAlpha: false };

  for (const argument of argv) {
    if (argument.startsWith("--name=")) {
      options.name = argument.slice(7);
    } else if (argument.startsWith("--width=")) {
      options.maxWidth = Number(argument.slice(8));
    } else if (argument.startsWith("--quality=")) {
      options.quality = Number(argument.slice(10));
    } else if (argument === "--trim") {
      options.trim = true;
    } else if (argument === "--trim-alpha") {
      options.trimAlpha = true;
    } else {
      sources.push(argument);
    }
  }

  return { sources, options };
}

/** Expand a directory into its supported image files; pass files through. */
async function resolveSources(sources) {
  const files = [];

  for (const source of sources) {
    const stats = await stat(source);

    if (stats.isDirectory()) {
      const entries = await readdir(source);
      for (const entry of entries) {
        if (SUPPORTED_INPUT.has(path.extname(entry).toLowerCase())) {
          files.push(path.join(source, entry));
        }
      }
    } else if (SUPPORTED_INPUT.has(path.extname(source).toLowerCase())) {
      files.push(source);
    } else {
      console.warn(`  skipped (unsupported type): ${source}`);
    }
  }

  return files;
}

/**
 * Bounding box of everything meaningfully visible in an image with alpha.
 *
 * `sharp.trim()` compares colour and is defeated by near-invisible stray pixels
 * (an alpha of 1 rather than 0 keeps a whole column alive), which leaves a
 * transparent border on cut-out overlays. This measures alpha directly.
 */
async function findOpaqueBounds(sourcePath, alphaThreshold = 8) {
  const { data, info } = await sharp(sourcePath).ensureAlpha().raw().toBuffer({
    resolveWithObject: true,
  });
  const { width, height, channels } = info;

  let minX = width;
  let minY = height;
  let maxX = -1;
  let maxY = -1;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (data[(y * width + x) * channels + 3] > alphaThreshold) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  if (maxX < 0) return null; // Nothing visible at all

  return { left: minX, top: minY, width: maxX - minX + 1, height: maxY - minY + 1 };
}

async function optimizeImage(sourcePath, outputName, options) {
  const outputPath = path.join(OUTPUT_DIR, `${outputName}.webp`);
  const sourceStats = await stat(sourcePath);

  let image = sharp(sourcePath);
  const metadata = await image.metadata();

  // Trim first, so the width cap applies to the cropped artwork rather than
  // to the empty canvas around it.
  if (options.trimAlpha) {
    const bounds = await findOpaqueBounds(sourcePath);
    if (bounds) {
      image = image.extract(bounds);
    }
  } else if (options.trim) {
    image = image.trim({ threshold: 2 });
  }

  // Only downscale — never upscale a source image past its native width.
  const targetWidth = Math.min(options.maxWidth, metadata.width ?? options.maxWidth);

  const info = await image
    .resize({ width: targetWidth, withoutEnlargement: true })
    .webp({ quality: options.quality, effort: 6 })
    .toFile(outputPath);

  const saved = 100 - (info.size / sourceStats.size) * 100;

  console.log(
    `  ${path.basename(sourcePath)}\n` +
      `    -> public/assets/${outputName}.webp\n` +
      `       ${metadata.width}x${metadata.height} ${formatBytes(sourceStats.size)}` +
      `  ->  ${info.width}x${info.height} ${formatBytes(info.size)}  (-${saved.toFixed(0)}%)`
  );

  return { width: info.width, height: info.height };
}

async function main() {
  const { sources, options } = parseArguments(process.argv.slice(2));

  if (sources.length === 0) {
    console.error(
      "No source images given.\n" +
        "Usage: node scripts/optimize-assets.mjs <source> [...] [--name=slug] [--width=px] [--quality=1-100]"
    );
    process.exit(1);
  }

  await mkdir(OUTPUT_DIR, { recursive: true });

  const files = await resolveSources(sources);

  if (files.length === 0) {
    console.error("No supported image files found in the given sources.");
    process.exit(1);
  }

  console.log(`Optimizing ${files.length} image(s) -> public/assets/\n`);

  for (const file of files) {
    const outputName = files.length === 1 && options.name ? options.name : toSlug(file);
    await optimizeImage(file, outputName, options);
  }

  console.log("\nDone.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
