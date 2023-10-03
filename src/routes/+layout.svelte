<script lang="ts">
	import '../app.postcss';

	import CrtContainer from '$lib/components/effects/CrtContainer.svelte';
	import { Canvas } from '@threlte/core';
	import ComputerScene from '$lib/components/threlte/scenes/ComputerScene.svelte';
	import WebGL from 'three/examples/jsm/capabilities/WebGL.js';
	import { useProgress } from '@threlte/extras';
	import { tweened } from 'svelte/motion';

	const checkWebGL = new Promise<boolean>((resolve) => {
		resolve(WebGL.isWebGLAvailable() || WebGL.isWebGL2Available());
	});

	const { progress } = useProgress();
	const tweenedProgress = tweened($progress, { duration: 800 });
	$: tweenedProgress.set($progress);
</script>

<svelte:head>
	<title>BDDVLPR</title>
</svelte:head>

<CrtContainer>
	{#await checkWebGL then hasWebGL}
		{#if hasWebGL}
			{#if $tweenedProgress < 1}
				<span class="absolute p-4">
					Loading... {($tweenedProgress * 100).toFixed(2)}%
				</span>
			{/if}
			<Canvas>
				<ComputerScene>
					<slot />
				</ComputerScene>
			</Canvas>
		{:else}
			No supported WebGL capabilities found.
			<slot />
		{/if}
	{/await}
</CrtContainer>
