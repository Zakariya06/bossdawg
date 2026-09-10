/**
 * SITE CONFIGURATION
 *
 * Single source of truth for business details and navigation. The header,
 * hero, and every future footer or contact section read from here, so a phone
 * number or menu item is changed in exactly one place (AGENTS.md §11).
 */

export const siteConfig = {
  name: "Bossdawg Tree Removals",
  shortName: "Bossdawg",
  tagline: "Tough trees. Trusted locally.",
  description:
    "Safe, efficient tree removal, stump grinding and land clearing for homes, cottages and properties across Kingston, the Bay of Quinte and Frontenac County.",

  phone: {
    display: "343 580 8974",
    href: "tel:+13435808974",
  },

  hours: {
    days: "7 days a week,",
    time: "7 AM to 7 PM",
  },

  /* The owner is named across the about page, so the name and role live here
     rather than being typed into a component (AGENTS.md §11). */
  owner: {
    name: "David",
    role: "Owner & Operator",
  },

  rating: {
    score: "4.8",
    count: 74,
  },

  address: {
    street: "362 Main Street,",
    cityPostal: "Deseronto, Ontario K0K 1X0",
    full: "362 Main Street, Deseronto, Ontario K0K 1X0",
  },

  /* PLACEHOLDER URLs — replace with the real profiles before launch. */
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
  },

  location: {
    city: "Deseronto, Ontario",
    serviceArea: "Serving Kingston, the Bay of Quinte and Frontenac County",
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: ReadonlyArray<{ label: string; href: string }>;
};

export const navigation: ReadonlyArray<NavItem> = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Tree Removal", href: "/services/tree-removal" },
      { label: "Stump Grinding", href: "/services/stump-grinding" },
      { label: "Land Clearing", href: "/services/land-clearing" },
    ],
  },
  { label: "Service Area", href: "/service-area" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];
