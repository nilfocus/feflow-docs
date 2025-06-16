// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "feflow",
      components: {
        PageFrame: "./src/lib/layouts/RootLayout.astro",
      },
      customCss: ["./src/styles/custom.css"],
      favicon: "./src/assets/favicon.png",
      logo: {
        src: "./src/assets/logo.png",
        replacesTitle: true,
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/dxdns/feflow",
        },
      ],
      sidebar: [
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
        {
          label: "Components",
          items: [
            { label: "Accordion", slug: "components/accordion" },
            { label: "Button", slug: "components/button" },
            { label: "Card", slug: "components/card" },
          ],
        },
      ],
    }),
    svelte(),
  ],
});
