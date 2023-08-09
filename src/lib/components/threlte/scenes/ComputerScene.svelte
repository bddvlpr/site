<script lang="ts">
	import { T } from '@threlte/core';
	import Computer from '../models/Computer.svelte';
	import { HTML, OrbitControls } from '@threlte/extras';
	import { degToRad } from 'three/src/math/MathUtils';
</script>

<Computer />

<HTML transform position.y={2} pointerEvents="none">
	<slot />
</HTML>

<T.DirectionalLight intensity={0.2} position={[0, 10, 10]} />
<T.AmbientLight intensity={0.01} />

<T.OrthographicCamera makeDefault fov={25} position={[-10, 6, 20]}>
	<OrbitControls
		enableZoom
		enablePan={false}
		enableDamping
		maxPolarAngle={degToRad(90)}
		minPolarAngle={degToRad(45)}
		maxAzimuthAngle={degToRad(45)}
		minAzimuthAngle={degToRad(-45)}
		minZoom={65}
		maxZoom={120}
	/>
</T.OrthographicCamera>
