// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Svelte Components",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/dxdns/svelte-components",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
            { label: "test", slug: "guides/test" },
          ],
        },
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
