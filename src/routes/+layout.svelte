<script lang="ts">
	import '../app.postcss';

	import CrtContainer from '$lib/components/effects/CrtContainer.svelte';
	import { Canvas } from '@threlte/core';
	import ComputerScene from '$lib/components/threlte/scenes/ComputerScene.svelte';
	import WebGL from 'three/examples/jsm/capabilities/WebGL.js';

	$: hasWebGL = WebGL.isWebGLAvailable() || WebGL.isWebGL2Available();
</script>

<svelte:head>
	<title>BDDVLPR</title>
</svelte:head>

<CrtContainer>
	{#if hasWebGL}
		<Canvas>
			<ComputerScene>
				<slot />
			</ComputerScene>
		</Canvas>
	{:else}
		No supported WebGL capabilities found.
		<slot />
	{/if}
</CrtContainer>
