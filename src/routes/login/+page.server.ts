import type { Actions } from './$types';
import { supabase } from '$lib/db';

export const actions = {
	default: async (event) => {
		const formData = await event.request.formData();
		const email = formData.get('email');
		const { data, error } = await supabase.auth.signInWithOtp({ email });
		if (error) return { success: false };
		return { success: true, email };
	}
} satisfies Actions;
