<script lang="ts">
  import TtyLine from '../effects/tty-line.svelte';
  import Link from './link.svelte';

  const links = ['/.', '/about', '/blog'];
</script>

<br />
<TtyLine>
  <div class="flex gap-2">
    {#each links as href}
      <Link {href}>{href}</Link>
    {/each}
  </div>
</TtyLine>
