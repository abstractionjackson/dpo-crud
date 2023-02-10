<script lang="ts">
	import { page } from '$app/stores';
	import SignOutBtn from '$lib/components/SignOutBtn.svelte';
</script>

<main>
	<header>Hello, {$page.data.session?.user.email}</header>
	<!-- Logout button -->
	<SignOutBtn />
</main>
