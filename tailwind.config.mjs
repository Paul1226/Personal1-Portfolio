/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				bebas: ['Bebas Neue', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif'],
			},
			colors:{
				'razzmatazz': '#DC0155',
				'texto': '#333333',
				'mountain': '#909090',
			}
		},
	},
	plugins: [],
}
