'use client'
import { partnersLogos } from '@/utils/constants';
import Image from 'next/image';
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Scrollbar, A11y, Autoplay } from 'swiper/modules';

function Companies() {
	return (
		<section className="w-full h-32 my-16 px-8">
			<Swiper
				modules={[Navigation, Scrollbar, A11y, Autoplay]}
				spaceBetween={50}
				slidesPerView={6}
				navigation
				scrollbar={{ draggable: true }}
				loop={true}
				autoplay={{
                    delay: 2500,
                }}
				className="w-full h-full"
			>
				{partnersLogos.map((partner, index) => (
					<SwiperSlide
						key={index}
						className="w-1/6 h-32 relative text-gray-dark fill-current grayscale contrast-150  transition-all hover:grayscale-0 hover:contrast-100 "
					>
						<Image
							src={partner.logo}
							alt={partner.alt}
							layout="fill"
							objectFit="contain"
							objectPosition="center"
							className="cursor-pointer"
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}

export default Companies;
