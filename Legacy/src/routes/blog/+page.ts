import { getPosts } from '$lib/utils/blog';

export async function load() {
	const posts = await getPosts();
	return {
		posts
	};
}
