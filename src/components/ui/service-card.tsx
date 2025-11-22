'use client'

import { AnimatePresence, motion, useAnimation, useInView, Variants } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export interface Service {
    title: string
    description: string
    highlights: string[]
    tags: string[]
    image: string
    audience: string[]
}

interface ServiceCardProps {
    service: Service
    index: number
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
    const [isExpanded, setIsExpanded] = useState(false)
    // Alternado por índice: pares => imagen izquierda; impares => imagen derecha
    const isLeft = index % 2 === 0
    const rootRef = useRef<HTMLDivElement>(null)
    const inView = useInView(rootRef, { amount: 0.3, once: true })
    const controls = useAnimation()

    useEffect(() => {
        if (inView) {
            controls.start('show')
        }
    }, [inView, controls])

    // Imagen entra desde su borde natural
    const imageSlide: Variants = {
        hidden: { x: isLeft ? -100 : 100, opacity: 0 },
        show: {
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 50,
                damping: 20,
                duration: 0.8,
            },
        },
    }

    // Texto entra desde el lado opuesto
    const textSlide: Variants = {
        hidden: { x: isLeft ? 100 : -100, opacity: 0 },
        show: {
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 50,
                damping: 20,
                delay: 0.2,
                duration: 0.8,
            },
        },
    }

    return (
        <motion.article
            ref={rootRef}
            initial='hidden'
            animate={controls}
            className='grid lg:grid-cols-2 gap-8 lg:gap-16 items-start py-12 lg:py-20'
        >
            {/* IMAGEN */}
            <motion.div
                variants={imageSlide}
                className={`relative aspect-[4/3] lg:aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl
          ${isLeft ? 'lg:order-1' : 'lg:order-2'} w-full self-center`}
            >
                <div className='absolute inset-0 bg-[#D7B27A]/10 z-10 mix-blend-overlay' />
                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className='object-cover transition-transform duration-700 hover:scale-105'
                    sizes='(max-width: 768px) 100vw, 50vw'
                />
            </motion.div>

            {/* TEXTO */}
            <motion.div
                variants={textSlide}
                className={`space-y-6 ${isLeft ? 'lg:order-2' : 'lg:order-1'
                    } w-full`}
            >
                <div className='space-y-4'>
                    <div className='flex flex-wrap gap-2'>
                        {service.tags.map((tag) => (
                            <span
                                key={tag}
                                className='text-xs font-medium tracking-wider uppercase text-[#D7B27A]'
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h3 className='text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight'>
                        {service.title}
                    </h3>
                    <p className='text-lg text-muted-foreground leading-relaxed'>
                        {service.description}
                    </p>
                </div>

                <ul className='space-y-3'>
                    {service.highlights.map((highlight) => (
                        <li
                            key={highlight}
                            className='flex items-center gap-3 text-foreground/90'
                        >
                            <span className='h-1.5 w-1.5 rounded-full bg-[#D7B27A]' />
                            {highlight}
                        </li>
                    ))}
                </ul>

                {/* SECCIÓN DESPLEGABLE AUDIENCIA */}
                <div className='pt-4'>
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className='flex items-center gap-2 text-[#D7B27A] font-medium hover:text-[#D7B27A]/80 transition-colors group'
                    >
                        <span>¿Para quién es esta clase?</span>
                        <ChevronDown
                            className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''
                                }`}
                        />
                    </button>

                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                className='overflow-hidden'
                            >
                                <div className='pt-4 pl-4 border-l-2 border-[#D7B27A]/30 mt-2'>
                                    <ul className='space-y-2'>
                                        {service.audience.map((item) => (
                                            <li
                                                key={item}
                                                className='text-sm text-muted-foreground'
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </motion.article>
    )
}
