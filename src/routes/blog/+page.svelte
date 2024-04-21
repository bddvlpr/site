<script lang="ts">
  import TtyLine from '$lib/components/effects/tty-line.svelte';
  import TtyStatus from '$lib/components/effects/tty-status.svelte';
  import Post from '$lib/components/post.svelte';

  const { data } = $props();
</script>

<svelte:head>
  <title>bddvlpr - Blog</title>
  <meta name="description" content="Luna's blog. I write about random stuff." />
</svelte:head>

{#await data.posts}
  <TtyStatus status="PROG">Loading posts...</TtyStatus>
{:then posts}
  <TtyStatus status="OK">Loaded {posts.length} post(s).</TtyStatus>
  <TtyLine>
    {#each posts as metadata}
      <Post {metadata} />
      <br />
    {/each}
  </TtyLine>
{:catch}
  <TtyStatus status="FAIL">Failed to load posts.</TtyStatus>
{/await}
