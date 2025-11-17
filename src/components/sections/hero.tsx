export function Hero () {
	return (
		<section className='relative min-h-screen w-full overflow-hidden'>
			{/* Video de fondo */}
			<video
				autoPlay
				loop
				muted
				playsInline
				className='absolute inset-0 w-full h-full object-cover'
			>
				<source src='/hero-video.mp4' type='video/mp4' />
				{/* Fallback si el video no carga */}
			</video>
			{/* Overlay para mejorar legibilidad */}
			<div className='absolute inset-0 bg-black/40' />
			{/* Contenido con frase */}
			<div className='relative z-10 min-h-screen flex items-center justify-center px-4 md:px-6'>
				<div className='max-w-5xl mx-auto text-center'>
					<h1 className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold leading-[1.1] text-white drop-shadow-lg'>
						Movete,
						<br />
						descubrí y
						<br />
						<span className='text-[#F9C8A3]'>
							potenciá
						</span>
						<br />
						tu arte
					</h1>
				</div>
			</div>
		</section>
	)
}