import { GITHUB_TOKEN } from '$env/static/private';
import { Octokit } from '@octokit/rest';

const api = new Octokit({
  auth: GITHUB_TOKEN
});

export const getGitHubRepos = async (username: string) =>
  api.repos
    .listForUser({ username })
    .then(({ data }) =>
      data
        .filter(({ archived, stargazers_count }) => !archived && (stargazers_count ?? 0) > 5)
        .sort((a, b) => (b.stargazers_count ?? 0) - (a.stargazers_count ?? 0))
    );

export const getGitHubOrgs = async (username: string) =>
  api.orgs.listForUser({ username }).then(({ data }) => data);
