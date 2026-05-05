const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.theamericanlogo.com";
const DEFAULT_IMAGE = "/assets/images/logo.png";

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image = DEFAULT_IMAGE,
}) {
  const url = `${SITE_URL}${path}`;
  const plainTitle = typeof title === "string" ? title : "The American Logo";

  return {
    title,
    description,
    keywords,
    openGraph: {
      title: plainTitle,
      description,
      url,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: plainTitle,
        },
      ],
    },
  };
}

export { SITE_URL };
