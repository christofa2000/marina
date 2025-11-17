import Image from 'next/image'

export function AboutMe () {
	return (
		<section
			id='acerca-de'
			className='relative py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-[#FBFAF7] text-[#0D0D0D] overflow-hidden'
		>
			<div className='max-w-7xl mx-auto'>
				{/* Título grande centrado */}
				<div className='text-center mb-12 md:mb-16 lg:mb-20'>
					<h2 className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold tracking-tight text-[#0D0D0D] uppercase'>
						Acerca de{' '}
						<span className='text-[#D7B27A]'>
							Mí
						</span>
						</h2>
				</div>

				{/* Layout con imágenes laterales y texto central */}
				<div className='relative'>
					{/* Imagen izquierda - Parcialmente recortada */}
					<div className='hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[30%] w-[35%] aspect-[3/4] opacity-40 pointer-events-none'>
						<div className='relative w-full h-full'>
							<Image
								src='/1 .jpeg'
								alt='Marina Romeo - Danza y movimiento'
								fill
								className='object-cover grayscale'
								sizes='35vw'
							/>
						</div>
					</div>

					{/* Contenido central - Texto */}
					<div className='relative z-10 max-w-4xl mx-auto'>
						<div className='bg-[#FBFAF7]/95 backdrop-blur-sm rounded-lg p-8 md:p-12 lg:p-16 shadow-lg'>
							<div className='space-y-6 md:space-y-8 text-base md:text-lg lg:text-xl leading-relaxed text-[#0D0D0D]/90'>
								<p>
									Graduada en la Universidad Nacional de las
									Artes como{' '}
									<span className='font-semibold text-[#0D0D0D]'>
										Licenciada en Composición
										Coreográfica
									</span>
									, me desempeño como performer de diversos
									estilos en shows de danza, patinaje y música
									en vivo.
								</p>
								<p>
									Además, trabajo como{' '}
									<span className='font-semibold text-[#0D0D0D]'>
										productora de eventos culturales y
										espectáculos
									</span>
									.
								</p>
								<p>
									Con amplia formación y trayectoria en patinaje
									artístico competitivo sobre ruedas, cuento
									con{' '}
									<span className='font-bold text-[#0D0D0D]'>
										más de 20 años de experiencia
									</span>{' '}
									como entrenadora y coreógrafa de grupos y
									solistas.
								</p>
								<p>
									Brindo clases, talleres y seminarios de
									formación artística para patinadores,
									entrenadores y bailarines.
								</p>
								<p className='italic text-[#0D0D0D]/80'>
									Mis últimas experiencias profesionales han
									sido como performer en shows de patinaje
									sobre hielo.
								</p>
							</div>
						</div>
					</div>

					{/* Imagen derecha - Parcialmente recortada */}
					<div className='hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-[30%] w-[35%] aspect-[3/4] opacity-40 pointer-events-none'>
						<div className='relative w-full h-full'>
							<Image
								src='/2.jpeg'
								alt='Marina Romeo - Patinaje artístico'
								fill
								className='object-cover grayscale'
								sizes='35vw'
							/>
						</div>
					</div>
				</div>

				{/* Galería inferior: 3 imágenes */}
				<div className='mt-20 md:mt-24 lg:mt-32'>
					<div className='text-center mb-8 md:mb-12'>
						<h3 className='text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-[#0D0D0D] uppercase'>
							Explorá{' '}
							<span className='text-[#D7B27A]'>
								Más
							</span>
						</h3>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8'>
						{/* Imagen 3 */}
						<div className='relative w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden group'>
							<Image
								src='/3.jpeg'
								alt='Marina Romeo - Entrenamiento y formación'
								fill
								className='object-cover transition-transform duration-700 ease-out group-hover:scale-110 grayscale group-hover:grayscale-0'
								sizes='(max-width: 768px) 100vw, 33vw'
							/>
						</div>

						{/* Imagen 4 */}
						<div className='relative w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden group'>
							<Image
								src='/4.jpeg'
								alt='Marina Romeo - Coreografía y producción'
								fill
								className='object-cover transition-transform duration-700 ease-out group-hover:scale-110 grayscale group-hover:grayscale-0'
								sizes='(max-width: 768px) 100vw, 33vw'
							/>
						</div>

						{/* Imagen 1 como tercera */}
						<div className='relative w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden group'>
							<Image
								src='/1 .jpeg'
								alt='Marina Romeo - Danza y movimiento'
								fill
								className='object-cover transition-transform duration-700 ease-out group-hover:scale-110 grayscale group-hover:grayscale-0'
								sizes='(max-width: 768px) 100vw, 33vw'
							/>
									</div>
					</div>
				</div>
			</div>
		</section>
	)
}