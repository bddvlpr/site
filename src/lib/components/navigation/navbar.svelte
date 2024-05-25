<script lang="ts">
  import TtyLine from '../effects/tty-line.svelte';
  import Link from './link.svelte';

  const links = [
    {
      href: '/.',
      text: '/.'
    },
    {
      href: 'https://blog.bddvlpr.com',
      text: '/blog'
    }
  ];
</script>

<br />
<TtyLine>
  <div class="flex gap-2">
    {#each links as { href, text }}
      <Link {href}>{text}</Link>
    {/each}
  </div>
</TtyLine>
