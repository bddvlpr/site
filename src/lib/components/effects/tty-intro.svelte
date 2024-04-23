<script lang="ts">
  import type { Line } from '$lib/tty';

  import lines from './tty-intro.json';
  import TtyLine from './tty-line.svelte';
  import TtyStatus from './tty-status.svelte';

  let {
    delay = 21,
    finished = $bindable(false)
  }: {
    delay?: number;
    finished?: boolean;
  } = $props();

  const shownLines = $state<Array<Line>>([]);

  $effect(() => {
    const interval = setInterval(() => {
      if (lines.length > shownLines.length) {
        shownLines.push((lines as Array<Line>)[shownLines.length]);
      } else {
        finished = true;
        clearInterval(interval);
      }
    }, delay);

    return () => clearInterval(interval);
  });
</script>

{#if !finished}
  {#each shownLines as { message, status }}
    {#if status}
      <TtyStatus {status}>{message}</TtyStatus>
    {:else}
      <TtyLine>{message}</TtyLine>
    {/if}
  {/each}
{/if}
