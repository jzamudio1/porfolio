import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  site: "https://jzamudio1.github.io",
  base: "/portafolio",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
})
