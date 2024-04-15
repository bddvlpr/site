import type { ComponentType } from 'svelte';

export type Post = {
  content: ComponentType;
  metadata: Metadata;
};

export type Metadata = {
  authors: string[];
  date: string;
  description: string;
  slug: string;
  tags: string[];
  title: string;
};

export const getPosts = async (
  limit?: number,
  offset?: number,
  tag?: string
): Promise<Array<Metadata>> => {
  const posts = (
    await Promise.all(
      Object.entries(import.meta.glob('../posts/*.svx')).map(async ([path, resolver]) => {
        const { metadata } = (await resolver()) as { metadata: Metadata };
        const slug = path.split('/').pop()!.replace('.svx', '');
        return { ...metadata, slug };
      })
    )
  )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .filter((post) => !tag || post.tags.includes(tag));

  return limit ? posts.slice(offset ?? 0, offset ? offset + limit : limit) : posts;
};

export const getPost = async (slug: string): Promise<Post | null> => {
  const post = await import(`../posts/${slug}.svx`).catch(() => null);
  if (!post) return null;

  return {
    content: post.default,
    metadata: { ...post.metadata, slug }
  };
};

export const getTags = async (): Promise<string[]> => {
  const posts = await getPosts();
  const tags = posts.flatMap((post) => post.tags);
  return [...new Set(tags)];
};
