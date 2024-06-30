import { GITHUB_USER, LASTFM_USER } from '$env/static/private';
import { getGitHubOrgs, getGitHubRepos } from '$lib/api/github';
import { getLastFmRecentTracks, getLastFmTopTracks } from '$lib/api/lastfm';

import type { PageServerLoad } from './$types';

export const load = (async () => {
  return {
    orgs: getGitHubOrgs(GITHUB_USER),
    repos: getGitHubRepos(GITHUB_USER),
    tracksrecent: getLastFmRecentTracks(LASTFM_USER),
    trackstop: getLastFmTopTracks(LASTFM_USER)
  };
}) satisfies PageServerLoad;
