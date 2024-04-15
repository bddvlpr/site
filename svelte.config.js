import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import remarkToc from 'remark-toc';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.svx'],
  kit: {
    adapter: adapter()
  },
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.svx'],
      rehypePlugins: [rehypeSlug],
      remarkPlugins: [[remarkToc, { tight: true }]]
    })
  ]
};

export default config;
