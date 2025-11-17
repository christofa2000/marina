'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const navItems = [
	{ label: 'About me', href: '#acerca-de' },
	{ label: 'Studio', href: '#servicios' },
	{ label: 'Coreógrafa', href: '#acerca-de' },
	{ label: 'Producción artística', href: '#acerca-de' },
]

export function Header () {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
			<div className='container mx-auto px-4 md:px-6'>
				<div className='flex h-16 md:h-20 items-center justify-between'>
					{/* Logo / Nombre */}
					<Link
						href='/'
						className='flex items-center space-x-2 font-serif text-xl md:text-2xl font-bold text-foreground hover:text-[#F9C8A3] transition-colors'
					>
						<span>Marina Romeo</span>
					</Link>

					{/* Desktop Navigation */}
					<nav className='hidden lg:flex items-center gap-6'>
						{navItems.map((item) => (
							<Link
								key={item.label}
								href={item.href}
								className='text-sm md:text-base text-foreground/80 hover:text-[#F9C8A3] transition-colors'
							>
								{item.label}
							</Link>
						))}
						<Button
							asChild
							size='sm'
							className='bg-[#F9C8A3] text-[#0D0D0D] hover:bg-[#F9C8A3]/90 ml-4'
						>
							<Link href='#contacto'>
								Contacto
							</Link>
						</Button>
					</nav>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setIsOpen(!isOpen)}
						className='lg:hidden flex flex-col gap-1.5 p-2'
						aria-label='Toggle menu'
						aria-expanded={isOpen}
					>
						<span
							className={`block h-0.5 w-6 bg-foreground transition-all ${
								isOpen
									? 'rotate-45 translate-y-2'
									: ''
							}`}
						/>
						<span
							className={`block h-0.5 w-6 bg-foreground transition-all ${
								isOpen ? 'opacity-0' : ''
							}`}
						/>
						<span
							className={`block h-0.5 w-6 bg-foreground transition-all ${
								isOpen
									? '-rotate-45 -translate-y-2'
									: ''
							}`}
						/>
					</button>
				</div>

				{/* Mobile Menu */}
				{isOpen && (
					<nav className='lg:hidden pb-6 space-y-4 animate-in slide-in-from-top'>
						{navItems.map((item) => (
							<Link
								key={item.label}
								href={item.href}
								onClick={() => setIsOpen(false)}
								className='text-base text-foreground/80 hover:text-[#F9C8A3] transition-colors py-2 block'
							>
								{item.label}
							</Link>
						))}
						<div className='pt-2'>
							<Button
								asChild
								size='sm'
								className='w-full bg-[#F9C8A3] text-[#0D0D0D] hover:bg-[#F9C8A3]/90'
							>
								<Link
									href='#contacto'
									onClick={() => setIsOpen(false)}
								>
									Contacto
								</Link>
							</Button>
						</div>
					</nav>
				)}
			</div>
		</header>
	)
}
