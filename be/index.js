import supabaseClient from './supabase.js';

const getAllPosts = async () => {
	const { data, error } = await supabaseClient
		.from('posts')
		.select('*')
		.order('id', { ascending: false });
	return { data, error };
};

(async function main() {
	const posts = await getAllPosts();
	console.log(posts);
})();
