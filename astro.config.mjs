// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import path from 'node:path';
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
          label: "Getting Started",
          autogenerate: { directory: "docs/getting-started" },
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
