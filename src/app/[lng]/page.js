import Link from 'next/link';
import { languages, fallbackLng } from '../i18n/settings';
import { useTranslation } from '../i18n';
import LanguageSwitcher from './components/globals/LanguageSwitcher';
import HeroHome from './components/Sections/HeroHome';
import Companies from './components/Sections/Companies';
import Services from './components/Sections/Services';
import Projects from './components/Sections/Projects';
import Contact from './components/Sections/Contact';
import { METADATA } from '@/utils/constants';

export async function generateMetadata({ params: { lng } }) {
	if (languages.indexOf(lng) < 0) lng = fallbackLng;
	return {
		title: METADATA[`home_${lng}`].title,
		description: METADATA[`home_${lng}`].description,
		keywords: METADATA[`home_${lng}`].keywords
	};
}

export default async function Page({ params: { lng } }) {
	const { t } = await useTranslation(lng);

	return (
		<main className="w-full 2xl:mx-auto">
			<HeroHome lng={lng} />
			<div className="w-full flex flex-col gap-12 px-6 2xl:mx-auto">
				<Companies />
				<Services lng={lng} />
				<Projects lng={lng} />
				<Contact lng={lng} />
			</div>
		</main>
	);
}
