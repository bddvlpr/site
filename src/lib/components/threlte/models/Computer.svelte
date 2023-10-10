<script lang="ts">
	import { Group } from 'three';
	import { T, forwardEventHandlers, useFrame } from '@threlte/core';
	import { useGltf } from '@threlte/extras';

	export const ref = new Group();

	const gltf = useGltf('/models/computer.glb', { useDraco: true });
	const component = forwardEventHandlers();

	let frame = 0;

	useFrame(() => {
		if (!$gltf) return;

		const emission = frame % +Math.random().toFixed(0) === 0 ? 0 : 1;

		$gltf.materials['Material.002'].emissive = {
			r: emission,
			g: emission,
			b: emission,
			isColor: true
		};

		frame++;
	});
</script>

<T is={ref} dispose={false} {...$$restProps} bind:this={$component}>
	{#await gltf}
		<slot name="fallback" />
	{:then gltf}
		<T.Group rotation={[-Math.PI / 2, 0, 0]} scale={0.96}>
			<T.Mesh geometry={gltf.nodes.Object_2.geometry} material={gltf.materials['Material.001']} />
			<T.Mesh geometry={gltf.nodes.Object_3.geometry} material={gltf.materials['Material.002']} />
			<T.Mesh geometry={gltf.nodes.Object_4.geometry} material={gltf.materials['Material.003']} />
			<T.Mesh geometry={gltf.nodes.Object_5.geometry} material={gltf.materials['Material.004']} />
			<T.Mesh geometry={gltf.nodes.Object_6.geometry} material={gltf.materials['None.001']} />
			<T.Mesh geometry={gltf.nodes.Object_7.geometry} material={gltf.materials['None.003']} />
		</T.Group>
	{:catch error}
		<slot name="error" {error} />
	{/await}

	<slot {ref} />
</T>
