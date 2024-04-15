import { getPosts } from '$lib/posts';

import type { PageServerLoad } from './$types';

const POSTS_PER_PAGE = 10;

export const load = (async ({ url }) => {
  const offset = Number(url.searchParams.get('offset')) ?? 0;

  return {
    posts: await getPosts(POSTS_PER_PAGE, offset * POSTS_PER_PAGE)
  };
}) satisfies PageServerLoad;
