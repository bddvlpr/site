<script lang="ts">
	import Fa from 'svelte-fa';
	import { faGithub, faLastfm, faSteam } from '@fortawesome/free-brands-svg-icons';
</script>

<div class="bg-white-100 -2 flex h-full flex-col items-center">
	<div class="m-auto">
		<h1 class="text-6xl font-extrabold line-through decoration-8 md:text-8xl">bddvlpr</h1>
		Coming soon...
	</div>
	<div class="pointer-events-auto grid grid-cols-2 gap-2 place-self-start pt-2 md:grid-cols-3">
		<a href="https://github.com/bddvlpr"><Fa icon={faGithub} size="2x" /></a>
		<a href="https://steamcommunity.com/id/gpgkey"><Fa icon={faSteam} size="2x" /></a>
		<a href="https://last.fm/user/bddvlpr"><Fa icon={faLastfm} size="2x" /></a>
	</div>
</div>
