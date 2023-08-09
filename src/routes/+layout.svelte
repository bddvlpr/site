<script lang="ts">
	import '../app.postcss';

	import CrtContainer from '$lib/components/effects/CrtContainer.svelte';
</script>

<svelte:head>
	<title>BDDVLPR</title>
</svelte:head>

<CrtContainer>
	<slot />
</CrtContainer>
