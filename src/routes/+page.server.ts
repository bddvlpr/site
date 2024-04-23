import { GITHUB_USER, LASTFM_USER } from '$env/static/private';
import { getGitHubOrgs, getGitHubRepos } from '$lib/api/github';
import { getLastFmTopTracks } from '$lib/api/lastfm';

import type { PageServerLoad } from './$types';

export const load = (async () => {
  return {
    orgs: getGitHubOrgs(GITHUB_USER),
    repos: getGitHubRepos(GITHUB_USER),
    tracks: getLastFmTopTracks(LASTFM_USER)
  };
}) satisfies PageServerLoad;
