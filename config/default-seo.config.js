import metadata from "constants/metadata.json";

const DEFAULT_SEO = {
  titleTemplate: "%s | RickSW.dev",
  defaultTitle: metadata.site_name,
  description: metadata.site_description,
  canonical: metadata.site_url,
  openGraph: {
    title: metadata.site_name,
    description: metadata.site_description,
    type: "website",
    site_name: metadata.site_name,
    url: metadata.site_url,
  },
};

export default DEFAULT_SEO;
