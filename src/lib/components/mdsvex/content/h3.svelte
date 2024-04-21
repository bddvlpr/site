<script lang="ts">
  import type { Snippet } from 'svelte';

  import TtyStatus from '$lib/components/effects/tty-status.svelte';

  const { children }: { children: Snippet } = $props();
</script>

<TtyStatus status="HEAD">
  <h3>
    ### {@render children()}
  </h3>
</TtyStatus>
