import type { Actions } from './$types';
import { supabase } from '$lib/db';

export const actions = {
	default: async (event) => {
		const data = await event.request.formData();
		const email = data.get('email');
		try {
			const { data } = await supabase.auth.signInWithOtp({ email });
			return { success: true, email };
		} catch (error) {
			console.error(error);
			return { success: false };
		}
	}
} satisfies Actions;
