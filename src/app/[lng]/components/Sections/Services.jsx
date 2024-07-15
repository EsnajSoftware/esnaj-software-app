'use client';
import React from 'react';
import TitleSection from '../globals/Sections/TitleSection';
import { useTranslation } from '@/app/i18n/client';
import { mainServices, otherServices } from '@/utils/constants';
import Link from 'next/link';

function Services({ lng }) {
	const { t } = useTranslation(lng);

	return (
		<section className="w-full flex flex-col items-start gap-12 py-4 px-4 md:px-12">
			<TitleSection
				title={t('home.services.title')}
				text={t('home.services.description')}
			/>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{mainServices.map((service) => (
					<article
						key={service.id}
						className="w-full md:h-[300px] shadow-sm border border-gray-dark rounded-sm flex flex-col items-start justify-between p-6 py-8 gap-4 relative"
					>
						<div className="w-full h-max">
							{React.cloneElement(service.icon, {
								width: 45,
								height: 45,
                className: 'fill-gray-light',
							})}
						</div>
						<div className="flex flex-col items-start gap-2">
							<h3 className="text-2xl font-normal ">{service.name}</h3>
							<p className="text-lg font-light text-gray-light">
								{service.description}
							</p>
							<Link
								className="text-xl font-light underline decoration-accent"
								href={`/${lng}/services/${service.link}`}
							>
								Read more
							</Link>
						</div>
					</article>
				))}
			</div>
			<div className="w-full flex flex-col items-start gap-4 p-8 border border-gray-dark shadow-sm">
				<h2 className="text-3xl sm:text-4xl font-normal ">{t('home.services.subtitle')}</h2>
				<p className="text-xl font-light">{t('home.services.text_1')}</p>
				<p className="text-2xl font-light">{t('home.services.text_2')}</p>
				<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
					{otherServices.map((service) => (
						<article
							key={service.id}
							className="w-full flex flex-col items-start justify-start py-4 gap-2 relative"
						>
							<div className="w-full h-max flex flex-col items-start md:flex-row md:items-center gap-4">
								{React.cloneElement(service.icon, {
									width: 25,
									height: 25,
                  className: 'fill-gray-light',
								})}
								<h3 className="text-2xl font-normal ">{service.name}</h3>
							</div>
								<p className="text-xl font-light text-gray-light">
									{service.description}
								</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}

export default Services;
