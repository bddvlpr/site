<div class="h-full">
	<div class="crt-overlay pointer-events-none absolute left-0 top-0 h-full w-full select-none" />
	<div class="crt-circle pointer-events-none absolute left-0 top-0 h-full w-full select-none" />
	<slot />
</div>

<style lang="postcss">
	.crt-overlay {
		background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
			linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
		background-size: 100% 4px, 30px 100%;
		animation: flicker 100ms infinite;
		z-index: 9999999999999;
	}

	.crt-circle {
		background: radial-gradient(circle, rgba(255, 255, 255, 0) 70%, rgba(0, 0, 0, 0.8) 100%);
		z-index: 999999999999;
	}

	@keyframes flicker {
		0% {
			transform: translateY(2px);
		}
		100% {
			transform: translateY(0px);
		}
	}
</style>
