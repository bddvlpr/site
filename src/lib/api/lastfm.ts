import { LASTFM_TOKEN } from '$env/static/private';
import { LastFMUser } from 'lastfm-ts-api';

const api = new LastFMUser(LASTFM_TOKEN);

export const getLastFmRecentTracks = (username: string) =>
  api.getRecentTracks({ user: username }).then(({ recenttracks }) => recenttracks.track);

export const getLastFmTopTracks = (username: string) =>
  api
    .getTopTracks({ period: '7day', user: username })
    .then(({ toptracks }) => toptracks.track.splice(0, 5));
