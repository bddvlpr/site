<script lang="ts">
  import type { Snippet } from 'svelte';

  const { children }: { children: Snippet } = $props();
</script>

<table class="table-fixed px-1 py-2 font-tty">
  <tbody>
    {@render children()}
  </tbody>
</table>
