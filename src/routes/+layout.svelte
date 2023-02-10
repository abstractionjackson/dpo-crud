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
	<nav class="flex h-16 items-center justify-center bg-blue-200">
		<a href="/" class="link-neutral font-bold">HOME</a>
	</nav>
	<slot />
</div>
