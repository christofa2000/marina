import { Card, CardContent } from '@/components/ui/card'

const benefits = [
	{
		title: 'Más seguridad y disfrute',
		description: 'En tu relación con el movimiento',
	},
	{
		title: 'Plan adaptado',
		description: 'A tu nivel y ritmo',
	},
	{
		title: 'Acompañamiento profesional',
		description: 'Motivador, profesional y creativo',
	},
	{
		title: 'Herramientas prácticas',
		description: 'Para la vida diaria y el escenario',
	},
]

export function Benefits () {
	return (
		<section
			id='beneficios'
			className='py-24 md:py-32 px-4 md:px-6 bg-[#FBFAF7] text-[#0D0D0D]'
		>
			<div className='max-w-7xl mx-auto space-y-16'>
				<div className='text-center space-y-4 max-w-3xl mx-auto'>
					<h2 className='text-4xl md:text-5xl lg:text-6xl font-serif font-bold'>
						¿Qué te llevás con mis clases?
					</h2>
					<p className='text-lg md:text-xl text-[#0D0D0D]/80'>
						Resultados que transforman tu práctica
					</p>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					{benefits.map((benefit) => (
						<Card
							key={benefit.title}
							className='bg-[#0D0D0D] border-2 border-[#D7B27A]/30 hover:border-[#D7B27A] transition-all duration-200 hover:-translate-y-1'
						>
							<CardContent className='pt-8 pb-6'>
									<div className='space-y-2'>
										<h3 className='font-semibold text-xl text-[#FBFAF7]'>
											{benefit.title}
										</h3>
										<p className='text-base text-[#FBFAF7]/80'>
											{benefit.description}
										</p>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}