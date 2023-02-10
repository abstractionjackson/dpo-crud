<script lang="ts">
	import { supabase } from '$lib/db';
	import { goto } from '$app/navigation';
	const signOut = async () => {
		// signout of supabase
		await supabase.auth.signOut();
		// goto home page
		goto('/');
	};
</script>

<button class="btn-secondary btn" on:click={signOut}>Sign Out</button>
