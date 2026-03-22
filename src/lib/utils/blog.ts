import type { BlogPost } from '$lib/types/blog';

export async function getPosts(): Promise<BlogPost[]> {
	const paths = import.meta.glob('/src/lib/data/posts/*.md', { eager: true });
	const posts: BlogPost[] = [];

	for (const path in paths) {
		const file = paths[path] as Record<string, any>;
		const slug = path.split('/').pop()?.replace('.md', '') || '';

		if (file && typeof file === 'object' && 'metadata' in file && file.metadata) {
			const metadata = file.metadata as Omit<BlogPost, 'slug'>;
			
			posts.push({
				...metadata,
				slug,
				content: file.default // the renderable component from mdsvex
			} as BlogPost);
		}
	}

	// Sort posts by date (descending)
	return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
