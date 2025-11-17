import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-geist-sans)', 'sans-serif'],
				serif: ['var(--font-playfair)', 'serif'],
				mono: ['var(--font-geist-mono)', 'monospace'],
			},
			colors: {
				// Paleta Black & Peach
				brand: {
					50: '#FBFAF7', // Blanco perla
					100: '#F9C8A3', // Durazno suave
					200: '#F2D4C1', // Piel rosada
					400: '#F9C8A3', // Durazno (alias)
					500: '#D7B27A', // Dorado suave
					900: '#0D0D0D', // Negro carbón
				},
			},
		},
	},
	plugins: [],
}

export default config
