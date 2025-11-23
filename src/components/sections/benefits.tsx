'use client'

import { Button } from '@/components/ui/button'
import { WHATSAPP_URL } from '@/lib/constants'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'

const benefits = [
	{
		title: 'Seguridad y Disfrute',
		description:
			'Transformá tu relación con el movimiento. Dejá atrás la inseguridad y conectá con el placer de expresarte.',
	},
	{
		title: 'Plan 100% Adaptado',
		description:
			'Tu cuerpo es único. Tu entrenamiento también debería serlo. Ajustamos cada ejercicio a tu nivel y ritmo.',
	},
	{
		title: 'Acompañamiento Experto',
		description:
			'No estás solo/a. Recibí correcciones precisas, motivación constante y una mirada profesional sobre tu proceso.',
	},
	{
		title: 'Herramientas para la Vida',
		description:
			'Lo que aprendés en clase se traslada a tu día a día: mejor postura, mayor consciencia y presencia escénica.',
	},
]

export function Benefits() {
	const containerRef = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start end', 'end start'],
	})

	const y = useTransform(scrollYProgress, [0, 1], [100, -100])
	const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

	return (
		<section
			ref={containerRef}
			className='relative min-h-screen bg-[#1F1F1F] text-[#FBFAF7] py-24 lg:py-32 overflow-hidden'
		>
			{/* Background Noise Texture (Optional, simulated with CSS) */}
			<div className='absolute inset-0 opacity-[0.03] pointer-events-none bg-[url("https://grainy-gradients.vercel.app/noise.svg")]' />

			<div className='max-w-7xl mx-auto px-6 lg:px-8 relative z-10'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start'>
					{/* Left Column: Sticky CTA */}
					<div className='lg:sticky lg:top-32 space-y-10'>
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, ease: 'easeOut' }}
							viewport={{ once: true }}
						>
							<div className='flex items-center gap-2 text-[#D7B27A] mb-6'>
								<Sparkles className='w-5 h-5' />
								<span className='text-sm font-medium tracking-widest uppercase'>
									Tu Potencial
								</span>
							</div>
							<h2 className='text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] mb-8'>
								Movete, <br />
								<span className='text-[#D7B27A] italic'>
									descubrí
								</span>{' '}
								y potenciá tu arte.
							</h2>
							<p className='text-lg md:text-xl text-[#FBFAF7]/70 leading-relaxed max-w-md'>
								Ofrezco clases personalizadas para todos los
								niveles: danza, stretching y preparación física.
								Diseño un plan a tu medida para que logres un
								cuerpo más ágil y una mente más libre.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.8,
								delay: 0.2,
								ease: 'easeOut',
							}}
							viewport={{ once: true }}
						>
							<Button
								asChild
								size='lg'
								className='bg-[#D7B27A] text-[#1F1F1F] hover:bg-[#C5A065] text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(215,178,122,0.3)]'
							>
								<Link
									href={WHATSAPP_URL}
									target='_blank'
									rel='noopener noreferrer'
									className='flex items-center gap-2'
								>
									Empezá tu transformación
									<ArrowRight className='w-5 h-5' />
								</Link>
							</Button>
						</motion.div>
					</div>

					{/* Right Column: Scrolling Benefits */}
					<div className='space-y-12 lg:pt-20'>
						{benefits.map((benefit, index) => (
							<motion.div
								key={benefit.title}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.6,
									delay: index * 0.1,
									ease: 'easeOut',
								}}
								viewport={{ once: true, margin: '-50px' }}
								className='group'
							>
								<div className='flex gap-6 items-start p-6 rounded-2xl transition-colors duration-300 hover:bg-[#FBFAF7]/5 border border-transparent hover:border-[#D7B27A]/20'>
									<div className='mt-1 shrink-0'>
										<div className='w-10 h-10 rounded-full bg-[#D7B27A]/10 flex items-center justify-center text-[#D7B27A] group-hover:bg-[#D7B27A] group-hover:text-[#1F1F1F] transition-colors duration-300'>
											<CheckCircle2 className='w-5 h-5' />
										</div>
									</div>
									<div className='space-y-3'>
										<h3 className='text-2xl font-serif font-semibold text-[#FBFAF7] group-hover:text-[#D7B27A] transition-colors duration-300'>
											{benefit.title}
										</h3>
										<p className='text-lg text-[#FBFAF7]/60 leading-relaxed'>
											{benefit.description}
										</p>
									</div>
								</div>
								{index !== benefits.length - 1 && (
									<div className='h-px w-full bg-gradient-to-r from-transparent via-[#FBFAF7]/10 to-transparent my-8' />
								)}
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}