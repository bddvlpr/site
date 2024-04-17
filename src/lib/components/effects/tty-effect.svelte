<script lang="ts">
  import type { Snippet } from 'svelte';

  const { children }: { children: Snippet } = $props();
</script>

<div class="px-1 py-2 font-tty">
  {@render children()}
</div>
