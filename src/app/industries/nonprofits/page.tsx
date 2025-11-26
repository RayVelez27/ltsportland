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

const NonprofitsIndustry = () => {
    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="Quality Promotional Products • Bulk Discounts Available • Free Mockups" />
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-transparent" />
                <Breadcrumb heading='Nonprofits & Events' subHeading='Nonprofits & Events' />
            </div>
            <div className='about md:pt-20 pt-10'>
                <div className="about-us-block">
                    <div className="container">
                        <div className="text flex items-center justify-center">
                            <div className="content md:w-5/6 w-full">
                                <div className="body1 text-center">
                                    Amplify your mission and maximize your impact with custom promotional products designed for nonprofits, charities, and event organizers. From local community organizations to national causes, we provide high-quality branded merchandise that helps you raise awareness, generate funding, and show appreciation to those who support your mission. Our nonprofit promotional products include fundraising merchandise, event giveaways, volunteer appreciation gifts, donor recognition items, awareness campaign materials, festival and conference swag, auction items, and sponsor thank-you gifts. Whether you&apos;re organizing a charity 5K, hosting a fundraising gala, running an awareness campaign, or thanking dedicated volunteers and donors, our products help you spread your message while generating revenue for your cause. We understand the budget constraints nonprofits face and offer affordable bulk pricing, fundraising-friendly margins, and meaningful products that align with your organization&apos;s values and mission.
                                </div>
                            </div>
                        </div>
                        <div className="list-img grid sm:grid-cols-3 gap-[30px] md:pt-20 pt-10">
                            <div className="bg-img">
                                <Image
                                    src={'/images/other/about-us1.png'}
                                    width={2000}
                                    height={3000}
                                    alt='Nonprofit promotional products'
                                    className='w-full rounded-[30px]'
                                />
                            </div>
                            <div className="bg-img">
                                <Image
                                    src={'/images/other/about-us2.png'}
                                    width={2000}
                                    height={3000}
                                    alt='Event and fundraising merchandise'
                                    className='w-full rounded-[30px]'
                                />
                            </div>
                            <div className="bg-img">
                                <Image
                                    src={'/images/other/about-us3.png'}
                                    width={2000}
                                    height={3000}
                                    alt='Charity branded items'
                                    className='w-full rounded-[30px]'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Benefit props="md:pt-20 pt-10" />
            <div className='about'>
                {/* Popular Nonprofits Products Section */}
                <div className="container md:mt-20 mt-10">
                    <div className="heading3 text-center">Popular Nonprofit & Event Products</div>
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 md:mt-10 mt-6">
                        <div className="product-item text-center">
                            <div className="heading6">Fundraising Merchandise</div>
                            <div className="body1 text-secondary mt-2">T-shirts, wristbands, and products to sell for your fundraising campaigns</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="heading6">Event Registration Packages</div>
                            <div className="body1 text-secondary mt-2">Race shirts, participant bags, medals, and giveaways for events</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="heading6">Awareness Campaign Items</div>
                            <div className="body1 text-secondary mt-2">Ribbons, bracelets, buttons, and apparel to spread your message</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="heading6">Volunteer Appreciation Gifts</div>
                            <div className="body1 text-secondary mt-2">Branded thank-you items to recognize and retain dedicated volunteers</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="heading6">Donor Recognition Items</div>
                            <div className="body1 text-secondary mt-2">Premium gifts to thank major donors and sustaining supporters</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="heading6">Conference & Festival Swag</div>
                            <div className="body1 text-secondary mt-2">Branded bags, lanyards, programs, and memorable takeaways</div>
                        </div>
                    </div>
                </div>

                {/* Use Cases Section */}
                <div className="container md:mt-20 mt-10">
                    <div className="heading3 text-center">How Nonprofits & Events Use Our Products</div>
                    <div className="grid md:grid-cols-2 gap-8 md:mt-10 mt-6">
                        <div className="use-case-item p-6 bg-surface rounded-2xl">
                            <div className="heading6 mb-3">Fundraising Events</div>
                            <div className="body1 text-secondary">Sell branded merchandise at charity walks, galas, and auctions to generate additional revenue while promoting your cause.</div>
                        </div>
                        <div className="use-case-item p-6 bg-surface rounded-2xl">
                            <div className="heading6 mb-3">Awareness Campaigns</div>
                            <div className="body1 text-secondary">Distribute branded items during awareness months and campaigns to educate the public and spread your message throughout the community.</div>
                        </div>
                        <div className="use-case-item p-6 bg-surface rounded-2xl">
                            <div className="heading6 mb-3">Volunteer Recognition</div>
                            <div className="body1 text-secondary">Show appreciation to dedicated volunteers with meaningful branded gifts that acknowledge their commitment to your mission.</div>
                        </div>
                        <div className="use-case-item p-6 bg-surface rounded-2xl">
                            <div className="heading6 mb-3">Sponsor & Donor Relations</div>
                            <div className="body1 text-secondary">Provide premium branded items to major donors and corporate sponsors as thank-you gifts that strengthen long-term partnerships.</div>
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

export default NonprofitsIndustry
