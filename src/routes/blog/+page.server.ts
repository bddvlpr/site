import { getPosts } from '$lib/posts';

import type { PageServerLoad } from './$types';

export const load = (async () => {
  const posts = await getPosts();

  return { posts };
}) satisfies PageServerLoad;
