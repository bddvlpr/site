<script lang="ts">
  import type { Snippet } from 'svelte';

  import TtyLine from '$lib/components/effects/tty-line.svelte';

  const { children }: { children: Snippet } = $props();
</script>

<TtyLine>
  {@render children()}
</TtyLine>
