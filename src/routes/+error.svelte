<script lang="ts">
  import { page } from '$app/stores';
  import TtyLine from '$lib/components/effects/tty-line.svelte';
  import Link from '$lib/components/navigation/link.svelte';
</script>

<TtyLine status="FAILED">Failed loading page: {$page.status}.</TtyLine>
<TtyLine status="EMPTY">{$page.error?.message ?? 'Something went wrong.'}</TtyLine>
<br />
<TtyLine status="EMPTY">
  Try refreshing the page or go back to the <Link href="/">root</Link>.
</TtyLine>
