<script lang="ts">
	import { page } from '$app/stores';
	import SignOutBtn from '$lib/components/SignOutBtn.svelte';
</script>

<main class="flex flex-col justify-center">
	<header class="mx-auto mt-12 max-w-md text-center">
		<h2 class="text-xl font-bold">Welcome to DPO</h2>
		<p class="my-4">
			Your email: <span class="text-blue-500">{$page.data.session.user.email}</span>
		</p>
	</header>
	<section class="mx-auto max-w-sm">
		<!-- Logout button -->
		<SignOutBtn />
	</section>
</main>
