'use client'

import React from 'react'
import Link from 'next/link'


const SliderOne = () => {
    return (
        <>
            <div className="slider-block style-one xl:h-[688px] lg:h-[640px] md:h-[464px] sm:h-[400px] h-[280px] max-[420px]:h-[256px] w-full relative">
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
                        <div className="container w-full h-full flex items-center justify-center md:justify-start relative z-10">
                            <div className="text-content max-w-2xl p-[20px] text-center md:text-left mt-16 md:mt-12">
                                <div className="text-sub-display text-white">Your Logo, Our Maine Craft</div>
                                <div className="text-display md:mt-5 mt-2 text-white">Premium Promotional Products for Your Business</div>
                                <Link href='/pages/contact' className="button-main md:mt-8 mt-3 inline-block" style={{backgroundColor: '#FF6B35'}}>Let's Make It Happen</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SliderOne