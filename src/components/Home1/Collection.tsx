'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import { useRouter } from 'next/navigation';
// import Fade from 'react-reveal'

const Collection = () => {
    const router = useRouter()

    const handleTypeClick = (type: string) => {
        router.push(`/shop/breadcrumb1?type=${type}`);
    };

    return (
        <>
            <div className="collection-block md:pt-20 pt-10">
                <div className="container">
                    <div className="heading3 text-center">Browse Product Categories</div>
                </div>
                <div className="list-collection section-swiper-navigation md:mt-10 mt-6 sm:px-5 px-4">
                    <Swiper
                        spaceBetween={12}
                        slidesPerView={2}
                        navigation
                        loop={true}
                        modules={[Navigation, Autoplay]}
                        breakpoints={{
                            576: {
                                slidesPerView: 2,
                                spaceBetween: 12,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1200: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                        className='h-full'
                    >
                        <SwiperSlide>
                            <div className="collection-item block relative rounded-2xl overflow-hidden cursor-pointer">
                                <div className="bg-img" style={{ height: '480px' }}>
                                    <img
                                        src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=1000&h=960&fit=crop"
                                        width={1000}
                                        height={960}
                                        alt='branded apparel'
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <div className="collection-name heading5 text-center sm:bottom-8 bottom-4 lg:w-[200px] md:w-[160px] w-[100px] md:py-3 py-1.5 bg-white rounded-xl duration-500">Branded Apparel</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="collection-item block relative rounded-2xl overflow-hidden cursor-pointer">
                                <div className="bg-img" style={{ height: '480px' }}>
                                    <img
                                        src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=1000&h=960&fit=crop"
                                        width={1000}
                                        height={960}
                                        alt='drinkware'
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <div className="collection-name heading5 text-center sm:bottom-8 bottom-4 lg:w-[200px] md:w-[160px] w-[100px] md:py-3 py-1.5 bg-white rounded-xl duration-500">Drinkware</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="collection-item block relative rounded-2xl overflow-hidden cursor-pointer">
                                <div className="bg-img" style={{ height: '480px' }}>
                                    <img
                                        src="https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=1000&h=960&fit=crop"
                                        width={1000}
                                        height={960}
                                        alt='tech accessories'
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <div className="collection-name heading5 text-center sm:bottom-8 bottom-4 lg:w-[200px] md:w-[160px] w-[100px] md:py-3 py-1.5 bg-white rounded-xl duration-500">Tech Accessories</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="collection-item block relative rounded-2xl overflow-hidden cursor-pointer">
                                <div className="bg-img" style={{ height: '480px' }}>
                                    <img
                                        src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1000&h=960&fit=crop"
                                        width={1000}
                                        height={960}
                                        alt='bags and totes'
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <div className="collection-name heading5 text-center sm:bottom-8 bottom-4 lg:w-[200px] md:w-[160px] w-[100px] md:py-3 py-1.5 bg-white rounded-xl duration-500">Bags & Totes</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="collection-item block relative rounded-2xl overflow-hidden cursor-pointer">
                                <div className="bg-img" style={{ height: '480px' }}>
                                    <Image
                                        src="/images/brand/promo-4.jpg"
                                        width={1000}
                                        height={960}
                                        alt='promotional office supplies'
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <div className="collection-name heading5 text-center sm:bottom-8 bottom-4 lg:w-[200px] md:w-[160px] w-[100px] md:py-3 py-1.5 bg-white rounded-xl duration-500">Office Supplies</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="collection-item block relative rounded-2xl overflow-hidden cursor-pointer">
                                <div className="bg-img" style={{ height: '480px' }}>
                                    <img
                                        src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1000&h=960&fit=crop"
                                        width={1000}
                                        height={960}
                                        alt='custom apparel'
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <div className="collection-name heading5 text-center sm:bottom-8 bottom-4 lg:w-[200px] md:w-[160px] w-[100px] md:py-3 py-1.5 bg-white rounded-xl duration-500">Custom Apparel</div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Collection