<script lang="ts">
  import type { Snippet } from 'svelte';

  const { children }: { children: Snippet } = $props();
</script>

<div class="mx-1 my-2 font-tty">
  {@render children()}
</div>
