// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import path from 'node:path';
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://feflow.dxdns.dev",
  integrations: [
    starlight({
      title: "feflow",
      components: {
        PageFrame: "./src/lib/layouts/RootLayout.astro",
      },
      customCss: ["./src/styles/custom.css"],
      favicon: "/favicon.png",
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
          label: "Getting Started",
          items: [
            {
              label: "Introduction",
              slug: "docs"
            },
            {
              label: "Installation",
              slug: "docs/getting-started"
            },
            {
              label: "Theming",
              slug: "docs/getting-started/theming"
            },
            {
              label: "CLI",
              slug: "docs/getting-started/cli"
            },
          ]
        },
        {
          label: "Components",
          autogenerate: { directory: "docs/components" },
        },
      ],
    }),
    svelte(),
  ],
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src/lib'),
      }
    }
  }
});
