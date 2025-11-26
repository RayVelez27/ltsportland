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

const FundraisingUseCase = () => {
    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="Quality Promotional Products • Bulk Discounts Available • Free Mockups" />
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-transparent" />
                <Breadcrumb heading='Fundraising Merchandise' subHeading='Fundraising Merchandise' />
            </div>
            <div className='about md:pt-20 pt-10'>
                <div className="about-us-block">
                    <div className="container">
                        <div className="text flex items-center justify-center">
                            <div className="content md:w-5/6 w-full">
                                <div className="body1 text-center">
                                    Generate revenue for your cause while spreading awareness with fundraising merchandise that supporters are excited to purchase and proud to display. Effective fundraising products do double duty—they create an immediate income stream for your organization while turning buyers into walking billboards who promote your mission everywhere they go. The key to successful fundraising merchandise is offering products people genuinely want at price points that balance affordability with healthy profit margins. Whether you&apos;re a school running a PTA fundraiser, a nonprofit supporting a vital cause, a sports team funding travel expenses, or a community organization building programs, the right promotional products transform passive supporters into active participants who contribute financially while amplifying your message. From classic t-shirts and wristbands to premium apparel and useful everyday items, fundraising merchandise creates win-win scenarios where supporters get quality branded products they&apos;ll use while your organization generates essential funding to achieve its mission.
                                </div>
                            </div>
                        </div>
                        <div className="list-img md:pt-20 pt-10">
                            <div className="bg-img">
                                <Image
                                    src={'/images/brand/Fundraising-1.png'}
                                    width={2000}
                                    height={1200}
                                    alt='Fundraising merchandise'
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
                    <div className="heading3 text-center">Recommended Products for Fundraising</div>
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 md:mt-10 mt-6">
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
                            <div className="body1 text-secondary mt-2">Custom shirts, hoodies, and tank tops with your cause or event branding</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="mb-4">
                                <Image
                                    src="/images/brand/imagen-616.jpg"
                                    width={600}
                                    height={400}
                                    alt="Wristbands & Bracelets"
                                    className="w-full rounded-xl"
                                />
                            </div>
                            <div className="heading6">Wristbands & Bracelets</div>
                            <div className="body1 text-secondary mt-2">Silicone and fabric wristbands perfect for awareness campaigns</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="mb-4">
                                <Image
                                    src="/images/brand/goldstar-616.png"
                                    width={600}
                                    height={400}
                                    alt="Water Bottles & Drinkware"
                                    className="w-full rounded-xl"
                                />
                            </div>
                            <div className="heading6">Water Bottles & Drinkware</div>
                            <div className="body1 text-secondary mt-2">Reusable bottles and tumblers supporters will use daily</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="mb-4">
                                <Image
                                    src="/images/brand/promosmart-616 (1).png"
                                    width={600}
                                    height={400}
                                    alt="Tote Bags"
                                    className="w-full rounded-xl"
                                />
                            </div>
                            <div className="heading6">Tote Bags</div>
                            <div className="body1 text-secondary mt-2">Eco-friendly reusable bags with your organization&apos;s logo</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="mb-4">
                                <Image
                                    src="/images/brand/shutterstock_1957100833-scaled-1.jpg"
                                    width={600}
                                    height={400}
                                    alt="Spirit Wear"
                                    className="w-full rounded-xl"
                                />
                            </div>
                            <div className="heading6">Spirit Wear</div>
                            <div className="body1 text-secondary mt-2">Team apparel, school colors, and event-specific merchandise</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="mb-4">
                                <Image
                                    src="/images/brand/unique-custom-products-616.jpg"
                                    width={600}
                                    height={400}
                                    alt="Stickers & Decals"
                                    className="w-full rounded-xl"
                                />
                            </div>
                            <div className="heading6">Stickers & Decals</div>
                            <div className="body1 text-secondary mt-2">Affordable add-on items with high visibility and low cost</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="mb-4">
                                <Image
                                    src="/images/brand/magnets-berlekamp2.jpg"
                                    width={600}
                                    height={400}
                                    alt="Custom Magnets"
                                    className="w-full rounded-xl"
                                />
                            </div>
                            <div className="heading6">Custom Magnets</div>
                            <div className="body1 text-secondary mt-2">Refrigerator magnets that keep your cause visible at home</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="mb-4">
                                <Image
                                    src="/images/brand/newsletter_orig.png"
                                    width={600}
                                    height={400}
                                    alt="Event Merchandise"
                                    className="w-full rounded-xl"
                                />
                            </div>
                            <div className="heading6">Event Merchandise</div>
                            <div className="body1 text-secondary mt-2">Race shirts, participant medals, and event-specific branded items</div>
                        </div>
                    </div>
                </div>

                {/* Industry Examples Section */}
                <div className="container md:mt-20 mt-10">
                    <div className="heading3 text-center">How Different Organizations Use Fundraising Merchandise</div>
                    <div className="grid md:grid-cols-2 gap-8 md:mt-10 mt-6">
                        <div className="industry-example p-6 bg-surface rounded-2xl">
                            <div className="heading6 mb-3">Schools & PTAs</div>
                            <div className="body1 text-secondary">Elementary and high schools sell spirit wear including t-shirts, hoodies, and water bottles at back-to-school nights, sporting events, and through online stores to fund field trips, classroom supplies, and extracurricular programs.</div>
                        </div>
                        <div className="industry-example p-6 bg-surface rounded-2xl">
                            <div className="heading6 mb-3">Nonprofit Organizations</div>
                            <div className="body1 text-secondary">Charities and advocacy groups sell awareness merchandise like branded apparel, wristbands, and tote bags to generate operating revenue while spreading their message throughout the community.</div>
                        </div>
                        <div className="industry-example p-6 bg-surface rounded-2xl">
                            <div className="heading6 mb-3">Youth Sports Teams</div>
                            <div className="body1 text-secondary">Travel teams and competitive leagues offer spirit wear and fundraising merchandise to families to offset tournament costs, uniforms, and equipment while building team unity.</div>
                        </div>
                        <div className="industry-example p-6 bg-surface rounded-2xl">
                            <div className="heading6 mb-3">Event Organizers</div>
                            <div className="body1 text-secondary">Charity runs, walks, and community events sell participant t-shirts, medals, and branded merchandise both as registration perks and additional revenue streams to support their cause.</div>
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

export default FundraisingUseCase
