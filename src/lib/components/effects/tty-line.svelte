<script lang="ts">
  import type { Snippet } from 'svelte';

  const {
    children,
    status
  }: {
    children: Snippet;
    status?: Snippet;
  } = $props();
</script>

<tr class="leading-4">
  <td class="mr-2 flex w-20 max-w-20">
    {@render status?.()}
  </td>
  <td class="max-w-4xl text-gray-300">
    {@render children()}
  </td>
</tr>
