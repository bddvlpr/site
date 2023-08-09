<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="flex h-full flex-col items-center">
	<div class="m-auto">
		<h1 class="text-6xl font-extrabold uppercase md:text-8xl">
			{$page.status}
			{$page.error?.message}
		</h1>
		<a class="underline underline-offset-2" href="/">
			...and so they left, bitterly avenged and deeply lost.
		</a>
	</div>
</div>
