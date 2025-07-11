import { GITHUB_TOKEN } from '$env/static/private';
import { Octokit } from '@octokit/rest';

const api = new Octokit({
  auth: GITHUB_TOKEN
});

export const getGitHubRepos = async (username: string) =>
  api.repos
    .listForUser({ per_page: 100, username })
    .then(({ data }) =>
      data
        .filter(({ topics }) => topics?.includes('pinned'))
        .sort((a, b) => (b.stargazers_count ?? 0) - (a.stargazers_count ?? 0))
    );

export const getGitHubOrgs = async (username: string) =>
  api.orgs
    .listForUser({ per_page: 100, username })
    .then(({ data }) => data.sort((a, b) => a.login.localeCompare(b.login)));
