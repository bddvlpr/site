<script lang="ts">
  import Link from './link.svelte';

  const links = ['/.', '/blog'];
</script>

<div class="flex gap-2">
  {'~> cd'}
  {#each links as link}
    <span><Link href={link}>{link}</Link></span>
  {/each}
</div>
