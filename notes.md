# Development Notes

## Frontend

- create the front-end using SvelteKit
  `pnpm create svelte@latest <project-name>`
- add tailwind css and daisyui
  `pnpx avelte-add@latest tailwindcss --daisyui`
- set the theme on app.html
  `<html data-theme="<theme-name>">...</html>`
- update the layout and page at root to remove boilerplate
  - layout is typically a container id="layout", of nav and a slot
  - page is the welccome, a main tag and some title + description

## Backend

- initialize a supabase project
  `supabase init`
- update the _auth_ url to match development site

```
toml
# supabase/config.toml
[auth]
site_url = <project_url>
```

- start the supabase development server
  `supabase start`
- copy the API url and the Anon key to an .env file

```
sh
# .env
PUBLIC_SUPABASE_URL=<API URL>
PUBLIC_SUPABASE_ANON_KEY=<anon key>
```

- install supabase's js client, and the auth helper for SvelteKit
  `pnpm add -D @supabase/supabase-js @supabase/auth-helpers-sveltekit`
  - follow this guide to [set-up auth](https://supabase.com/docs/guides/auth/auth-helpers/sveltekit)
- create a login page, and accompanying Action handler
  `routes/login/+page.svelte`
  `routes/login/+page.server.ts`

## Backend Production

- create a supabase project online
- optionally use adapter-netlify on sveltekit
- create a netlify project
- initialize the local project as a git repository, and publish to GH
- add a build.toml to local netlify
- link the GH repo to Netlify, and deploy

## Development Environment

- add prettier tailwind for class sorting
  `pnpm add -D prettier prettier-plugin-tailwindcss`
