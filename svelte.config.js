import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.svx'],
  kit: {
    adapter: adapter()
  },
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.svx']
    })
  ]
};

export default config;
