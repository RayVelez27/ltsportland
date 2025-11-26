import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Banner = () => {
    return (
        <>
            <div className="banner-block style-one grid sm:grid-cols-2 gap-5 md:pt-20 pt-10">
                <Link href={'/about'} className="banner-item relative block overflow-hidden duration-500">
                    <div className="banner-img">
                        <Image
                            src={'/images/brand/Add a little bit of body text - 2025-11-04T182121.714.png'}
                            width={2000}
                            height={1300}
                            alt='About Us'
                            priority={true}
                            className='duration-1000'
                        />
                    </div>
                    <div className="absolute inset-0 bg-black opacity-30"></div>
                    <div className="banner-content absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                        <div className="heading2 text-white">About Us</div>
                        <div className="text-button text-white relative inline-block pb-1 border-b-2 border-white duration-500 mt-2">Learn More</div>
                    </div>
                </Link>
                <Link href={'/contact'} className="banner-item relative block overflow-hidden duration-500">
                    <div className="banner-img">
                        <Image
                            src={'/images/brand/Add a little bit of body text - 2025-11-04T182149.406.png'}
                            width={2000}
                            height={1300}
                            alt='Request a Quote'
                            priority={true}
                            className='duration-1000'
                        />
                    </div>
                    <div className="absolute inset-0 bg-black opacity-30"></div>
                    <div className="banner-content absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                        <div className="heading2 text-white">Request a Quote</div>
                        <div className="text-button text-white relative inline-block pb-1 border-b-2 border-white duration-500 mt-2">Learn More</div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Banner