<script lang="ts">
  import TtyLine from '$lib/components/effects/tty-line.svelte';
  import Link from '$lib/components/navigation/link.svelte';

  const { data } = $props();
</script>

<TtyLine># Blog</TtyLine>
<TtyLine status="PROGRESS">This page is still under construction.</TtyLine>
<br />
<TtyLine>## Latest</TtyLine>
{#each data.posts as { date, slug, title }}
  {@const formattedDate = new Date(date).toLocaleDateString()}
  <TtyLine status="EMPTY">- {formattedDate} <Link href="/blog/{slug}">{title}</Link></TtyLine>
{/each}
