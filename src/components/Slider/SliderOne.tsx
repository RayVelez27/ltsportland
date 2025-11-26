'use client'

import React from 'react'
import Link from 'next/link'


const SliderOne = () => {
    return (
        <>
            <div className="slider-block style-one xl:h-[688px] lg:h-[640px] md:h-[464px] sm:h-[400px] h-[450px] max-[420px]:h-[380px] w-full relative rounded-b-[100px] overflow-hidden">
                <div className="slider-main h-full w-full relative">
                    <div className="slider-item h-full w-full relative">
                        {/* Full-width background video */}
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute top-0 left-0 w-full h-full object-cover"
                        >
                            <source src="/images/brand/Untitled design - 2025-11-05T190634.246.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        {/* Dark overlay for better text visibility */}
                        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-[1]"></div>
                        {/* Text content */}
                        <div className="container w-full h-full flex items-center justify-center relative z-10">
                            <div className="text-content max-w-4xl p-[20px] text-center mt-16 md:mt-12">
                                <div className="inline-block px-6 py-2 mb-4 rounded-full text-white font-semibold text-sm md:text-base uppercase tracking-wide" style={{backgroundColor: '#FF6B35', border: '2px solid white'}}>
                                    Your Logo, Our Maine Craft
                                </div>
                                <div className="text-display md:mt-5 mt-2 text-white">34 Years Servicing Maine Businesses</div>
                                <p className="text-white md:text-lg text-base md:mt-6 mt-4 max-w-3xl mx-auto leading-relaxed">
                                    Since 1992, Portland's LTS Inc. has helped Maine businesses make unforgettable impressions with premium promotional products. We're not just vendors—we're your neighbors, your partners, and your biggest advocates.
                                </p>
                                <Link href='/pages/contact' className="button-main md:mt-8 mt-3 inline-block" style={{backgroundColor: '#FF6B35'}}>Free Sample? Of Course</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SliderOne