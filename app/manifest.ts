import type { MetadataRoute } from "next";

/* Lets phones "Add to Home Screen" with the right name, icon and colours. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nabila Shahirah — Portfolio",
    short_name: "Nabila",
    start_url: "/",
    display: "standalone",
    background_color: "#050306",
    theme_color: "#050306",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
