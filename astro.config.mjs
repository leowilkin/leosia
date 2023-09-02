import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Leosia.GOV',
			logo: {
				src: './src/assets/leosiafavicon.png',
			  },
			favicon: '/favicon_dark.png',
			customCss: [
				// Relative path to my custom CSS file
				'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: 'Visitors Guide',
					autogenerate: { directory: 'visitors' },
				},
				{
					label: 'Residents Guide',
					autogenerate: { directory: 'residents' },
				},
				{
					label: 'Visas & Applications',
					autogenerate: { directory: 'applications' },
				},
				{
					label: 'Government Services',
					autogenerate: { directory: 'services' },
				},
			],
			defaultLocale: 'en',
			locales: {
				// English docs in `src/content/docs/en/`
				en: {
					label: 'English',
					lang: 'en-GB',
				},
				// French docs in `src/content/docs/zh/`
				fr: {
					label: 'Français',
					lang: 'fr-FR',
				},
				// Spanish docs in `src/content/docs/ar/`
				es: {
					label: 'Español',
					lang: 'es-ES',
				},
			},
		}),
	],

	// Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
	image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
