<script lang="ts">
	import Fa from 'svelte-fa';
	import { faGithub, faLastfm, faSpotify, faSteam } from '@fortawesome/free-brands-svg-icons';
	import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
	import type { PageData } from './$types';
	import Anchor from '$lib/components/content/Anchor.svelte';

	export let data: PageData;

	const links = [
		{ href: 'https://github.com/bddvlpr', icon: faGithub },
		{ href: 'https://steamcommunity.com/id/gpgkey', icon: faSteam },
		{ href: 'https://last.fm/user/bddvlpr', icon: faLastfm },
		{ href: 'https://open.spotify.com/user/1158898067', icon: faSpotify },
		{ href: 'mailto:contact@bddvlpr.com', icon: faPaperPlane }
	];

	$: recentSong = data.recentTracks[0];
</script>

<div class="bg-white-100 flex h-full flex-col items-center pt-4">
	<div class="m-auto">
		<h1 class="text-5xl font-extrabold line-through decoration-8 md:text-8xl">bddvlpr</h1>
		<div class="w-48 truncate md:w-96">
			{#if recentSong}
				<Anchor>
					<a href={recentSong.url} class="hover:underline"
						>&sung; {recentSong.name} - {recentSong.artist['#text']}</a
					>
				</Anchor>
			{/if}
		</div>
	</div>
	<div class="grid grid-cols-2 gap-2 place-self-start pt-2 md:grid-cols-3">
		{#each links as { href, icon }}
			<Anchor>
				<a {href}>
					<Fa {icon} size="2x" />
				</a>
			</Anchor>
		{/each}
	</div>
</div>
