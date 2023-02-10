<script>
	import '../app.postcss';
	import { supabase } from '$lib/db';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange(() => {
			invalidate('supabase:auth');
		});

		return () => {
			subscription.unsubscribe();
		};
	});
</script>

<div id="layout" class="flex min-h-screen flex-col bg-base-100">
	<nav class="flex h-16 items-center justify-center bg-base-200">
		<a href="/">HOME</a>
	</nav>
	<slot />
</div>
