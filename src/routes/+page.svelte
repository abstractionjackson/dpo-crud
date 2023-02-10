<script lang="ts">
	import { page } from '$app/stores';
	import SignOutBtn from '$lib/components/SignOutBtn.svelte';
	let title: string = 'DPO';
	let description: string = 'A todo list that features Duration, Path, and Outcome fields';
</script>

<main class="mx-auto flex w-fit flex-1 flex-col justify-center text-center">
	<header class="border p-12 shadow">
		<h1 class="text-xl font-bold">{title}</h1>
		<p class="my-4">{description}</p>
		{#if $page.data.session}
			<!-- link to Profile -->
			<a href="/protected-routes/profile" class="btn-primary btn">Profile</a>
			<!-- Sign out button -->
			<SignOutBtn />
		{:else}
			<a href="/login" class="btn-primary btn">Sign In</a>
		{/if}
	</header>
</main>
