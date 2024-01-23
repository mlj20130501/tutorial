import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
// import react from "@astrojs/react";
// import vue from "@astrojs/vue";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 4321,
    host: true
  },
  integrations: [preact(),   tailwind()]
});