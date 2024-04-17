<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  const {
    children,
    href,
    ...restProps
  }: {
    children: Snippet;
    href: string;
  } & HTMLAttributes<HTMLAnchorElement> = $props();
</script>

<a class="text-blue-300 underline hover:text-blue-400" {href} {...restProps}>
  {@render children()}</a
>
