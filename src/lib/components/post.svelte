<script lang="ts">
  import type { Metadata } from '$lib/api/posts';

  import Link from './navigation/link.svelte';

  const {
    metadata
  }: {
    metadata: Metadata;
  } = $props();

  const { date, description, slug, tags, title } = metadata;
  const postDate = $derived(new Date(date));
</script>

- <Link href="/blog/{slug}">{title}</Link> [{postDate.toLocaleDateString()}]
{#if tags}
  ({tags.join(', ')})
{/if}
<div>
  {description}
</div>
