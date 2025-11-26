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

const RestaurantsIndustry = () => {
    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="Quality Promotional Products • Bulk Discounts Available • Free Mockups" />
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-transparent" />
                <Breadcrumb heading='Restaurants & Breweries' subHeading='Restaurants & Breweries' />
            </div>
            <div className='about md:pt-20 pt-10'>
                <div className="about-us-block">
                    <div className="container">
                        <div className="text flex items-center justify-center">
                            <div className="content md:w-5/6 w-full">
                                <div className="body1 text-center">
                                    Build brand loyalty and create memorable dining experiences with custom promotional products designed for restaurants, bars, and breweries. From upscale dining establishments to craft breweries and casual eateries, we provide high-quality branded merchandise that extends your brand beyond your doors. Our products include custom drinkware, branded apparel for staff, promotional giveaways, bar merchandise, takeout packaging, loyalty program items, event swag, and customer appreciation gifts. Whether you&apos;re launching a new menu, hosting special events, building brand awareness in the community, or creating a retail merchandise line, our products help you connect with customers and turn them into loyal brand ambassadors. We understand the hospitality industry and offer food-safe, durable products that combine style with functionality while keeping your brand top-of-mind with every use.
                                </div>
                            </div>
                        </div>
                        <div className="list-img grid sm:grid-cols-3 gap-[30px] md:pt-20 pt-10">
                            <div className="bg-img">
                                <Image
                                    src={'/images/other/about-us1.png'}
                                    width={2000}
                                    height={3000}
                                    alt='Restaurant promotional products'
                                    className='w-full rounded-[30px]'
                                />
                            </div>
                            <div className="bg-img">
                                <Image
                                    src={'/images/other/about-us2.png'}
                                    width={2000}
                                    height={3000}
                                    alt='Branded brewery merchandise'
                                    className='w-full rounded-[30px]'
                                />
                            </div>
                            <div className="bg-img">
                                <Image
                                    src={'/images/other/about-us3.png'}
                                    width={2000}
                                    height={3000}
                                    alt='Restaurant branded apparel'
                                    className='w-full rounded-[30px]'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Benefit props="md:pt-20 pt-10" />
            <div className='about'>
                {/* Popular Restaurants Products Section */}
                <div className="container md:mt-20 mt-10">
                    <div className="heading3 text-center">Popular Restaurant & Brewery Products</div>
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 md:mt-10 mt-6">
                        <div className="product-item text-center">
                            <div className="heading6">Custom Drinkware</div>
                            <div className="body1 text-secondary mt-2">Branded pint glasses, beer mugs, wine glasses, and signature cocktail cups</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="heading6">Staff Uniforms & Apparel</div>
                            <div className="body1 text-secondary mt-2">Chef coats, server shirts, aprons, and branded team wear</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="heading6">Bar Merchandise</div>
                            <div className="body1 text-secondary mt-2">Branded coasters, bottle openers, bar mats, and cocktail accessories</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="heading6">Retail Merchandise Line</div>
                            <div className="body1 text-secondary mt-2">T-shirts, hoodies, hats, and accessories for customer purchase</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="heading6">Takeout & Delivery Branding</div>
                            <div className="body1 text-secondary mt-2">Custom bags, stickers, napkins, and packaging that promotes your brand</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="heading6">Event & Promotional Items</div>
                            <div className="body1 text-secondary mt-2">Giveaways for grand openings, festivals, and special promotions</div>
                        </div>
                    </div>
                </div>

                {/* Use Cases Section */}
                <div className="container md:mt-20 mt-10">
                    <div className="heading3 text-center">How Restaurants & Breweries Use Our Products</div>
                    <div className="grid md:grid-cols-2 gap-8 md:mt-10 mt-6">
                        <div className="use-case-item p-6 bg-surface rounded-2xl">
                            <div className="heading6 mb-3">Branded Retail Merchandise</div>
                            <div className="body1 text-secondary">Create an additional revenue stream with branded apparel and drinkware that loyal customers are proud to wear and use.</div>
                        </div>
                        <div className="use-case-item p-6 bg-surface rounded-2xl">
                            <div className="heading6 mb-3">Grand Opening & Events</div>
                            <div className="body1 text-secondary">Make a lasting impression at grand openings, beer festivals, and food events with memorable branded giveaways.</div>
                        </div>
                        <div className="use-case-item p-6 bg-surface rounded-2xl">
                            <div className="heading6 mb-3">Staff Uniforms & Team Building</div>
                            <div className="body1 text-secondary">Create a professional, cohesive look with custom uniforms that build team pride and enhance your brand image.</div>
                        </div>
                        <div className="use-case-item p-6 bg-surface rounded-2xl">
                            <div className="heading6 mb-3">Customer Loyalty Programs</div>
                            <div className="body1 text-secondary">Reward regular customers with branded merchandise that keeps them coming back and spreads word-of-mouth marketing.</div>
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

export default RestaurantsIndustry
