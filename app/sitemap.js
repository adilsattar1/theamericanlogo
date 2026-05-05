import { SITE_URL } from "../lib/seo";

const routes = [
  "",
  "/about-us",
  "/contact-us",
  "/get-started",
  "/packages",
  "/portfolio",
  "/testimonials",
  "/2d-&-3d-illustration",
  "/logo-design",
  "/website-development",
  "/motion-graphics",
  "/search-engine-optimization",
  "/social-media-marketing",
  "/privacy-policy",
  "/terms",
  "/thankyou",
  "/checkout-cancelled",
];

export default function sitemap() {
  const now = new Date();
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
