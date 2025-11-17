import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'

interface Service {
	title: string
	description: string
	highlights: string[]
	tags: string[]
}

const services: Service[] = [
	{
		title: 'Danza – Mix de técnicas',
		description:
			'Clases dinámicas que combinan clásico, contemporáneo, jazz y expresión corporal. Un espacio para desarrollar técnica, creatividad y confianza, adaptado a principiantes, intermedios y avanzados.',
		highlights: [
			'Clásico, contemporáneo y jazz',
			'Técnica y expresión para todos los niveles',
		],
		tags: ['Todos los niveles', 'Entrenamiento artístico'],
	},
	{
		title: 'Stretching & Gimnasia Consciente',
		description:
			'Para todo público. Bienestar corporal a través de movilidad articular, alineación postural saludable, ejercicios que mejoran fuerza y flexibilidad. Promueve la autoconsciencia en el movimiento y un equilibrio integral.',
		highlights: [
			'Bienestar corporal y postura saludable',
			'Ideal para personas sedentarias',
		],
		tags: ['Para todo público', 'Bienestar'],
	},
	{
		title:
			'Flexibilidad & Preparación Física para Patinadores y Bailarines',
		description:
			'Entrenamiento funcional enfocado en técnicas de danza y deportes artísticos. Trabajamos líneas, posturas flexibles y fuerza específica para mejorar rendimiento y prevenir lesiones.',
		highlights: [
			'Potenciá tu técnica artística',
			'Prevención de lesiones',
		],
		tags: ['Nivel intermedio-avanzado', 'Preparación física'],
	},
	{
		title: 'OFF Skate – Danza para Patinadores',
		description:
			'Entrenamiento integral que combina técnicas de danza, expresión corporal y sensibilización musical. Ideal para patinadores de competencia, performers o quienes buscan perfeccionar su interpretación artística.',
		highlights: [
			'Entrenamiento artístico para patinadores',
			'Perfeccionamiento de interpretación',
		],
		tags: ['Patinadores', 'Entrenamiento artístico'],
	},
]

export function Services () {
	return (
		<section
			id='servicios'
			className='py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-background'
		>
			<div className='max-w-7xl mx-auto space-y-16 md:space-y-20'>
				<div className='text-center'>
					<h2 className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold tracking-tight text-foreground uppercase mb-4'>
						Clases que{' '}
						<span className='text-[#D7B27A]'>
							Ofrezco
						</span>
					</h2>
					<p className='text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto'>
						Programas adaptados a tu nivel y objetivos
					</p>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10'>
					{services.map((service) => (
						<Card
							key={service.title}
							className='h-full bg-card border border-border/30 hover:border-[#D7B27A]/50 transition-all duration-300 hover:shadow-xl'
						>
							<CardHeader className='space-y-4'>
								<div className='flex flex-wrap gap-2'>
									{service.tags.map((tag) => (
										<span
											key={tag}
											className='text-xs px-3 py-1 rounded-md bg-[#D7B27A]/10 text-[#D7B27A] border border-[#D7B27A]/30 font-medium'
										>
											{tag}
										</span>
									))}
								</div>
								<CardTitle className='text-2xl md:text-3xl font-serif text-card-foreground leading-tight'>
									{service.title}
								</CardTitle>
								<CardDescription className='text-base text-muted-foreground'>
									{service.highlights.join(' • ')}
								</CardDescription>
							</CardHeader>
							<CardContent>
								<p className='text-base leading-relaxed text-card-foreground/90'>
									{service.description}
								</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}