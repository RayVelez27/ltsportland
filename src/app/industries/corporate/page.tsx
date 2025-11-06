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

const CorporateIndustry = () => {
    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="Quality Promotional Products • Bulk Discounts Available • Free Mockups" />
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-transparent" />
                <Breadcrumb heading='Corporate & Tech Offices' subHeading='Corporate & Tech Offices' />
            </div>
            <div className='about md:pt-20 pt-10'>
                <div className="about-us-block">
                    <div className="container">
                        <div className="text flex items-center justify-center">
                            <div className="content md:w-5/6 w-full">
                                <div className="body1 text-center">
                                    Elevate your company culture and strengthen your brand presence with premium promotional products designed for corporate and tech offices. From Fortune 500 companies to innovative startups, we provide high-quality branded merchandise that makes your team feel valued and keeps your brand visible. Our corporate promotional products include employee swag, new hire welcome kits, branded tech accessories, office essentials, conference giveaways, client appreciation gifts, team building items, and executive gifts. Whether you&apos;re onboarding new employees, attending industry conferences, celebrating company milestones, or thanking valued clients, our products help you create meaningful connections while reinforcing your brand identity. We understand the fast-paced corporate environment and offer modern, functional products that your team will actually use and appreciate, from custom laptop sleeves and wireless chargers to premium drinkware and sustainable office essentials.
                                </div>
                            </div>
                        </div>
                        <div className="list-img grid sm:grid-cols-3 gap-[30px] md:pt-20 pt-10">
                            <div className="bg-img">
                                <Image
                                    src={'/images/other/about-us1.png'}
                                    width={2000}
                                    height={3000}
                                    alt='Corporate promotional products'
                                    className='w-full rounded-[30px]'
                                />
                            </div>
                            <div className="bg-img">
                                <Image
                                    src={'/images/other/about-us2.png'}
                                    width={2000}
                                    height={3000}
                                    alt='Tech office branded merchandise'
                                    className='w-full rounded-[30px]'
                                />
                            </div>
                            <div className="bg-img">
                                <Image
                                    src={'/images/other/about-us3.png'}
                                    width={2000}
                                    height={3000}
                                    alt='Employee swag and gifts'
                                    className='w-full rounded-[30px]'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Benefit props="md:pt-20 pt-10" />
            <div className='about'>
                {/* Popular Corporate Products Section */}
                <div className="container md:mt-20 mt-10">
                    <div className="heading3 text-center">Popular Corporate & Tech Products</div>
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 md:mt-10 mt-6">
                        <div className="product-item text-center">
                            <div className="heading6">Employee Swag & Apparel</div>
                            <div className="body1 text-secondary mt-2">Branded hoodies, t-shirts, quarter-zips, and athleisure wear for team unity</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="heading6">Tech Accessories</div>
                            <div className="body1 text-secondary mt-2">Laptop sleeves, wireless chargers, phone stands, and cable organizers</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="heading6">New Hire Welcome Kits</div>
                            <div className="body1 text-secondary mt-2">Curated onboarding packages with branded essentials for day-one impact</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="heading6">Office Essentials</div>
                            <div className="body1 text-secondary mt-2">Premium notebooks, pens, desk accessories, and drinkware</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="heading6">Conference & Trade Show Items</div>
                            <div className="body1 text-secondary mt-2">Branded bags, badges, lanyards, and memorable giveaways</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="heading6">Executive & Client Gifts</div>
                            <div className="body1 text-secondary mt-2">High-end branded items for VIP clients, partners, and leadership</div>
                        </div>
                    </div>
                </div>

                {/* Use Cases Section */}
                <div className="container md:mt-20 mt-10">
                    <div className="heading3 text-center">How Corporate & Tech Companies Use Our Products</div>
                    <div className="grid md:grid-cols-2 gap-8 md:mt-10 mt-6">
                        <div className="use-case-item p-6 bg-surface rounded-2xl">
                            <div className="heading6 mb-3">New Employee Onboarding</div>
                            <div className="body1 text-secondary">Welcome new team members with thoughtfully curated swag kits that make them feel valued from day one and build company pride.</div>
                        </div>
                        <div className="use-case-item p-6 bg-surface rounded-2xl">
                            <div className="heading6 mb-3">Company Events & Milestones</div>
                            <div className="body1 text-secondary">Celebrate product launches, funding rounds, and company anniversaries with memorable branded merchandise that commemorates the occasion.</div>
                        </div>
                        <div className="use-case-item p-6 bg-surface rounded-2xl">
                            <div className="heading6 mb-3">Remote Team Engagement</div>
                            <div className="body1 text-secondary">Keep distributed teams connected and engaged with branded care packages and swag drops that bring company culture to home offices.</div>
                        </div>
                        <div className="use-case-item p-6 bg-surface rounded-2xl">
                            <div className="heading6 mb-3">Client & Partner Relations</div>
                            <div className="body1 text-secondary">Strengthen business relationships with premium branded gifts that show appreciation and keep your company top-of-mind.</div>
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

export default CorporateIndustry
