<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  const {
    children,
    external = false,
    href,
    ...restProps
  }: {
    children: Snippet;
    external?: boolean;
    href: string;
  } & HTMLAttributes<HTMLAnchorElement> = $props();
</script>

<a
  class="text-blue-300 underline hover:text-blue-400"
  {href}
  target={external ? '_blank' : null}
  {...restProps}
>
  {@render children()}
</a>
