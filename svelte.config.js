import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import { resolve } from 'path';
import rehypeSlug from 'rehype-slug';
import remarkToc from 'remark-toc';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.svx'],
  kit: {
    adapter: adapter()
  },
  preprocess: [
    vitePreprocess({}),
    mdsvex({
      extensions: ['.svx'],
      layout: resolve('./src/lib/components/mdsvex/layout.svelte'),
      rehypePlugins: [rehypeSlug],
      remarkPlugins: [remarkToc],
      smartypants: {
        dashes: 'oldschool',
        quotes: false
      }
    })
  ]
};

export default config;
