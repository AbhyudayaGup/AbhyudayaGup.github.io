import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://abhyudaya.me',
  integrations: [react()],
  devToolbar: {
    enabled: false,
  },
});

