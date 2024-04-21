import { getPosts } from '$lib/api/posts';

import type { PageServerLoad } from './$types';

export const load = (async () => {
  return {
    posts: getPosts()
  };
}) satisfies PageServerLoad;
