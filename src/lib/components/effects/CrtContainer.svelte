<div class="h-full">
	<div class="crt-circle" />
	<div class="crt-overlay" />
	<slot />
</div>

<style lang="postcss">
	.crt-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		user-select: none;
		pointer-events: none;
		background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
			linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
		background-size: 100% 4px, 30px 100%;
		animation: flicker 100ms infinite;
		z-index: 1;
	}

	.crt-circle {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		user-select: none;
		pointer-events: none;
		background: rgb(255, 255, 255);
		background: radial-gradient(circle, rgba(255, 255, 255, 0) 70%, rgba(0, 0, 0, 0.8) 100%);
		z-index: 2;
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
