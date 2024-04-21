<script lang="ts">
  import type { Status } from '$lib/tty';
  import type { Snippet } from 'svelte';

  import TtyLine from './tty-line.svelte';

  const {
    children,
    status = 'OK'
  }: {
    children: Snippet;
    status: Status;
  } = $props();

  const getColor = (status: Status) => {
    switch (status) {
      case 'OK':
        return 'text-green-400';
      case 'PROG':
        return 'text-yellow-500';
      case 'FAIL':
      case 'TIME':
        return 'text-red-500';
      case 'HEAD':
        return 'text-cyan-400';
      default:
        return 'text-gray-400';
    }
  };
</script>

{#snippet tag()}
  &lbrack;
  <span class="mx-auto {getColor(status)}">
    {status}
  </span>
  &rbrack;
{/snippet}

<TtyLine status={tag}>
  {@render children()}
</TtyLine>
