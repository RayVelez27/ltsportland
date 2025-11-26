'use client'
import React from 'react'
import Image from 'next/image';
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Benefit from '@/components/Home1/Benefit'
import Footer from '@/components/Footer/Footer'

const ScreenPrinting = () => {
    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="Quality Promotional Products • Bulk Discounts Available • Free Mockups" />
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-transparent" />
                <Breadcrumb heading='Screen Printing' subHeading='Screen Printing Services' />
            </div>
            <div className='about md:pt-20 pt-10'>
                <div className="about-us-block">
                    <div className="container">
                        <div className="text flex items-center justify-center">
                            <div className="content md:w-5/6 w-full">
                                <div className="heading3 text-center">Professional Screen Printing Services</div>
                                <div className="body1 text-center mt-5">
                                    Screen printing is one of the most popular and cost-effective methods for creating high-quality custom apparel and promotional products. Perfect for bulk orders, our screen printing services deliver vibrant, long-lasting results on t-shirts, hoodies, bags, and more. With years of experience and state-of-the-art equipment, we can bring your designs to life with exceptional detail and color accuracy. Whether you need 50 or 5,000 pieces, our screen printing process ensures consistent quality across your entire order. Ideal for corporate branding, events, team uniforms, and promotional campaigns.
                                </div>
                            </div>
                        </div>
                        <div className="list-img grid sm:grid-cols-3 gap-[30px] md:pt-20 pt-10">
                            <div className="bg-img">
                                <Image
                                    src={'/images/brand/calculatorshirts.png'}
                                    width={2000}
                                    height={3000}
                                    alt='Screen printed t-shirts'
                                    className='w-full rounded-[30px]'
                                />
                            </div>
                            <div className="bg-img">
                                <Image
                                    src={'/images/brand/med_nomadicshirts-479.jpg'}
                                    width={2000}
                                    height={3000}
                                    alt='Custom screen printing'
                                    className='w-full rounded-[30px]'
                                />
                            </div>
                            <div className="bg-img">
                                <Image
                                    src={'/images/brand/stormcreek-720.jpg'}
                                    width={2000}
                                    height={3000}
                                    alt='Bulk screen printing'
                                    className='w-full rounded-[30px]'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='about md:pt-20 pt-10'>
                <div className="container">
                    <div className="heading3 text-center mb-10">Why Choose Screen Printing?</div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="benefit-item">
                            <div className="heading6 mb-3">Cost-Effective for Bulk Orders</div>
                            <div className="body1 text-secondary">
                                Screen printing becomes more economical as quantity increases, making it perfect for large orders of 50+ pieces. The setup cost is spread across all items, reducing your per-unit price significantly.
                            </div>
                        </div>
                        <div className="benefit-item">
                            <div className="heading6 mb-3">Vibrant, Long-Lasting Colors</div>
                            <div className="body1 text-secondary">
                                Our high-quality inks produce bold, vibrant colors that withstand repeated washing and wear. Screen printed designs maintain their brilliance and won&apos;t fade, crack, or peel over time.
                            </div>
                        </div>
                        <div className="benefit-item">
                            <div className="heading6 mb-3">Versatile Applications</div>
                            <div className="body1 text-secondary">
                                Perfect for t-shirts, hoodies, tote bags, posters, and more. Screen printing works on various fabrics including cotton, polyester, and blends, giving you endless customization options.
                            </div>
                        </div>
                        <div className="benefit-item">
                            <div className="heading6 mb-3">Fast Turnaround Times</div>
                            <div className="body1 text-secondary">
                                Once your design is approved, we can produce large quantities quickly. Our efficient production process ensures you get your custom products when you need them.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Benefit props="md:pt-20 pt-10" />

            <div className="container md:py-20 py-10">
                <div className="heading3 text-center mb-10">Best Products for Screen Printing</div>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
                    <div className="product-item text-center">
                        <div className="mb-4">
                            <Image
                                src="/images/brand/calculatorshirts.png"
                                width={600}
                                height={400}
                                alt="Custom T-Shirts"
                                className="w-full rounded-xl"
                            />
                        </div>
                        <div className="heading6">Custom T-Shirts</div>
                        <div className="body1 text-secondary mt-2">Classic crew neck and V-neck tees perfect for events, teams, and promotions</div>
                    </div>
                    <div className="product-item text-center">
                        <div className="mb-4">
                            <Image
                                src="/images/brand/stormcreek-720.jpg"
                                width={600}
                                height={400}
                                alt="Hoodies & Sweatshirts"
                                className="w-full rounded-xl"
                            />
                        </div>
                        <div className="heading6">Hoodies & Sweatshirts</div>
                        <div className="body1 text-secondary mt-2">Comfortable branded apparel for colder weather and casual wear</div>
                    </div>
                    <div className="product-item text-center">
                        <div className="mb-4">
                            <Image
                                src="/images/brand/promosmart-616.png"
                                width={600}
                                height={400}
                                alt="Tote Bags"
                                className="w-full rounded-xl"
                            />
                        </div>
                        <div className="heading6">Tote Bags</div>
                        <div className="body1 text-secondary mt-2">Reusable promotional bags with bold, eye-catching designs</div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default ScreenPrinting
