import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// IMPORTANT:
// - User site  (repo named `arnaualbert.github.io`) → site: 'https://arnaualbert.github.io', base: '/'
// - Project site (any other repo name, e.g. `portfolio`) → base: '/portfolio/'
export default defineConfig({
  site: 'https://arnaualbert.github.io',
  base: '/',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [
    tailwind({ applyBaseStyles: false }),
  ],
});