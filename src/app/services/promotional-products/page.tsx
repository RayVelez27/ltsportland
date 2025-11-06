'use client'
import React from 'react'
import Image from 'next/image';
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Benefit from '@/components/Home1/Benefit'
import Footer from '@/components/Footer/Footer'

const PromotionalProducts = () => {
    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="Quality Promotional Products • Bulk Discounts Available • Free Mockups" />
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-transparent" />
                <Breadcrumb heading='Promotional Products' subHeading='Promotional Products Services' />
            </div>
            <div className='about md:pt-20 pt-10'>
                <div className="about-us-block">
                    <div className="container">
                        <div className="text flex items-center justify-center">
                            <div className="content md:w-5/6 w-full">
                                <div className="heading3 text-center">Custom Promotional Products</div>
                                <div className="body1 text-center mt-5">
                                    Promotional products are powerful marketing tools that keep your brand top-of-mind with customers, employees, and prospects. We offer an extensive selection of high-quality promotional items that can be customized with your logo, message, and branding. From everyday essentials like pens, water bottles, and tote bags to premium corporate gifts and tech accessories, we have thousands of products to choose from. Promotional products create lasting impressions, increase brand recognition, and provide tangible value to recipients. Whether you&apos;re planning a trade show giveaway, employee appreciation event, customer loyalty program, or corporate gift campaign, our promotional product experts will help you select items that align with your brand and budget. We handle everything from product selection and design to production and delivery.
                                </div>
                            </div>
                        </div>
                        <div className="list-img grid sm:grid-cols-3 gap-[30px] md:pt-20 pt-10">
                            <div className="bg-img">
                                <Image
                                    src={'/images/brand/promo-products-720.jpg'}
                                    width={2000}
                                    height={3000}
                                    alt='Promotional products'
                                    className='w-full rounded-[30px]'
                                />
                            </div>
                            <div className="bg-img">
                                <Image
                                    src={'/images/brand/Best-Company-Swag-Ideas_Hero.webp'}
                                    width={2000}
                                    height={3000}
                                    alt='Custom branded merchandise'
                                    className='w-full rounded-[30px]'
                                />
                            </div>
                            <div className="bg-img">
                                <Image
                                    src={'/images/brand/Customer-Appreciation-Gifts_Hero.webp'}
                                    width={2000}
                                    height={3000}
                                    alt='Corporate promotional items'
                                    className='w-full rounded-[30px]'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='about md:pt-20 pt-10'>
                <div className="container">
                    <div className="heading3 text-center mb-10">Why Use Promotional Products?</div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="benefit-item">
                            <div className="heading6 mb-3">Increased Brand Recognition</div>
                            <div className="body1 text-secondary">
                                Promotional products keep your brand visible and top-of-mind. Every time someone uses your branded pen, mug, or tote bag, they&apos;re reminded of your company and services.
                            </div>
                        </div>
                        <div className="benefit-item">
                            <div className="heading6 mb-3">Cost-Effective Marketing</div>
                            <div className="body1 text-secondary">
                                Compared to traditional advertising, promotional products offer exceptional ROI. They create multiple impressions over time and have a lower cost-per-impression than most marketing channels.
                            </div>
                        </div>
                        <div className="benefit-item">
                            <div className="heading6 mb-3">Build Customer Loyalty</div>
                            <div className="body1 text-secondary">
                                Quality promotional gifts create goodwill and strengthen relationships with customers, employees, and business partners. People appreciate receiving useful, well-made products.
                            </div>
                        </div>
                        <div className="benefit-item">
                            <div className="heading6 mb-3">Versatile Applications</div>
                            <div className="body1 text-secondary">
                                Use promotional products for trade shows, employee onboarding, customer appreciation, fundraising, seasonal campaigns, and corporate events. Endless possibilities for brand promotion.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Benefit props="md:pt-20 pt-10" />

            <div className="container md:py-20 py-10">
                <div className="heading3 text-center mb-10">Popular Promotional Product Categories</div>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
                    <div className="product-item text-center">
                        <div className="mb-4">
                            <Image
                                src="/images/brand/linchko-720.jpg"
                                width={600}
                                height={400}
                                alt="Drinkware"
                                className="w-full rounded-xl"
                            />
                        </div>
                        <div className="heading6">Drinkware</div>
                        <div className="body1 text-secondary mt-2">Custom water bottles, tumblers, mugs, and coffee cups for daily brand exposure</div>
                    </div>
                    <div className="product-item text-center">
                        <div className="mb-4">
                            <Image
                                src="/images/brand/promosmart-616.png"
                                width={600}
                                height={400}
                                alt="Bags & Totes"
                                className="w-full rounded-xl"
                            />
                        </div>
                        <div className="heading6">Bags & Totes</div>
                        <div className="body1 text-secondary mt-2">Reusable tote bags, backpacks, and messenger bags that showcase your logo everywhere</div>
                    </div>
                    <div className="product-item text-center">
                        <div className="mb-4">
                            <Image
                                src="/images/brand/favorypromospens-616.jpg"
                                width={600}
                                height={400}
                                alt="Writing Instruments"
                                className="w-full rounded-xl"
                            />
                        </div>
                        <div className="heading6">Writing Instruments</div>
                        <div className="body1 text-secondary mt-2">Custom pens, pencils, and notebooks that put your brand in customers&apos; hands</div>
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
                        <div className="body1 text-secondary mt-2">Phone stands, USB drives, chargers, and tech gadgets for modern professionals</div>
                    </div>
                    <div className="product-item text-center">
                        <div className="mb-4">
                            <Image
                                src="/images/brand/ASI_SUPPORT_image_704x512_b0d643a1-a39d-448d-878c-2a13a5cf731e_480x480.webp"
                                width={600}
                                height={400}
                                alt="Apparel"
                                className="w-full rounded-xl"
                            />
                        </div>
                        <div className="heading6">Apparel</div>
                        <div className="body1 text-secondary mt-2">Branded t-shirts, hoodies, hats, and jackets that turn customers into brand ambassadors</div>
                    </div>
                    <div className="product-item text-center">
                        <div className="mb-4">
                            <Image
                                src="/images/brand/soft-stuff-616.jpg"
                                width={600}
                                height={400}
                                alt="Stress Relievers"
                                className="w-full rounded-xl"
                            />
                        </div>
                        <div className="heading6">Stress Relievers & Fun Items</div>
                        <div className="body1 text-secondary mt-2">Stress balls, desk toys, and fun promotional items that bring smiles and brand visibility</div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default PromotionalProducts
