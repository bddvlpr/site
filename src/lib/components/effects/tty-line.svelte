<script lang="ts">
  import type { Snippet } from 'svelte';

  import { type Status, statusText } from '$lib/tty';

  const { children, status = 'OK' }: { children: Snippet; status?: Status } = $props();

  const getBracket = (position: 'left' | 'right') =>
    status === 'EMPTY' ? ' ' : position === 'left' ? '[' : ']';
</script>

<div class="block whitespace-pre-wrap leading-4">
  {getBracket('left')}<span
    class:text-green-400={status === 'OK'}
    class:text-red-400={['FAILED', 'TIME'].includes(status)}
    class:text-yellow-400={status === 'PROGRESS'}
    >{statusText[status]}
  </span>{getBracket('right')}
  <span class="w-full text-gray-200">
    {@render children()}
  </span>
</div>
