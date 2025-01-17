// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://chasec98.github.io',
  base: 'survivor-gr',
  integrations: [tailwind({
    applyBaseStyles: false,
  })]
});