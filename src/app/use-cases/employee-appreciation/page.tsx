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

const EmployeeAppreciationUseCase = () => {
    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="Quality Promotional Products • Bulk Discounts Available • Free Mockups" />
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-transparent" />
                <Breadcrumb heading='Employee Appreciation Gifts' subHeading='Employee Appreciation Gifts' />
            </div>
            <div className='about md:pt-20 pt-10'>
                <div className="about-us-block">
                    <div className="container">
                        <div className="text flex items-center justify-center">
                            <div className="content md:w-5/6 w-full">
                                <div className="body1 text-center">
                                    Show your team they&apos;re valued with thoughtful employee appreciation gifts that boost morale, increase retention, and strengthen company culture. In today&apos;s competitive job market, recognizing your employees with quality branded merchandise goes beyond a simple thank you—it demonstrates your commitment to their wellbeing and contribution to your organization&apos;s success. Whether you&apos;re celebrating work anniversaries, recognizing outstanding performance, observing Employee Appreciation Day, or simply showing gratitude for your team&apos;s dedication, the right promotional products create lasting positive impressions that employees will use and appreciate long after they receive them. From premium drinkware and cozy branded apparel to practical tech accessories and wellness items, employee appreciation gifts turn everyday moments into opportunities to reinforce your company values and build a culture where people feel genuinely valued.
                                </div>
                            </div>
                        </div>
                        <div className="list-img md:pt-20 pt-10">
                            <div className="bg-img">
                                <Image
                                    src={'/images/brand/Best-Company-Swag-Ideas_Hero.webp'}
                                    width={2000}
                                    height={1200}
                                    alt='Employee appreciation gifts'
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
                    <div className="heading3 text-center">Recommended Products for Employee Appreciation</div>
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 md:mt-10 mt-6">
                        <div className="product-item text-center">
                            <div className="mb-4">
                                <Image
                                    src="/images/brand/linchko-720.jpg"
                                    width={600}
                                    height={400}
                                    alt="Premium Drinkware"
                                    className="w-full rounded-xl"
                                />
                            </div>
                            <div className="heading6">Premium Drinkware</div>
                            <div className="body1 text-secondary mt-2">Insulated tumblers, coffee mugs, and water bottles for daily use</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="mb-4">
                                <Image
                                    src="/images/brand/ASI_SUPPORT_image_704x512_b0d643a1-a39d-448d-878c-2a13a5cf731e_480x480.webp"
                                    width={600}
                                    height={400}
                                    alt="Branded Apparel"
                                    className="w-full rounded-xl"
                                />
                            </div>
                            <div className="heading6">Branded Apparel</div>
                            <div className="body1 text-secondary mt-2">Comfortable hoodies, quarter-zips, and performance wear</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="mb-4">
                                <Image
                                    src="/images/brand/hit-616.jpg"
                                    width={600}
                                    height={400}
                                    alt="Tech Accessories"
                                    className="w-full rounded-xl"
                                />
                            </div>
                            <div className="heading6">Tech Accessories</div>
                            <div className="body1 text-secondary mt-2">Wireless chargers, phone stands, and laptop sleeves</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="mb-4">
                                <Image
                                    src="/images/brand/images (13).jpg"
                                    width={600}
                                    height={400}
                                    alt="Wellness Gifts"
                                    className="w-full rounded-xl"
                                />
                            </div>
                            <div className="heading6">Wellness Gifts</div>
                            <div className="body1 text-secondary mt-2">Stress balls, yoga mats, and fitness accessories</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="mb-4">
                                <Image
                                    src="/images/brand/gift-calcinex.jpg"
                                    width={600}
                                    height={400}
                                    alt="Gift Boxes & Baskets"
                                    className="w-full rounded-xl"
                                />
                            </div>
                            <div className="heading6">Gift Boxes & Baskets</div>
                            <div className="body1 text-secondary mt-2">Curated appreciation packages with multiple branded items</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="mb-4">
                                <Image
                                    src="/images/brand/Promo-Products.jpg"
                                    width={600}
                                    height={400}
                                    alt="Desk Accessories"
                                    className="w-full rounded-xl"
                                />
                            </div>
                            <div className="heading6">Desk Accessories</div>
                            <div className="body1 text-secondary mt-2">Premium notebooks, pens, organizers, and office essentials</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="mb-4">
                                <Image
                                    src="/images/brand/martini-vispak-keyfob-pouch-720.jpg"
                                    width={600}
                                    height={400}
                                    alt="Outdoor & Recreation"
                                    className="w-full rounded-xl"
                                />
                            </div>
                            <div className="heading6">Outdoor & Recreation</div>
                            <div className="body1 text-secondary mt-2">Backpacks, blankets, coolers, and outdoor gear</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="mb-4">
                                <Image
                                    src="/images/brand/exquisite-images-616.jpg"
                                    width={600}
                                    height={400}
                                    alt="Recognition Awards"
                                    className="w-full rounded-xl"
                                />
                            </div>
                            <div className="heading6">Recognition Awards</div>
                            <div className="body1 text-secondary mt-2">Plaques, trophies, and custom awards for outstanding achievement</div>
                        </div>
                    </div>
                </div>

                {/* Industry Examples Section */}
                <div className="container md:mt-20 mt-10">
                    <div className="heading3 text-center">How Different Industries Use Employee Appreciation Gifts</div>
                    <div className="grid md:grid-cols-2 gap-8 md:mt-10 mt-6">
                        <div className="industry-example p-6 bg-surface rounded-2xl">
                            <div className="heading6 mb-3">Healthcare Organizations</div>
                            <div className="body1 text-secondary">Hospitals and clinics recognize frontline healthcare workers during Healthcare Worker Appreciation Week with branded scrubs, premium water bottles, and wellness kits that support their demanding schedules.</div>
                        </div>
                        <div className="industry-example p-6 bg-surface rounded-2xl">
                            <div className="heading6 mb-3">Tech Companies & Startups</div>
                            <div className="body1 text-secondary">Tech offices boost remote team morale with quarterly swag drops including branded hoodies, wireless chargers, and premium desk accessories delivered directly to home offices.</div>
                        </div>
                        <div className="industry-example p-6 bg-surface rounded-2xl">
                            <div className="heading6 mb-3">Construction Companies</div>
                            <div className="body1 text-secondary">Construction firms reward hardworking crews with durable branded gear like insulated drinkware, tool bags, and quality work apparel that stands up to job site conditions.</div>
                        </div>
                        <div className="industry-example p-6 bg-surface rounded-2xl">
                            <div className="heading6 mb-3">Educational Institutions</div>
                            <div className="body1 text-secondary">Schools and universities celebrate teachers and staff during Teacher Appreciation Week with branded gifts like tote bags, coffee mugs, and appreciation gift baskets.</div>
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

export default EmployeeAppreciationUseCase
