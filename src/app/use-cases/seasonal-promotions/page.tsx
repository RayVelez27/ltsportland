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

const SeasonalPromotionsUseCase = () => {
    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="Quality Promotional Products • Bulk Discounts Available • Free Mockups" />
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-transparent" />
                <Breadcrumb heading='Seasonal Promotions' subHeading='Seasonal Promotions' />
            </div>
            <div className='about md:pt-20 pt-10'>
                <div className="about-us-block">
                    <div className="container">
                        <div className="text flex items-center justify-center">
                            <div className="content md:w-5/6 w-full">
                                <div className="body1 text-center">
                                    Capitalize on the natural rhythm of the calendar with seasonal promotional products that align your brand with holidays, seasons, and special occasions throughout the year. Seasonal promotions create timely touchpoints with customers, employees, and clients when they&apos;re most receptive to your message—whether it&apos;s the gift-giving spirit of the holidays, the fresh-start energy of New Year, the outdoor enthusiasm of summer, or the back-to-school excitement of fall. Strategic seasonal merchandise keeps your brand relevant and top-of-mind by connecting with the events and emotions already on people&apos;s minds. From winter holiday gifts and summer outdoor gear to spring wellness promotions and fall harvest themes, seasonal promotional products give you natural opportunities to engage your audience with timely, relevant branded merchandise. The key is planning ahead and selecting products that genuinely enhance the seasonal experience while reinforcing your brand values, creating positive associations that last long after the season ends.
                                </div>
                            </div>
                        </div>
                        <div className="list-img md:pt-20 pt-10">
                            <div className="bg-img">
                                <Image
                                    src={'/images/brand/859121_256595.webp'}
                                    width={2000}
                                    height={1200}
                                    alt='Seasonal promotional products'
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
                    <div className="heading3 text-center">Recommended Products for Seasonal Promotions</div>
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 md:mt-10 mt-6">
                        <div className="product-item text-center">
                            <div className="mb-4">
                                <Image
                                    src="/images/brand/pack-2-pack-616.jpg"
                                    width={600}
                                    height={400}
                                    alt="Holiday Gift Sets"
                                    className="w-full rounded-xl"
                                />
                            </div>
                            <div className="heading6">Holiday Gift Sets</div>
                            <div className="body1 text-secondary mt-2">Curated boxes with branded items perfect for end-of-year gifting</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="mb-4">
                                <Image
                                    src="/images/brand/hitptomo-616.jpg"
                                    width={600}
                                    height={400}
                                    alt="Summer Outdoor Gear"
                                    className="w-full rounded-xl"
                                />
                            </div>
                            <div className="heading6">Summer Outdoor Gear</div>
                            <div className="body1 text-secondary mt-2">Coolers, beach towels, sunglasses, and outdoor essentials</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="mb-4">
                                <Image
                                    src="/images/brand/stormcreek-720.jpg"
                                    width={600}
                                    height={400}
                                    alt="Winter Apparel"
                                    className="w-full rounded-xl"
                                />
                            </div>
                            <div className="heading6">Winter Apparel</div>
                            <div className="body1 text-secondary mt-2">Branded beanies, gloves, scarves, and cozy hoodies</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="mb-4">
                                <Image
                                    src="/images/brand/health-1.jpg"
                                    width={600}
                                    height={400}
                                    alt="Spring Wellness Items"
                                    className="w-full rounded-xl"
                                />
                            </div>
                            <div className="heading6">Spring Wellness Items</div>
                            <div className="body1 text-secondary mt-2">Water bottles, fitness accessories, and health-focused products</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="mb-4">
                                <Image
                                    src="/images/brand/305126006.jpg"
                                    width={600}
                                    height={400}
                                    alt="Back-to-School Supplies"
                                    className="w-full rounded-xl"
                                />
                            </div>
                            <div className="heading6">Back-to-School Supplies</div>
                            <div className="body1 text-secondary mt-2">Backpacks, notebooks, pens, and student essentials</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="mb-4">
                                <Image
                                    src="/images/brand/bns-chaircovers-616.jpg"
                                    width={600}
                                    height={400}
                                    alt="Holiday Ornaments & Decor"
                                    className="w-full rounded-xl"
                                />
                            </div>
                            <div className="heading6">Holiday Ornaments & Decor</div>
                            <div className="body1 text-secondary mt-2">Custom ornaments, decorations, and festive branded items</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="mb-4">
                                <Image
                                    src="/images/brand/kitchendrinkware-720.png"
                                    width={600}
                                    height={400}
                                    alt="Seasonal Drinkware"
                                    className="w-full rounded-xl"
                                />
                            </div>
                            <div className="heading6">Seasonal Drinkware</div>
                            <div className="body1 text-secondary mt-2">Insulated mugs for winter, water bottles for summer</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="mb-4">
                                <Image
                                    src="/images/brand/promo-products-720 (1).jpg"
                                    width={600}
                                    height={400}
                                    alt="Event-Specific Items"
                                    className="w-full rounded-xl"
                                />
                            </div>
                            <div className="heading6">Event-Specific Items</div>
                            <div className="body1 text-secondary mt-2">Super Bowl, Valentine&apos;s Day, Fourth of July themed products</div>
                        </div>
                    </div>
                </div>

                {/* Industry Examples Section */}
                <div className="container md:mt-20 mt-10">
                    <div className="heading3 text-center">How Different Industries Use Seasonal Promotions</div>
                    <div className="grid md:grid-cols-2 gap-8 md:mt-10 mt-6">
                        <div className="industry-example p-6 bg-surface rounded-2xl">
                            <div className="heading6 mb-3">Corporate Offices</div>
                            <div className="body1 text-secondary">Companies send holiday gift boxes to employees and clients in December, summer outdoor kits in June, and New Year wellness packages in January to maintain engagement year-round with timely, relevant gifts.</div>
                        </div>
                        <div className="industry-example p-6 bg-surface rounded-2xl">
                            <div className="heading6 mb-3">Real Estate Agents</div>
                            <div className="body1 text-secondary">Realtors send seasonal mailers with branded items—cozy blankets in fall, garden tools in spring, beach towels in summer, and holiday ornaments in winter—to stay connected with past clients and generate referrals.</div>
                        </div>
                        <div className="industry-example p-6 bg-surface rounded-2xl">
                            <div className="heading6 mb-3">Restaurants & Breweries</div>
                            <div className="body1 text-secondary">Food and beverage businesses create seasonal merchandise lines—pumpkin spice-themed items in fall, summer beer koozies, holiday gift packs, and Valentine&apos;s Day promotions—that drive retail sales and build brand loyalty.</div>
                        </div>
                        <div className="industry-example p-6 bg-surface rounded-2xl">
                            <div className="heading6 mb-3">Educational Institutions</div>
                            <div className="body1 text-secondary">Schools capitalize on back-to-school season with branded supply kits, sell winter spirit wear during basketball season, and offer graduation merchandise packages to celebrate milestone achievements throughout the academic year.</div>
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

export default SeasonalPromotionsUseCase
