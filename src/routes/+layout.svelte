<script lang="ts">
	import '../app.postcss';

	import CrtContainer from '$lib/components/effects/CrtContainer.svelte';
	import { Canvas } from '@threlte/core';
	import ComputerScene from '$lib/components/threlte/scenes/ComputerScene.svelte';
</script>

<svelte:head>
	<title>BDDVLPR</title>
</svelte:head>

<CrtContainer>
	<Canvas>
		<ComputerScene>
			<slot />
		</ComputerScene>
	</Canvas>
</CrtContainer>
