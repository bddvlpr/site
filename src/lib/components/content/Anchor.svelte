<script lang="ts">
	export let interactable = true;
</script>

<div class:pointer-events-auto={interactable}>
	<slot />
</div>
