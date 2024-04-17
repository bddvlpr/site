<script lang="ts">
  import type { Line } from '$lib/tty';

  import TtyLine from './tty-line.svelte';

  let {
    delay = 40,
    finished = $bindable(false),
    lines
  }: {
    delay?: number;
    finished?: boolean;
    lines: Array<Line>;
  } = $props();

  const shownLines = $state<Array<Line>>([]);

  $effect(() => {
    const interval = setInterval(() => {
      if (lines.length > shownLines.length) {
        shownLines.push(lines[shownLines.length]);
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
    <TtyLine {status}>{message}</TtyLine>
  {/each}
{/if}
