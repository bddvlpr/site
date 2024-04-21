import { getPost } from '$lib/api/posts';
import { error } from '@sveltejs/kit';

import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
  const { slug } = params;

  const post = await getPost(slug);

  if (!post) {
    return error(404, 'Post not found');
  }

  return { post };
}) satisfies PageLoad;
