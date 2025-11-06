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

const ConstructionIndustry = () => {
    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="Quality Promotional Products • Bulk Discounts Available • Free Mockups" />
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-transparent" />
                <Breadcrumb heading='Construction & Trades' subHeading='Construction & Trades' />
            </div>
            <div className='about md:pt-20 pt-10'>
                <div className="about-us-block">
                    <div className="container">
                        <div className="text flex items-center justify-center">
                            <div className="content md:w-5/6 w-full">
                                <div className="body1 text-center">
                                    Strengthen your brand visibility on the jobsite with durable, high-quality promotional products built for the construction and trades industries. From general contractors to specialty trades, we provide rugged merchandise that can handle the demands of your work environment. Our construction promotional products include branded work wear, safety gear, hard hats, tool bags, high-visibility apparel, insulated drinkware, lunch coolers, tape measures, multi-tools, and client appreciation gifts. Whether you&apos;re outfitting your crew, promoting safety initiatives, thanking clients for their business, or building brand awareness in the community, our products are designed to withstand tough conditions while keeping your company name front and center. We understand the construction industry and offer products that combine functionality with lasting brand impact.
                                </div>
                            </div>
                        </div>
                        <div className="list-img grid sm:grid-cols-3 gap-[30px] md:pt-20 pt-10">
                            <div className="bg-img">
                                <Image
                                    src={'/images/other/about-us1.png'}
                                    width={2000}
                                    height={3000}
                                    alt='Construction promotional products'
                                    className='w-full rounded-[30px]'
                                />
                            </div>
                            <div className="bg-img">
                                <Image
                                    src={'/images/other/about-us2.png'}
                                    width={2000}
                                    height={3000}
                                    alt='Branded work gear'
                                    className='w-full rounded-[30px]'
                                />
                            </div>
                            <div className="bg-img">
                                <Image
                                    src={'/images/other/about-us3.png'}
                                    width={2000}
                                    height={3000}
                                    alt='Construction branded merchandise'
                                    className='w-full rounded-[30px]'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Benefit props="md:pt-20 pt-10" />
            <div className='about'>
                <div className="container md:mt-20 mt-10">
                    <div className="heading3 text-center">Popular Construction Products</div>
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 md:mt-10 mt-6">
                        <div className="product-item text-center">
                            <div className="heading6">Branded Work Wear</div>
                            <div className="body1 text-secondary mt-2">Durable shirts, jackets, and pants with your company logo</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="heading6">Safety Gear & PPE</div>
                            <div className="body1 text-secondary mt-2">Custom hard hats, safety vests, and high-visibility apparel</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="heading6">Tool Bags & Storage</div>
                            <div className="body1 text-secondary mt-2">Heavy-duty branded bags and organizers for tools and equipment</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="heading6">Drinkware & Coolers</div>
                            <div className="body1 text-secondary mt-2">Insulated tumblers, water bottles, and lunch coolers for the crew</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="heading6">Hand Tools & Accessories</div>
                            <div className="body1 text-secondary mt-2">Branded tape measures, multi-tools, flashlights, and utility knives</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="heading6">Client Appreciation Gifts</div>
                            <div className="body1 text-secondary mt-2">Quality items to thank homeowners and commercial clients</div>
                        </div>
                    </div>
                </div>

                <div className="container md:mt-20 mt-10">
                    <div className="heading3 text-center">How Construction Companies Use Our Products</div>
                    <div className="grid md:grid-cols-2 gap-8 md:mt-10 mt-6">
                        <div className="use-case-item p-6 bg-surface rounded-2xl">
                            <div className="heading6 mb-3">Crew Uniforms & Gear</div>
                            <div className="body1 text-secondary">Create professional uniformity across your team with branded work wear that builds trust and recognition on every jobsite.</div>
                        </div>
                        <div className="use-case-item p-6 bg-surface rounded-2xl">
                            <div className="heading6 mb-3">Trade Show Presence</div>
                            <div className="body1 text-secondary">Stand out at construction expos and industry events with memorable giveaways that contractors will actually use.</div>
                        </div>
                        <div className="use-case-item p-6 bg-surface rounded-2xl">
                            <div className="heading6 mb-3">Safety Initiatives</div>
                            <div className="body1 text-secondary">Promote workplace safety with branded PPE and safety gear that protects your team while displaying your commitment to safety.</div>
                        </div>
                        <div className="use-case-item p-6 bg-surface rounded-2xl">
                            <div className="heading6 mb-3">Project Completion Gifts</div>
                            <div className="body1 text-secondary">Leave lasting impressions with homeowners and property managers by presenting quality branded gifts at project completion.</div>
                        </div>
                    </div>
                </div>

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

export default ConstructionIndustry
