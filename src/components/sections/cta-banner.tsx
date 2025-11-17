import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { WHATSAPP_URL } from '@/lib/constants'

export function CTABanner () {
	return (
		<section className='py-24 md:py-32 px-4 md:px-6 bg-background'>
			<div className='max-w-5xl mx-auto text-center space-y-12'>
				<div className='space-y-8'>
					<h2 className='text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight'>
						Movete, descubrí y potenciá tu arte!
					</h2>
					<p className='text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed text-foreground/80'>
						Ofrezco clases personalizadas y para todos los
						niveles: danza (clásico, contemporáneo, jazz),
						stretching consciente, flexibilidad, y programas
						especiales para bailarines y patinadores.
					</p>
					<p className='text-base md:text-lg text-foreground/70'>
						Ya sea que busques bienestar corporal o
						perfeccionamiento artístico, diseño un plan a tu
						medida.
					</p>
				</div>
				<div className='pt-8'>
					<Button
						asChild
						size='lg'
						className='bg-[#F9C8A3] text-[#0D0D0D] hover:bg-[#F9C8A3]/90 font-semibold text-lg md:text-xl px-10 py-7'
					>
						<Link
							href={WHATSAPP_URL}
							target='_blank'
							rel='noopener noreferrer'
						>
							Empezá hoy: escribime por WhatsApp
						</Link>
					</Button>
				</div>
				<p className='text-sm md:text-base text-foreground/60 pt-6'>
					Cuerpo más ágil, mente más libre y movimiento con
					confianza.
				</p>
			</div>
		</section>
	)
}