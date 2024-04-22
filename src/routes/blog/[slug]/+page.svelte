<script lang="ts">
  const { data } = $props();
  const { description, title } = data.post.metadata;
</script>

<svelte:head>
  <title>bddvlpr - {title}</title>
  <meta content={description} name="description" />
</svelte:head>

<svelte:component this={data.post.content} />
