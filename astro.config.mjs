import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://username.github.io/repo-name",
  integrations: [sitemap()],
});