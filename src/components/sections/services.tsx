import ServiceCard from '@/components/ui/service-card'

interface Service {
	title: string
	description: string
	highlights: string[]
	tags: string[]
	image: string
	audience: string[]
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
		image: '/images/services/dance-mix.png',
		audience: [
			'Principiantes absolutos que quieren aprender desde cero.',
			'Bailarines intermedios y avanzados que buscan perfeccionar su técnica.',
			'Personas que buscan una actividad física creativa y expresiva.',
		],
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
		image: '/images/services/stretching.png',
		audience: [
			'Personas sedentarias que quieren mejorar su postura y movilidad.',
			'Quienes buscan aliviar dolores corporales y tensiones.',
			'Cualquier persona interesada en el bienestar físico y mental.',
		],
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
		image: '/images/services/flexibility.png',
		audience: [
			'Patinadores y bailarines que compiten o se presentan en shows.',
			'Estudiantes de carreras artísticas que necesitan mejorar su flexibilidad.',
			'Deportistas que buscan complementar su entrenamiento con trabajo de líneas y extensión.',
		],
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
		image: '/images/services/off-skate.png',
		audience: [
			'Patinadores de hielo o ruedas (artístico).',
			'Competidores que buscan mejorar su puntaje en componentes artísticos.',
			'Entrenadores que quieren herramientas para sus alumnos.',
		],
	},
]

export function Services() {
	return (
		<section
			id='servicios'
			className='py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-background overflow-hidden'
		>
			<div className='max-w-7xl mx-auto space-y-20 md:space-y-32'>
				<div className='text-center space-y-6'>
					<h2 className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold tracking-tight text-foreground uppercase'>
						Clases que{' '}
						<span className='text-[#D7B27A]'>
							Ofrezco
						</span>
					</h2>
					<p className='text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto'>
						Programas adaptados a tu nivel y objetivos, diseñados para potenciar tu movimiento.
					</p>
				</div>

				<div className='flex flex-col'>
					{services.map((service, index) => (
						<ServiceCard
							key={service.title}
							service={service}
							index={index}
						/>
					))}
				</div>
			</div>
		</section>
	)
}