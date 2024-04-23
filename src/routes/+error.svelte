<script lang="ts">
  import { page } from '$app/stores';
  import TtyStatus from '$lib/components/effects/tty-status.svelte';
</script>

<TtyStatus status="FAIL">
  Failed loading page: {$page.error?.message ?? 'Unknown'}
</TtyStatus>
