import { env } from '$env/dynamic/private';
import type { Track } from '$lib/api/lastfm';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const lastfmRequest = await fetch(
		'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks' +
			`&user=${encodeURIComponent(env.LASTFM_USER)}` +
			`&api_key=${encodeURIComponent(env.LASTFM_API_KEY)}` +
			'&format=json'
	);

	return {
		recentTracks: (await lastfmRequest.json()).recenttracks.track as Track[]
	};
};
