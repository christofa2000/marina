import { Hero } from '@/components/sections/hero'
import { AboutMe } from '@/components/sections/about-me'
import { Services } from '@/components/sections/services'
import { Benefits } from '@/components/sections/benefits'
import { CTABanner } from '@/components/sections/cta-banner'
import { Contact } from '@/components/sections/contact'

export default function Home() {
	return (
		<main>
			<Hero />
			<AboutMe />
			<Services />
			<Benefits />
			<CTABanner />
			<Contact />
		</main>
	)
}