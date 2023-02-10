import '$lib/db';
import type { RequestHandler } from './$types';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { redirect, error } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	// protect requests to all routes that start with /protected-routes
	if (event.url.pathname.startsWith('/protected-routes')) {
		const { session } = await getSupabase(event);

		if (!session) {
			throw redirect(303, '/');
		}
	}

	// protect POST requests to all routes that start with /protected-posts
	if (event.url.pathname.startsWith('/protected-posts') && event.request.method === 'POST') {
		const { session } = await getSupabase(event);

		if (!session) {
			throw error(303, '/');
		}
	}

	return resolve(event);
};
