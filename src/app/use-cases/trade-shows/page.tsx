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

const TradeShowsUseCase = () => {
    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="Quality Promotional Products • Bulk Discounts Available • Free Mockups" />
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-transparent" />
                <Breadcrumb heading='Trade Show Giveaways' subHeading='Trade Show Giveaways' />
            </div>
            <div className='about md:pt-20 pt-10'>
                <div className="about-us-block">
                    <div className="container">
                        <div className="text flex items-center justify-center">
                            <div className="content md:w-5/6 w-full">
                                <div className="body1 text-center">
                                    Stand out from the competition and drive booth traffic with strategic trade show giveaways that attendees actually want to take home. In the crowded landscape of conferences, expos, and industry events, the right promotional products can mean the difference between being forgotten and becoming the most talked-about booth on the floor. Effective trade show giveaways serve multiple purposes: they attract visitors to your booth, create memorable brand impressions, facilitate conversations with potential clients, and keep your company top-of-mind long after the event ends. The key is selecting items that balance practicality, quality, and portability—products that attendees will use regularly and proudly display your logo. From budget-friendly mass giveaways that drive foot traffic to premium items for qualified leads, our trade show promotional products help you maximize your event ROI and turn booth visits into lasting business relationships.
                                </div>
                            </div>
                        </div>
                        <div className="list-img md:pt-20 pt-10">
                            <div className="bg-img">
                                <Image
                                    src={'/images/brand/promo-products-720.jpg'}
                                    width={2000}
                                    height={1200}
                                    alt='Trade show giveaways'
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
                    <div className="heading3 text-center">Recommended Products for Trade Shows</div>
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 md:mt-10 mt-6">
                        <div className="product-item text-center">
                            <div className="mb-4">
                                <Image
                                    src="/images/brand/promosmart-616.png"
                                    width={600}
                                    height={400}
                                    alt="Branded Tote Bags"
                                    className="w-full rounded-xl"
                                />
                            </div>
                            <div className="heading6">Branded Tote Bags</div>
                            <div className="body1 text-secondary mt-2">Reusable bags that carry your brand and other vendors&apos; materials</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="mb-4">
                                <Image
                                    src="/images/brand/lungsal-616.png"
                                    width={600}
                                    height={400}
                                    alt="Power Banks & Tech"
                                    className="w-full rounded-xl"
                                />
                            </div>
                            <div className="heading6">Power Banks & Tech</div>
                            <div className="body1 text-secondary mt-2">Portable chargers and tech accessories for on-the-go attendees</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="mb-4">
                                <Image
                                    src="/images/brand/favorypromospens-616.jpg"
                                    width={600}
                                    height={400}
                                    alt="Pens & Notebooks"
                                    className="w-full rounded-xl"
                                />
                            </div>
                            <div className="heading6">Pens & Notebooks</div>
                            <div className="body1 text-secondary mt-2">Classic giveaways perfect for note-taking during sessions</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="mb-4">
                                <Image
                                    src="/images/brand/donepromoinc-616.jpg"
                                    width={600}
                                    height={400}
                                    alt="Water Bottles"
                                    className="w-full rounded-xl"
                                />
                            </div>
                            <div className="heading6">Water Bottles</div>
                            <div className="body1 text-secondary mt-2">Eco-friendly drinkware for staying hydrated throughout the event</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="mb-4">
                                <Image
                                    src="/images/brand/imprint-id-616.jpg"
                                    width={600}
                                    height={400}
                                    alt="Lanyards & Badge Holders"
                                    className="w-full rounded-xl"
                                />
                            </div>
                            <div className="heading6">Lanyards & Badge Holders</div>
                            <div className="body1 text-secondary mt-2">Functional items every attendee needs during the show</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="mb-4">
                                <Image
                                    src="/images/brand/promoful-phonestand-616.jpg"
                                    width={600}
                                    height={400}
                                    alt="Phone Accessories"
                                    className="w-full rounded-xl"
                                />
                            </div>
                            <div className="heading6">Phone Accessories</div>
                            <div className="body1 text-secondary mt-2">PopSockets, phone stands, and screen cleaners</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="mb-4">
                                <Image
                                    src="/images/brand/soft-stuff-616.jpg"
                                    width={600}
                                    height={400}
                                    alt="Stress Relievers & Toys"
                                    className="w-full rounded-xl"
                                />
                            </div>
                            <div className="heading6">Stress Relievers & Toys</div>
                            <div className="body1 text-secondary mt-2">Fun desk toys and stress balls that draw booth traffic</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="mb-4">
                                <Image
                                    src="/images/brand/Ariel-alarm-clock.jpg"
                                    width={600}
                                    height={400}
                                    alt="Premium Gifts for VIPs"
                                    className="w-full rounded-xl"
                                />
                            </div>
                            <div className="heading6">Premium Gifts for VIPs</div>
                            <div className="body1 text-secondary mt-2">High-quality items for qualified leads and key prospects</div>
                        </div>
                    </div>
                </div>

                {/* Industry Examples Section */}
                <div className="container md:mt-20 mt-10">
                    <div className="heading3 text-center">How Different Industries Use Trade Show Giveaways</div>
                    <div className="grid md:grid-cols-2 gap-8 md:mt-10 mt-6">
                        <div className="industry-example p-6 bg-surface rounded-2xl">
                            <div className="heading6 mb-3">Tech Companies</div>
                            <div className="body1 text-secondary">Software and tech companies attract developers and IT professionals at conferences with branded tech accessories like USB drives, wireless chargers, and laptop stickers that appeal to their technical audience.</div>
                        </div>
                        <div className="industry-example p-6 bg-surface rounded-2xl">
                            <div className="heading6 mb-3">Healthcare Exhibitors</div>
                            <div className="body1 text-secondary">Medical device companies and healthcare organizations use branded hand sanitizers, wellness kits, and first aid supplies at medical conferences to align giveaways with their industry.</div>
                        </div>
                        <div className="industry-example p-6 bg-surface rounded-2xl">
                            <div className="heading6 mb-3">Construction & Manufacturing</div>
                            <div className="body1 text-secondary">Industrial exhibitors provide practical trade show giveaways like tape measures, multi-tools, and branded safety items that resonate with contractors and facility managers.</div>
                        </div>
                        <div className="industry-example p-6 bg-surface rounded-2xl">
                            <div className="heading6 mb-3">Food & Beverage Brands</div>
                            <div className="body1 text-secondary">Restaurants and breweries use branded drinkware, bottle openers, and coolers at food festivals and industry expos to create memorable brand experiences that attendees can use at home.</div>
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

export default TradeShowsUseCase
