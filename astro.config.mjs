import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://u1142715-hub.github.io/solara-meridian-studio/",
  base: "/solara-meridian-studio",

  trailingSlash: "always",
  build: { format: "directory" },

  integrations: [sitemap()],
});
