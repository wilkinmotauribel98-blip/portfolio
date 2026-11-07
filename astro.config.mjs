// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://wilkinmotauribel98-blip.github.io',
  base: '/portfolio',
  vite: {
    plugins: [tailwindcss()]
  }
});