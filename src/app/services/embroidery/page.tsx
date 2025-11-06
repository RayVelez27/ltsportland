'use client'
import React from 'react'
import Image from 'next/image';
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Benefit from '@/components/Home1/Benefit'
import Footer from '@/components/Footer/Footer'

const Embroidery = () => {
    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="Quality Promotional Products • Bulk Discounts Available • Free Mockups" />
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-transparent" />
                <Breadcrumb heading='Embroidery' subHeading='Embroidery Services' />
            </div>
            <div className='about md:pt-20 pt-10'>
                <div className="about-us-block">
                    <div className="container">
                        <div className="text flex items-center justify-center">
                            <div className="content md:w-5/6 w-full">
                                <div className="heading3 text-center">Premium Embroidery Services</div>
                                <div className="body1 text-center mt-5">
                                    Embroidery adds a professional, premium touch to your promotional products and corporate apparel. Our custom embroidery services create a sophisticated, textured look that elevates your brand image. Perfect for polo shirts, jackets, hats, bags, and more, embroidery offers exceptional durability and a high-end appearance that screen printing cannot match. With advanced multi-needle machines and expert craftsmanship, we can reproduce intricate logos and designs with precision. Embroidered products convey quality and permanence, making them ideal for executive gifts, uniforms, and upscale promotional items. Whether you need a single sample or thousands of pieces, our embroidery services deliver consistent, professional results every time.
                                </div>
                            </div>
                        </div>
                        <div className="list-img grid sm:grid-cols-3 gap-[30px] md:pt-20 pt-10">
                            <div className="bg-img">
                                <Image
                                    src={'/images/brand/stormcreek-720.jpg'}
                                    width={2000}
                                    height={3000}
                                    alt='Embroidered apparel'
                                    className='w-full rounded-[30px]'
                                />
                            </div>
                            <div className="bg-img">
                                <Image
                                    src={'/images/brand/ASI_SUPPORT_image_704x512_b0d643a1-a39d-448d-878c-2a13a5cf731e_480x480.webp'}
                                    width={2000}
                                    height={3000}
                                    alt='Custom embroidery'
                                    className='w-full rounded-[30px]'
                                />
                            </div>
                            <div className="bg-img">
                                <Image
                                    src={'/images/brand/Promo-Industry.webp'}
                                    width={2000}
                                    height={3000}
                                    alt='Logo embroidery'
                                    className='w-full rounded-[30px]'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='about md:pt-20 pt-10'>
                <div className="container">
                    <div className="heading3 text-center mb-10">Why Choose Embroidery?</div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="benefit-item">
                            <div className="heading6 mb-3">Premium, Professional Appearance</div>
                            <div className="body1 text-secondary">
                                Embroidery adds dimension and texture that conveys quality and professionalism. The raised thread creates a sophisticated look perfect for corporate wear and executive gifts.
                            </div>
                        </div>
                        <div className="benefit-item">
                            <div className="heading6 mb-3">Exceptional Durability</div>
                            <div className="body1 text-secondary">
                                Embroidered designs are highly durable and maintain their appearance through hundreds of washes. The thread is stitched directly into the fabric, creating a permanent decoration that won&apos;t fade, crack, or peel.
                            </div>
                        </div>
                        <div className="benefit-item">
                            <div className="heading6 mb-3">Versatile Material Options</div>
                            <div className="body1 text-secondary">
                                Embroidery works beautifully on a wide range of materials including cotton, polyester, fleece, leather, canvas, and nylon. Perfect for polo shirts, jackets, hats, bags, towels, and more.
                            </div>
                        </div>
                        <div className="benefit-item">
                            <div className="heading6 mb-3">Timeless, Classic Look</div>
                            <div className="body1 text-secondary">
                                Embroidery provides a classic, upscale appearance that never goes out of style. It&apos;s the preferred choice for corporate uniforms, golf apparel, and high-end promotional products.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Benefit props="md:pt-20 pt-10" />

            <div className="container md:py-20 py-10">
                <div className="heading3 text-center mb-10">Best Products for Embroidery</div>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
                    <div className="product-item text-center">
                        <div className="mb-4">
                            <Image
                                src="/images/brand/stormcreek-720.jpg"
                                width={600}
                                height={400}
                                alt="Polo Shirts & Corporate Apparel"
                                className="w-full rounded-xl"
                            />
                        </div>
                        <div className="heading6">Polo Shirts & Corporate Apparel</div>
                        <div className="body1 text-secondary mt-2">Professional embroidered polo shirts perfect for uniforms and corporate events</div>
                    </div>
                    <div className="product-item text-center">
                        <div className="mb-4">
                            <Image
                                src="/images/brand/ASI_SUPPORT_image_704x512_b0d643a1-a39d-448d-878c-2a13a5cf731e_480x480.webp"
                                width={600}
                                height={400}
                                alt="Jackets & Outerwear"
                                className="w-full rounded-xl"
                            />
                        </div>
                        <div className="heading6">Jackets & Outerwear</div>
                        <div className="body1 text-secondary mt-2">Premium embroidered jackets, vests, and fleece for year-round branding</div>
                    </div>
                    <div className="product-item text-center">
                        <div className="mb-4">
                            <Image
                                src="/images/brand/Promo-Industry.webp"
                                width={600}
                                height={400}
                                alt="Hats & Bags"
                                className="w-full rounded-xl"
                            />
                        </div>
                        <div className="heading6">Hats & Bags</div>
                        <div className="body1 text-secondary mt-2">Custom embroidered caps, backpacks, and bags that showcase your logo beautifully</div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Embroidery
