'use client'

import React, { useEffect } from 'react';
import { heroSlides } from '@/data/data';
import './style.css';
import HeroSlide from '@/components/HeroSlide';

// import AOS
import AOS from 'aos';
  
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper Style
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: false,
    });
  }, []);

  return (
  <>
    <div>
    {/* About Us Section */}
    <section className="about-section">
        <h1>About Us</h1>
        <p>
            Welcome to MorningTea! We are dedicated to bringing you the freshest news and stories every morning.
            Our mission is to keep you informed and entertained with a blend of insightful articles and lighthearted content.
        </p>
        <p>
            Our team is passionate about delivering high-quality journalism and sharing the stories that matter most to you.
            Stay tuned for daily updates and join our community of readers who start their day with MorningTea.
        </p>
    </section>
</div>


    <section id='hero-slider' className='hero-slider'>
      <div className='container-md' data-aos='fade-in'>
        <div className='row'>
          <div className='col-12'>
            <Swiper
              slidesPerView={'auto'}
              speed={500}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
              }}
              navigation={{
                nextEl: '.custom-swiper-button-next',
                prevEl: '.custom-swiper-button-prev',
              }}
              modules={[Autoplay, Pagination, Navigation]}
              loop={true}
              className='sliderFeaturePosts'
            >
              {heroSlides.map((slide, index) => (
                <SwiperSlide key={index}>
                  {/* include customized hero slide template */}
                  <HeroSlide slide={slide} />
                </SwiperSlide>
              ))}

              <div className='custom-swiper-button-next'>
                <span className='bi-chevron-right'></span>
              </div>
              <div className='custom-swiper-button-prev'>
                <span className='bi-chevron-left'></span>
              </div>

              <div className='swiper-pagination'></div>
            </Swiper>
          </div>
        </div>
      </div>
      
    </section>
    </>
  );
}
