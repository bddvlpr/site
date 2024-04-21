<script context="module">
  export { default as code } from './content/code.svelte';
  export { default as h1 } from './content/h1.svelte';
  export { default as h2 } from './content/h2.svelte';
  export { default as h3 } from './content/h3.svelte';
  export { default as h4 } from './content/h4.svelte';
  export { default as h5 } from './content/h5.svelte';
  export { default as h6 } from './content/h6.svelte';
  export { default as p } from './content/p.svelte';
  export { default as ul } from './content/ul.svelte';
</script>

<script lang="ts">
  import type { Snippet } from 'svelte';

  const { children }: { children: Snippet } = $props();
</script>

<svelte:head>
  <!-- TODO: Handle SEO -->
</svelte:head>

{@render children()}
