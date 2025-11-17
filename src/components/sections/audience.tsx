import { Card, CardContent } from '@/components/ui/card'

const audiences = [
	{ title: 'Principiantes absolutos' },
	{
		title: 'Bailarines y patinadores con experiencia',
	},
	{
		title: 'Estudiantes aspirantes a carreras artísticas',
	},
	{ title: 'Patinadores de hielo o ruedas' },
	{ title: 'Docentes y entrenadores/as' },
]

export function Audience () {
	return (
		<section
			id='para-quienes'
			className='py-24 md:py-32 px-4 md:px-6 bg-[#1A1A1A]'
		>
			<div className='max-w-7xl mx-auto space-y-16'>
				<div className='text-center space-y-4 max-w-3xl mx-auto'>
					<h2 className='text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground'>
						¿Para quiénes son las clases?
					</h2>
					<p className='text-lg md:text-xl text-muted-foreground'>
						Todos los niveles, desde principiantes hasta
						profesionales
					</p>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{audiences.map((audience) => (
						<Card
							key={audience.title}
							className='bg-card border-2 border-border/50 hover:border-[#D7B27A]/50 transition-all duration-200 hover:-translate-y-1'
						>
							<CardContent className='pt-8 pb-6 flex flex-col items-center text-center'>
								<p className='font-medium text-lg text-card-foreground'>
									{audience.title}
								</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}