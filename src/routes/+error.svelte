<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="flex h-full flex-col items-center">
	<div class="m-auto">
		<h1 class="text-4xl font-extrabold uppercase lg:text-6xl">
			{$page.status}
			{$page.error?.message}
		</h1>
		<a class="pointer-events-auto underline underline-offset-2" href="/">
			Return to home page &gt;
		</a>
	</div>
</div>
