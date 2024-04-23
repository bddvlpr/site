<script lang="ts">
  import type { Snippet } from 'svelte';

  const { children }: { children: Snippet } = $props();
</script>

<code class="font-tty text-purple-200">{@render children()}</code>
