'use client'
import React from 'react'
import Image from 'next/image';
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Benefit from '@/components/Home1/Benefit'
import Newsletter from '@/components/Home4/Newsletter'
import Brand from '@/components/Home1/Brand'
import Footer from '@/components/Footer/Footer'

const ClientAppreciationUseCase = () => {
    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="Quality Promotional Products • Bulk Discounts Available • Free Mockups" />
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-transparent" />
                <Breadcrumb heading='Client Appreciation Gifts' subHeading='Client Appreciation Gifts' />
            </div>
            <div className='about md:pt-20 pt-10'>
                <div className="about-us-block">
                    <div className="container">
                        <div className="text flex items-center justify-center">
                            <div className="content md:w-5/6 w-full">
                                <div className="body1 text-center">
                                    Strengthen client relationships and drive referrals with thoughtful appreciation gifts that show you value their business beyond the transaction. In today&apos;s competitive marketplace, client retention is just as important as acquisition, and strategic appreciation gifts keep your company top-of-mind while demonstrating genuine gratitude for their partnership. The right client gifts do more than say thank you—they reinforce your brand values, create positive associations with your company, and provide ongoing visibility in your clients&apos; daily lives. Whether you&apos;re celebrating project completions, thanking clients for referrals, recognizing anniversaries, sending holiday gifts, or simply staying connected throughout the year, quality promotional products transform routine business relationships into lasting partnerships. From premium executive gifts for key accounts to thoughtful tokens of appreciation for all clients, our client appreciation products help you build loyalty, generate word-of-mouth marketing, and create moments that clients remember and share.
                                </div>
                            </div>
                        </div>
                        <div className="list-img md:pt-20 pt-10">
                            <div className="bg-img">
                                <Image
                                    src={'/images/brand/Customer-Appreciation-Gifts_Hero.webp'}
                                    width={2000}
                                    height={1200}
                                    alt='Client appreciation gifts'
                                    className='w-full rounded-[30px]'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Benefit props="md:pt-20 pt-10" />
            <div className='about'>
                {/* Recommended Products Section */}
                <div className="container md:mt-20 mt-10">
                    <div className="heading3 text-center">Recommended Products for Client Appreciation</div>
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 md:mt-10 mt-6">
                        <div className="product-item text-center">
                            <div className="mb-4">
                                <Image
                                    src="/images/brand/wine-n-gear-glass-616.jpg"
                                    width={600}
                                    height={400}
                                    alt="Premium Drinkware"
                                    className="w-full rounded-xl"
                                />
                            </div>
                            <div className="heading6">Premium Drinkware</div>
                            <div className="body1 text-secondary mt-2">High-quality tumblers, wine glasses, and coffee sets for daily use</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="mb-4">
                                <Image
                                    src="/images/brand/bath-promotions-616.jpg"
                                    width={600}
                                    height={400}
                                    alt="Executive Gift Sets"
                                    className="w-full rounded-xl"
                                />
                            </div>
                            <div className="heading6">Executive Gift Sets</div>
                            <div className="body1 text-secondary mt-2">Luxury pens, leather portfolios, and premium desk accessories</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="mb-4">
                                <Image
                                    src="/images/brand/food-gemline.jpg"
                                    width={600}
                                    height={400}
                                    alt="Gift Baskets"
                                    className="w-full rounded-xl"
                                />
                            </div>
                            <div className="heading6">Gift Baskets</div>
                            <div className="body1 text-secondary mt-2">Curated baskets with gourmet items, branded products, and thank you notes</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="mb-4">
                                <Image
                                    src="/images/brand/hitpromo-multipen-616.jpg"
                                    width={600}
                                    height={400}
                                    alt="Tech Accessories"
                                    className="w-full rounded-xl"
                                />
                            </div>
                            <div className="heading6">Tech Accessories</div>
                            <div className="body1 text-secondary mt-2">Wireless chargers, Bluetooth speakers, and premium headphones</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="mb-4">
                                <Image
                                    src="/images/brand/lbu-bz-720.jpg"
                                    width={600}
                                    height={400}
                                    alt="Lifestyle & Wellness"
                                    className="w-full rounded-xl"
                                />
                            </div>
                            <div className="heading6">Lifestyle & Wellness</div>
                            <div className="body1 text-secondary mt-2">Yoga mats, fitness accessories, and wellness-focused items</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="mb-4">
                                <Image
                                    src="/images/brand/hitpromotionalproducts-616.jpg"
                                    width={600}
                                    height={400}
                                    alt="Seasonal Gift Packages"
                                    className="w-full rounded-xl"
                                />
                            </div>
                            <div className="heading6">Seasonal Gift Packages</div>
                            <div className="body1 text-secondary mt-2">Holiday-themed gifts and seasonal branded merchandise</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="mb-4">
                                <Image
                                    src="/images/brand/sports-mini-479.jpg"
                                    width={600}
                                    height={400}
                                    alt="Branded Apparel"
                                    className="w-full rounded-xl"
                                />
                            </div>
                            <div className="heading6">Branded Apparel</div>
                            <div className="body1 text-secondary mt-2">Quality jackets, polo shirts, and comfortable branded clothing</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="mb-4">
                                <Image
                                    src="/images/brand/coastalcustoms-720.jpg"
                                    width={600}
                                    height={400}
                                    alt="Home & Office Decor"
                                    className="w-full rounded-xl"
                                />
                            </div>
                            <div className="heading6">Home & Office Decor</div>
                            <div className="body1 text-secondary mt-2">Desk clocks, picture frames, and tasteful branded decor items</div>
                        </div>
                    </div>
                </div>

                {/* Industry Examples Section */}
                <div className="container md:mt-20 mt-10">
                    <div className="heading3 text-center">How Different Industries Use Client Appreciation Gifts</div>
                    <div className="grid md:grid-cols-2 gap-8 md:mt-10 mt-6">
                        <div className="industry-example p-6 bg-surface rounded-2xl">
                            <div className="heading6 mb-3">Real Estate Agents</div>
                            <div className="body1 text-secondary">Realtors send closing gifts to new homeowners with branded welcome baskets, personalized doormats, and home essentials that celebrate their new home while keeping the agent&apos;s name visible for future referrals.</div>
                        </div>
                        <div className="industry-example p-6 bg-surface rounded-2xl">
                            <div className="heading6 mb-3">Professional Services Firms</div>
                            <div className="body1 text-secondary">Law firms, accounting firms, and consultancies send premium executive gifts to key clients during holidays and after major project completions to maintain relationships and show appreciation for ongoing partnerships.</div>
                        </div>
                        <div className="industry-example p-6 bg-surface rounded-2xl">
                            <div className="heading6 mb-3">Construction Companies</div>
                            <div className="body1 text-secondary">General contractors present project completion gifts to homeowners and commercial clients with quality branded items like tool sets, yard signs, or gift baskets that leave positive lasting impressions.</div>
                        </div>
                        <div className="industry-example p-6 bg-surface rounded-2xl">
                            <div className="heading6 mb-3">Healthcare Providers</div>
                            <div className="body1 text-secondary">Medical practices and wellness centers send appreciation gifts to referring physicians and loyal patients with branded wellness items, water bottles, and health-focused products that align with their mission.</div>
                        </div>
                    </div>
                </div>

                {/* Contact Form Section */}
                <div className="container md:mt-20 mt-10">
                    <div className="flex justify-between max-lg:flex-col gap-y-10">
                        <div className="left lg:w-2/3 lg:pr-4">
                            <div className="heading3">Request a Quote</div>
                            <div className="body1 text-secondary2 mt-3">Get in touch with our team for bulk pricing and custom product inquiries</div>
                            <form className="md:mt-6 mt-4">
                                <div className='grid sm:grid-cols-2 grid-cols-1 gap-4 gap-y-5'>
                                    <div className="name ">
                                        <input className="border-line px-4 py-3 w-full rounded-lg" id="username" type="text" placeholder="Your Name *" required />
                                    </div>
                                    <div className="email">
                                        <input className="border-line px-4 pt-3 pb-3 w-full rounded-lg" id="email" type="email" placeholder="Your Email *" required />
                                    </div>
                                    <div className="phone sm:col-span-2">
                                        <input className="border-line px-4 pt-3 pb-3 w-full rounded-lg" id="phone" type="tel" placeholder="Phone Number *" required />
                                    </div>
                                    <div className="message sm:col-span-2">
                                        <textarea className="border-line px-4 pt-3 pb-3 w-full rounded-lg" id="message" rows={3} placeholder="Your Message *" required />
                                    </div>
                                </div>
                                <div className="block-button md:mt-6 mt-4">
                                    <button className="button-main">Send message</button>
                                </div>
                            </form>
                        </div>
                        <div className="right lg:w-1/4 lg:pl-4">
                            <div className="item">
                                <div className="heading4">Our Location</div>
                                <p className="mt-3">37 Danforth St., Portland, ME 04101</p>
                                <p className="mt-3">Phone: <span className='whitespace-nowrap'>207-774-1104</span></p>
                                <p className="mt-1">Email: <span className='whitespace-nowrap'>orders@ltsportland.com</span></p>
                            </div>
                            <div className="item mt-10">
                                <div className="heading4">Business Hours</div>
                                <p className="mt-3">Mon - Fri: <span className='whitespace-nowrap'>9:00am - 5:00pm EST</span></p>
                                <p className="mt-3">Saturday: <span className='whitespace-nowrap'>By Appointment</span></p>
                                <p className="mt-3">Sunday: <span className='whitespace-nowrap'>Closed</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Newsletter props="bg-green md:mt-20 mt-10" />
            <Brand />
            <Footer />
        </>
    )
}

export default ClientAppreciationUseCase
