<script lang="ts">
  import type { Snippet } from 'svelte';

  import TtyStatus from '$lib/components/effects/tty-status.svelte';

  const { children }: { children: Snippet } = $props();
</script>

<TtyStatus status="HEAD">
  <h2>
    ## {@render children()}
  </h2>
</TtyStatus>
