<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;
	let loading: boolean = false;

	const signIn: SubmitFunction = async () => {
		loading = true;

		return function ({ update }) {
			loading = false;
			update();
		};
	};
</script>

<main class="mx-auto flex w-full max-w-sm flex-col py-4 text-center">
	<header>
		<h2 class="my-4 text-xl font-bold">Sign In</h2>
	</header>
	<form method="POST" use:enhance={signIn} class="flex flex-col">
		<input type="text" class="input-primary input my-4" name="email" placeholder="Email" />
		<button type="submit" class="btn-primary btn" disabled={loading}>Sign In</button>
	</form>
	{#if form?.success}
		<div class="alert alert-success my-4 flex justify-start">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6 flex-shrink-0 stroke-current"
				fill="none"
				viewBox="0 0 24 24"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
				/></svg
			>

			<span class="inline">We sent a link to <span class="font-semibold">{form.email}</span></span>
		</div>
	{/if}
</main>
