'use client'
import React from 'react'
import Image from 'next/image';
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Benefit from '@/components/Home1/Benefit'
import Footer from '@/components/Footer/Footer'

const DTF = () => {
    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="Quality Promotional Products • Bulk Discounts Available • Free Mockups" />
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-transparent" />
                <Breadcrumb heading='DTF Printing' subHeading='Direct-to-Film Printing Services' />
            </div>
            <div className='about md:pt-20 pt-10'>
                <div className="about-us-block">
                    <div className="container">
                        <div className="text flex items-center justify-center">
                            <div className="content md:w-5/6 w-full">
                                <div className="heading3 text-center">Direct-to-Film (DTF) Printing</div>
                                <div className="body1 text-center mt-5">
                                    Direct-to-Film (DTF) printing is a revolutionary technology that combines the best features of screen printing and direct-to-garment printing. This innovative method prints designs onto a special film, then transfers them to virtually any fabric type using heat and pressure. DTF offers exceptional color vibrancy, intricate detail, and excellent durability on cotton, polyester, blends, nylon, and even leather. Unlike traditional methods, DTF works on both light and dark fabrics without color limitations, making it incredibly versatile. Perfect for small to medium-sized orders, DTF printing delivers professional results with quick turnaround times and no minimums. The prints are soft to the touch, highly durable, and maintain their brilliance through repeated washing.
                                </div>
                            </div>
                        </div>
                        <div className="list-img grid sm:grid-cols-3 gap-[30px] md:pt-20 pt-10">
                            <div className="bg-img">
                                <Image
                                    src={'/images/brand/calculatorshirts.png'}
                                    width={2000}
                                    height={3000}
                                    alt='DTF printed apparel'
                                    className='w-full rounded-[30px]'
                                />
                            </div>
                            <div className="bg-img">
                                <Image
                                    src={'/images/brand/med_nomadicshirts-479.jpg'}
                                    width={2000}
                                    height={3000}
                                    alt='Custom DTF printing'
                                    className='w-full rounded-[30px]'
                                />
                            </div>
                            <div className="bg-img">
                                <Image
                                    src={'/images/brand/ASI_SUPPORT_image_704x512_b0d643a1-a39d-448d-878c-2a13a5cf731e_480x480.webp'}
                                    width={2000}
                                    height={3000}
                                    alt='DTF transfer printing'
                                    className='w-full rounded-[30px]'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='about md:pt-20 pt-10'>
                <div className="container">
                    <div className="heading3 text-center mb-10">Why Choose DTF Printing?</div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="benefit-item">
                            <div className="heading6 mb-3">Works on Any Fabric</div>
                            <div className="body1 text-secondary">
                                DTF printing works beautifully on cotton, polyester, blends, nylon, leather, and more. Print on light or dark fabrics with the same vibrant results, eliminating the need for different printing methods.
                            </div>
                        </div>
                        <div className="benefit-item">
                            <div className="heading6 mb-3">No Minimums, Fast Turnaround</div>
                            <div className="body1 text-secondary">
                                Perfect for small batches, samples, or on-demand orders. No minimum order requirements mean you can get exactly the quantity you need, from one piece to thousands.
                            </div>
                        </div>
                        <div className="benefit-item">
                            <div className="heading6 mb-3">Vibrant, Detailed Prints</div>
                            <div className="body1 text-secondary">
                                DTF delivers brilliant colors and sharp detail, including fine lines, gradients, and photographic images. The white underbase ensures colors pop on any fabric color.
                            </div>
                        </div>
                        <div className="benefit-item">
                            <div className="heading6 mb-3">Soft Hand Feel & Durability</div>
                            <div className="body1 text-secondary">
                                DTF prints are thin, soft, and flexible, maintaining the fabric&apos;s natural feel while providing excellent wash durability. Won&apos;t crack, peel, or fade over time.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Benefit props="md:pt-20 pt-10" />

            <div className="container md:py-20 py-10">
                <div className="heading3 text-center mb-10">Best Products for DTF Printing</div>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
                    <div className="product-item text-center">
                        <div className="mb-4">
                            <Image
                                src="/images/brand/calculatorshirts.png"
                                width={600}
                                height={400}
                                alt="T-Shirts & Apparel"
                                className="w-full rounded-xl"
                            />
                        </div>
                        <div className="heading6">T-Shirts & Apparel</div>
                        <div className="body1 text-secondary mt-2">Full-color custom t-shirts on any fabric type with no minimums</div>
                    </div>
                    <div className="product-item text-center">
                        <div className="mb-4">
                            <Image
                                src="/images/brand/ASI_SUPPORT_image_704x512_b0d643a1-a39d-448d-878c-2a13a5cf731e_480x480.webp"
                                width={600}
                                height={400}
                                alt="Hoodies & Sweatshirts"
                                className="w-full rounded-xl"
                            />
                        </div>
                        <div className="heading6">Hoodies & Sweatshirts</div>
                        <div className="body1 text-secondary mt-2">Vibrant designs on cozy fleece and heavy-weight fabrics</div>
                    </div>
                    <div className="product-item text-center">
                        <div className="mb-4">
                            <Image
                                src="/images/brand/promosmart-616.png"
                                width={600}
                                height={400}
                                alt="Bags & Accessories"
                                className="w-full rounded-xl"
                            />
                        </div>
                        <div className="heading6">Bags & Accessories</div>
                        <div className="body1 text-secondary mt-2">Custom printed tote bags, backpacks, and textile accessories</div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default DTF
