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

const RealEstateIndustry = () => {
    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="Quality Promotional Products • Bulk Discounts Available • Free Mockups" />
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-transparent" />
                <Breadcrumb heading='Real Estate Agents' subHeading='Real Estate Agents' />
            </div>
            <div className='about md:pt-20 pt-10'>
                <div className="about-us-block">
                    <div className="container">
                        <div className="text flex items-center justify-center">
                            <div className="content md:w-5/6 w-full">
                                <div className="body1 text-center">
                                    Build lasting client relationships and stay top-of-mind with custom promotional products designed specifically for real estate professionals. From independent agents to large brokerages, we provide high-quality branded merchandise that helps you stand out in a competitive market. Our real estate promotional products include closing gifts, open house giveaways, branded marketing materials, client appreciation items, agent apparel, referral thank-you gifts, holiday gifts for clients, and community event sponsorship items. Whether you&apos;re celebrating a successful closing, hosting an open house, maintaining relationships with past clients, or building your personal brand, our products help you create memorable moments that lead to referrals and repeat business. We understand the importance of making lasting impressions in real estate, which is why we offer thoughtful, high-quality products that reflect your professionalism and keep your name at the forefront when clients and contacts think of real estate.
                                </div>
                            </div>
                        </div>
                        <div className="list-img grid sm:grid-cols-3 gap-[30px] md:pt-20 pt-10">
                            <div className="bg-img">
                                <Image
                                    src={'/images/other/about-us1.png'}
                                    width={2000}
                                    height={3000}
                                    alt='Real estate promotional products'
                                    className='w-full rounded-[30px]'
                                />
                            </div>
                            <div className="bg-img">
                                <Image
                                    src={'/images/other/about-us2.png'}
                                    width={2000}
                                    height={3000}
                                    alt='Real estate closing gifts'
                                    className='w-full rounded-[30px]'
                                />
                            </div>
                            <div className="bg-img">
                                <Image
                                    src={'/images/other/about-us3.png'}
                                    width={2000}
                                    height={3000}
                                    alt='Real estate branded merchandise'
                                    className='w-full rounded-[30px]'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Benefit props="md:pt-20 pt-10" />
            <div className='about'>
                {/* Popular Real Estate Products Section */}
                <div className="container md:mt-20 mt-10">
                    <div className="heading3 text-center">Popular Real Estate Products</div>
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 md:mt-10 mt-6">
                        <div className="product-item text-center">
                            <div className="heading6">Closing Gift Packages</div>
                            <div className="body1 text-secondary mt-2">Premium branded gifts to celebrate new homeowners and create lasting memories</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="heading6">Open House Giveaways</div>
                            <div className="body1 text-secondary mt-2">Branded items like keychains, notepads, and pens to leave with potential buyers</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="heading6">Marketing Materials</div>
                            <div className="body1 text-secondary mt-2">Custom notebooks, calendars, magnets, and stationery with your contact info</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="heading6">Agent Apparel & Accessories</div>
                            <div className="body1 text-secondary mt-2">Professional branded clothing and accessories for open houses and showings</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="heading6">Client Appreciation Gifts</div>
                            <div className="body1 text-secondary mt-2">Seasonal and holiday gifts to stay connected with past and current clients</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="heading6">Referral Thank You Gifts</div>
                            <div className="body1 text-secondary mt-2">Premium items to show gratitude for client referrals and professional partnerships</div>
                        </div>
                    </div>
                </div>

                {/* Use Cases Section */}
                <div className="container md:mt-20 mt-10">
                    <div className="heading3 text-center">How Real Estate Agents Use Our Products</div>
                    <div className="grid md:grid-cols-2 gap-8 md:mt-10 mt-6">
                        <div className="use-case-item p-6 bg-surface rounded-2xl">
                            <div className="heading6 mb-3">Home Closing Celebrations</div>
                            <div className="body1 text-secondary">Deliver thoughtful closing gift baskets with branded home essentials, wine sets, or personalized items that new homeowners will treasure.</div>
                        </div>
                        <div className="use-case-item p-6 bg-surface rounded-2xl">
                            <div className="heading6 mb-3">Staying Top-of-Mind</div>
                            <div className="body1 text-secondary">Send seasonal branded gifts and useful items to past clients to generate referrals and repeat business when they&apos;re ready to move again.</div>
                        </div>
                        <div className="use-case-item p-6 bg-surface rounded-2xl">
                            <div className="heading6 mb-3">Open House Success</div>
                            <div className="body1 text-secondary">Provide visitors with quality branded takeaways featuring your contact information so they remember you when they&apos;re ready to buy or sell.</div>
                        </div>
                        <div className="use-case-item p-6 bg-surface rounded-2xl">
                            <div className="heading6 mb-3">Community Presence</div>
                            <div className="body1 text-secondary">Sponsor local events and charities with branded merchandise to build your reputation as an active, caring community member.</div>
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

export default RealEstateIndustry
