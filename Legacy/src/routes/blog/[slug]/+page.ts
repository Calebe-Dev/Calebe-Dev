import { error } from '@sveltejs/kit';
import type { BlogPost } from '$lib/types/blog';

export async function load({ params }) {
	try {
		const paths = import.meta.glob('/src/lib/data/posts/*.md', { eager: true });
		let postFile: Record<string, any> | undefined;
		let matchingSlug = '';

		for (const path in paths) {
			const slug = path.split('/').pop()?.replace('.md', '');
			if (slug === params.slug) {
				postFile = paths[path] as Record<string, any>;
				matchingSlug = slug;
				break;
			}
		}

		if (!postFile) {
			throw error(404, 'Post not found');
		}

		const metadata = postFile.metadata as Omit<BlogPost, 'slug'>;
		
		return {
			content: postFile.default,
			meta: {
				...metadata,
				slug: matchingSlug
			} as BlogPost
		};
	} catch (e) {
		throw error(404, 'Post not found');
	}
}
