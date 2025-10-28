'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const SliderOne = () => {
    return (
        <>
            <div className="slider-block style-one xl:h-[688px] lg:h-[640px] md:h-[464px] sm:h-[400px] h-[280px] max-[420px]:h-[256px] w-full relative">
                <div className="slider-main h-full w-full relative">
                    <div className="slider-item h-full w-full relative">
                        {/* Full-width background image */}
                        <Image
                            src={'/images/brand/hero-banner.png'}
                            fill
                            alt='LTS Inc Hero Banner'
                            priority={true}
                            className="object-cover"
                        />
                        {/* Text content */}
                        <div className="container w-full h-full flex items-center justify-center md:justify-start relative z-10">
                            <div className="text-content max-w-2xl p-[20px] backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 shadow-lg text-center md:text-left mt-16 md:mt-12">
                                <div className="text-sub-display text-white">Your Logo, Our Maine Craft</div>
                                <div className="text-display md:mt-5 mt-2 text-white">Premium Promotional Products for Your Business</div>
                                <Link href='/shop/breadcrumb-img' className="button-main md:mt-8 mt-3 inline-block" style={{backgroundColor: '#FF6B35'}}>Browse Products</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SliderOne