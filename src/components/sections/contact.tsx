'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function Contact () {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	})
	const [isSubmitting, setIsSubmitting] = useState(false)

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}))
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setIsSubmitting(true)
		// Aquí iría la lógica de envío del formulario
		// Por ahora solo simulamos un delay
		setTimeout(() => {
			setIsSubmitting(false)
			alert('¡Mensaje enviado! Te contactaré pronto.')
			setFormData({ name: '', email: '', message: '' })
		}, 1000)
	}

	return (
		<section
			id='contacto'
			className='relative min-h-screen flex items-stretch overflow-hidden'
		>
			{/* Formulario a la izquierda */}
			<div className='relative z-10 w-full lg:w-1/2 bg-[#FBFAF7] text-[#0D0D0D] flex items-center justify-center px-4 md:px-8 lg:px-12 py-16 md:py-24'>
				<div className='w-full max-w-lg space-y-10 md:space-y-12'>
					<div className='space-y-4'>
						<h2 className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold tracking-tight text-[#0D0D0D] uppercase'>
							Get in{' '}
							<span className='text-[#D7B27A]'>
								Touch
							</span>
						</h2>
						<p className='text-lg md:text-xl text-[#0D0D0D]/80'>
							¿Tenés preguntas? ¿Interesado en trabajar conmigo? Contactame para más información.
						</p>
					</div>
					<form onSubmit={handleSubmit} className='space-y-6'>
						<div className='space-y-2'>
							<label
								htmlFor='name'
								className='text-sm font-medium text-[#0D0D0D]'
							>
								Nombre
							</label>
							<input
								type='text'
								id='name'
								name='name'
								value={formData.name}
								onChange={handleChange}
								required
								className='w-full px-4 py-3 rounded-lg border-2 border-[#D7B27A]/30 bg-white text-[#0D0D0D] focus:outline-none focus:border-[#D7B27A] transition-colors'
								placeholder='Tu nombre'
							/>
						</div>
						<div className='space-y-2'>
							<label
								htmlFor='email'
								className='text-sm font-medium text-[#0D0D0D]'
							>
								Email
							</label>
							<input
								type='email'
								id='email'
								name='email'
								value={formData.email}
								onChange={handleChange}
								required
								className='w-full px-4 py-3 rounded-lg border-2 border-[#D7B27A]/30 bg-white text-[#0D0D0D] focus:outline-none focus:border-[#D7B27A] transition-colors'
								placeholder='tu@email.com'
							/>
						</div>
						<div className='space-y-2'>
							<label
								htmlFor='message'
								className='text-sm font-medium text-[#0D0D0D]'
							>
								Mensaje
							</label>
							<textarea
								id='message'
								name='message'
								value={formData.message}
								onChange={handleChange}
								required
								rows={6}
								className='w-full px-4 py-3 rounded-lg border-2 border-[#D7B27A]/30 bg-white text-[#0D0D0D] focus:outline-none focus:border-[#D7B27A] transition-colors resize-none'
								placeholder='Tu mensaje...'
							/>
						</div>
						<Button
							type='submit'
							disabled={isSubmitting}
							size='lg'
							className='w-full bg-[#D7B27A] text-[#0D0D0D] hover:bg-[#D7B27A]/90 font-semibold text-base md:text-lg px-8 py-6 uppercase tracking-wider'
						>
							{isSubmitting ? 'Enviando...' : 'Contactar'}
						</Button>
					</form>
				</div>
			</div>
			{/* Foto a la derecha */}
			<div className='hidden lg:block lg:w-1/2 relative'>
				<Image
					src='/contacto.jpeg'
					alt='Marina Romeo - Contacto'
					fill
					className='object-cover sepia-[0.4] brightness-90 contrast-110'
					priority
				/>
				{/* Overlay sepia/marrón para combinar con la paleta */}
				<div className='absolute inset-0 bg-[#D7B27A]/20 mix-blend-overlay' />
			</div>
		</section>
	)
}

