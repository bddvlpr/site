<script lang="ts">
	import Fa from 'svelte-fa';
	import {
		faGithub,
		faLastfm,
		faLinkedin,
		faSpotify,
		faSteam
	} from '@fortawesome/free-brands-svg-icons';
	import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
	import type { PageData } from './$types';

	export let data: PageData;

	$: song = data.song[0] || undefined;
</script>

<div class="bg-white-100 -2 flex h-full flex-col items-center">
	<div class="m-auto">
		<h1 class="text-6xl font-extrabold line-through decoration-8 md:text-8xl">bddvlpr</h1>
		{#if song}
			&sung; {song.name} - {song.artist['#text']}
		{/if}
	</div>
	<div class="pointer-events-auto grid grid-cols-2 gap-2 place-self-start pt-2 md:grid-cols-3">
		<a href="https://github.com/bddvlpr"><Fa icon={faGithub} size="2x" /></a>
		<a href="https://steamcommunity.com/id/gpgkey"><Fa icon={faSteam} size="2x" /></a>
		<a href="https://last.fm/user/bddvlpr"><Fa icon={faLastfm} size="2x" /></a>
		<a href="https://linkedin.com/in/bddvlpr"><Fa icon={faLinkedin} size="2x" /></a>
		<a href="mailto:contact@bddvlpr.com"><Fa icon={faPaperPlane} size="2x" /></a>
		<a href="https://open.spotify.com/user/1158898067"><Fa icon={faSpotify} size="2x" /></a>
	</div>
</div>
