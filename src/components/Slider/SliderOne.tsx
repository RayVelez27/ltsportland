'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const SliderOne = () => {
    return (
        <>
            <div className="slider-block style-one bg-linear xl:h-[860px] lg:h-[800px] md:h-[580px] sm:h-[500px] h-[350px] max-[420px]:h-[320px] w-full">
                <div className="slider-main h-full w-full">
                    <div className="slider-item h-full w-full relative">
                        <div className="container w-full h-full flex items-center relative">
                            <div className="text-content basis-1/2">
                                <div className="text-sub-display">Your Logo, Our Maine Craft</div>
                                <div className="text-display md:mt-5 mt-2">Premium Promotional Products for Your Business</div>
                                <Link href='/shop/breadcrumb-img' className="button-main md:mt-8 mt-3">Browse Products</Link>
                            </div>
                            <div className="sub-img absolute sm:w-1/2 w-3/5 2xl:-right-[60px] -right-[16px] bottom-0">
                                <Image
                                    src={'/images/brand/hero.png'}
                                    width={800}
                                    height={1067}
                                    alt='hero'
                                    priority={true}
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SliderOne