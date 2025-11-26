'use client'
import React from 'react'
import Image from 'next/image';
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Benefit from '@/components/Home1/Benefit'
import Footer from '@/components/Footer/Footer'

const Sublimation = () => {
    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="Quality Promotional Products • Bulk Discounts Available • Free Mockups" />
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-transparent" />
                <Breadcrumb heading='Sublimation' subHeading='Sublimation Printing Services' />
            </div>
            <div className='about md:pt-20 pt-10'>
                <div className="about-us-block">
                    <div className="container">
                        <div className="text flex items-center justify-center">
                            <div className="content md:w-5/6 w-full">
                                <div className="heading3 text-center">Full-Color Sublimation Printing</div>
                                <div className="body1 text-center mt-5">
                                    Sublimation printing is the ultimate solution for vibrant, full-color designs with photographic quality. This advanced printing technique uses heat to transfer dye directly into polyester fabric or specially coated items, creating permanent, fade-resistant graphics that become part of the material itself. Unlike traditional printing methods that sit on top of the fabric, sublimation dye actually bonds with the fibers, resulting in incredibly soft, breathable prints that won&apos;t crack, peel, or wash away. Perfect for all-over prints, complex designs with gradients, and products requiring photo-realistic quality. Ideal for athletic wear, promotional drinkware, mousepads, phone cases, and any polyester-based products where vibrant, lasting color is essential.
                                </div>
                            </div>
                        </div>
                        <div className="list-img grid sm:grid-cols-3 gap-[30px] md:pt-20 pt-10">
                            <div className="bg-img">
                                <Image
                                    src={'/images/brand/linchko-720.jpg'}
                                    width={2000}
                                    height={3000}
                                    alt='Sublimation printing'
                                    className='w-full rounded-[30px]'
                                />
                            </div>
                            <div className="bg-img">
                                <Image
                                    src={'/images/brand/wine-n-gear-glass-616.jpg'}
                                    width={2000}
                                    height={3000}
                                    alt='Custom sublimation'
                                    className='w-full rounded-[30px]'
                                />
                            </div>
                            <div className="bg-img">
                                <Image
                                    src={'/images/brand/kitchendrinkware-720.png'}
                                    width={2000}
                                    height={3000}
                                    alt='Sublimated products'
                                    className='w-full rounded-[30px]'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='about md:pt-20 pt-10'>
                <div className="container">
                    <div className="heading3 text-center mb-10">Why Choose Sublimation?</div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="benefit-item">
                            <div className="heading6 mb-3">Unlimited Colors & Detail</div>
                            <div className="body1 text-secondary">
                                Sublimation allows for unlimited colors, gradients, and photographic detail without any additional cost. Create complex, multi-color designs with incredible clarity and vibrancy.
                            </div>
                        </div>
                        <div className="benefit-item">
                            <div className="heading6 mb-3">Permanent, Fade-Resistant Prints</div>
                            <div className="body1 text-secondary">
                                The dye becomes part of the fabric or coating, creating a permanent bond that won&apos;t fade, crack, or peel. Colors remain vibrant wash after wash and won&apos;t deteriorate over time.
                            </div>
                        </div>
                        <div className="benefit-item">
                            <div className="heading6 mb-3">Soft, Breathable Feel</div>
                            <div className="body1 text-secondary">
                                Since the dye penetrates the material rather than sitting on top, sublimated prints maintain the fabric&apos;s natural softness and breathability. Perfect for athletic wear and activewear.
                            </div>
                        </div>
                        <div className="benefit-item">
                            <div className="heading6 mb-3">All-Over Printing Capability</div>
                            <div className="body1 text-secondary">
                                Create edge-to-edge, all-over prints that cover the entire surface of your product. Ideal for creating eye-catching custom sportswear, promotional items, and unique branded products.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Benefit props="md:pt-20 pt-10" />

            <div className="container md:py-20 py-10">
                <div className="heading3 text-center mb-10">Best Products for Sublimation</div>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
                    <div className="product-item text-center">
                        <div className="mb-4">
                            <Image
                                src="/images/brand/linchko-720.jpg"
                                width={600}
                                height={400}
                                alt="Drinkware & Tumblers"
                                className="w-full rounded-xl"
                            />
                        </div>
                        <div className="heading6">Drinkware & Tumblers</div>
                        <div className="body1 text-secondary mt-2">Custom sublimated mugs, tumblers, and water bottles with photo-quality designs</div>
                    </div>
                    <div className="product-item text-center">
                        <div className="mb-4">
                            <Image
                                src="/images/brand/med_nomadicshirts-479.jpg"
                                width={600}
                                height={400}
                                alt="Athletic & Performance Wear"
                                className="w-full rounded-xl"
                            />
                        </div>
                        <div className="heading6">Athletic & Performance Wear</div>
                        <div className="body1 text-secondary mt-2">Custom sports jerseys, workout shirts, and team uniforms with vibrant colors</div>
                    </div>
                    <div className="product-item text-center">
                        <div className="mb-4">
                            <Image
                                src="/images/brand/promoful-phonestand-616.jpg"
                                width={600}
                                height={400}
                                alt="Tech Accessories"
                                className="w-full rounded-xl"
                            />
                        </div>
                        <div className="heading6">Tech Accessories</div>
                        <div className="body1 text-secondary mt-2">Mousepads, phone cases, and tech accessories with full-color custom designs</div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Sublimation
