// @ts-check
import { defineConfig } from 'astro/config';

import basicSsl from '@vitejs/plugin-basic-ssl'
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
const env = loadEnv("", process.cwd(), 'STORYBLOK');

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://chasec98.github.io',
  base: 'survivor-gr',
  vite: {
    plugins: [basicSsl()],
    server: {
      // @ts-ignore
      https: true,
    },
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        image: 'storyblok/Image',
        page: 'storyblok/Page',
        homePageHero: 'storyblok/HomePageHero',
        richText: 'storyblok/RichText',
        columns: 'storyblok/components/structure/Columns',
        rows: 'storyblok/components/structure/Rows',
        section: 'storyblok/components/structure/Section',
      },
      apiOptions: {
        // Choose your Storyblok space region
        region: 'us', // optional,  or 'eu' (default)
      },
    })
  ]
});