<script lang="ts">
  import TtyEffect from '$lib/components/effects/tty-effect.svelte';
  import TtyIntro from '$lib/components/effects/tty-intro.svelte';
  import Navbar from '$lib/components/navigation/navbar.svelte';
  import { lines } from '$lib/tty';

  import '../app.pcss';

  const { children } = $props();

  let finished = $state(false);
</script>

<TtyEffect>
  <TtyIntro bind:finished {lines} />
  {#if finished}
    {@render children()}
    <br />
    <Navbar />
  {/if}
</TtyEffect>
