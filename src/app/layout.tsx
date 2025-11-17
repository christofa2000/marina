import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Playfair_Display } from 'next/font/google'
import { Header } from '@/components/header'
import './globals.css'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

const playfair = Playfair_Display({
	variable: '--font-playfair',
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
	title:
		'Marina Romeo - Clases de Danza, Patinaje Artístico y Entrenamiento Físico',
	description:
		'Clases de danza (clásico, contemporáneo, jazz), stretching consciente, flexibilidad y preparación física para bailarines y patinadores. +15 años de experiencia. Licenciada en Composición Coreográfica (UNA).',
	keywords: [
		'danza',
		'danza clásica',
		'danza contemporánea',
		'jazz',
		'stretching',
		'gimnasia consciente',
		'elongación',
		'movilidad articular',
		'preparación física para bailarines',
		'preparación física para patinadores',
		'flexibilidad',
		'bienestar corporal',
		'danza para patinadores',
		'danza off skate',
		'patinaje artístico',
		'entrenamiento físico',
		'Marina Romeo',
	],
	openGraph: {
		title:
			'Marina Romeo - Clases de Danza y Entrenamiento Físico',
		description:
			'Clases personalizadas de danza, stretching y flexibilidad para todos los niveles. Bienestar corporal y perfeccionamiento artístico.',
		type: 'website',
		locale: 'es_AR',
	},
}

export default function RootLayout ({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='es'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
			>
				<Header />
				{children}
			</body>
		</html>
	)
}