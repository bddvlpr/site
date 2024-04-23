<script lang="ts">
  import TtyEffect from '$lib/components/effects/tty-effect.svelte';
  import TtyIntro from '$lib/components/effects/tty-intro.svelte';
  import Navbar from '$lib/components/navigation/navbar.svelte';

  import '../app.pcss';

  const { children } = $props();

  let finished = $state(false);
</script>

<div class="p-2">
  <TtyEffect>
    <TtyIntro bind:finished />
    {#if finished}
      {@render children()}
      <Navbar />
    {/if}
  </TtyEffect>
</div>
