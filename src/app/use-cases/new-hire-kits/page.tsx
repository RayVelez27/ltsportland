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

const NewHireKitsUseCase = () => {
    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="Quality Promotional Products • Bulk Discounts Available • Free Mockups" />
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-transparent" />
                <Breadcrumb heading='New Hire Kits' subHeading='New Hire Kits' />
            </div>
            <div className='about md:pt-20 pt-10'>
                <div className="about-us-block">
                    <div className="container">
                        <div className="text flex items-center justify-center">
                            <div className="content md:w-5/6 w-full">
                                <div className="body1 text-center">
                                    Make an unforgettable first impression and accelerate employee engagement with thoughtfully curated new hire kits that welcome team members from day one. The onboarding experience sets the tone for an employee&apos;s entire journey with your company, and a well-designed welcome kit demonstrates that you&apos;ve invested in their success before they even start. New hire kits go beyond basic orientation materials—they&apos;re strategic tools that build immediate connection to your company culture, provide essential resources, and make new employees feel valued and excited about joining your team. Whether you&apos;re onboarding remote workers who need to feel connected from afar, welcoming office-based employees with desk essentials, or integrating field teams with branded gear they&apos;ll use on the job, custom new hire kits create a sense of belonging that improves retention, boosts productivity, and turns new employees into engaged brand ambassadors from the very beginning.
                                </div>
                            </div>
                        </div>
                        <div className="list-img md:pt-20 pt-10">
                            <div className="bg-img">
                                <Image
                                    src={'/images/brand/promo-collage-center3-1024x543.webp'}
                                    width={2000}
                                    height={1200}
                                    alt='New hire welcome kits'
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
                    <div className="heading3 text-center">Recommended Products for New Hire Kits</div>
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 md:mt-10 mt-6">
                        <div className="product-item text-center">
                            <div className="mb-4">
                                <Image
                                    src="/images/brand/med_nomadicshirts-479.jpg"
                                    width={600}
                                    height={400}
                                    alt="Branded Apparel"
                                    className="w-full rounded-xl"
                                />
                            </div>
                            <div className="heading6">Branded Apparel</div>
                            <div className="body1 text-secondary mt-2">Company hoodies, t-shirts, and polo shirts for immediate team identity</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="mb-4">
                                <Image
                                    src="/images/brand/tekweld.jpg"
                                    width={600}
                                    height={400}
                                    alt="Welcome Boxes"
                                    className="w-full rounded-xl"
                                />
                            </div>
                            <div className="heading6">Welcome Boxes</div>
                            <div className="body1 text-secondary mt-2">Curated gift boxes with multiple branded items and welcome materials</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="mb-4">
                                <Image
                                    src="/images/brand/amber-promo-616.jpg"
                                    width={600}
                                    height={400}
                                    alt="Drinkware Essentials"
                                    className="w-full rounded-xl"
                                />
                            </div>
                            <div className="heading6">Drinkware Essentials</div>
                            <div className="body1 text-secondary mt-2">Coffee mugs, tumblers, and water bottles for daily use</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="mb-4">
                                <Image
                                    src="/images/brand/05-advantage.jpg"
                                    width={600}
                                    height={400}
                                    alt="Tech Accessories"
                                    className="w-full rounded-xl"
                                />
                            </div>
                            <div className="heading6">Tech Accessories</div>
                            <div className="body1 text-secondary mt-2">Laptop sleeves, mouse pads, cable organizers, and webcam covers</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="mb-4">
                                <Image
                                    src="/images/brand/07.jpg"
                                    width={600}
                                    height={400}
                                    alt="Desk Supplies"
                                    className="w-full rounded-xl"
                                />
                            </div>
                            <div className="heading6">Desk Supplies</div>
                            <div className="body1 text-secondary mt-2">Branded notebooks, pens, sticky notes, and desk organizers</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="mb-4">
                                <Image
                                    src="/images/brand/Promo-Industry.webp"
                                    width={600}
                                    height={400}
                                    alt="Backpacks & Bags"
                                    className="w-full rounded-xl"
                                />
                            </div>
                            <div className="heading6">Backpacks & Bags</div>
                            <div className="body1 text-secondary mt-2">Quality branded bags for commuting or carrying work essentials</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="mb-4">
                                <Image
                                    src="/images/brand/idproductsourcelanyard-616.jpg"
                                    width={600}
                                    height={400}
                                    alt="Badge Holders & Lanyards"
                                    className="w-full rounded-xl"
                                />
                            </div>
                            <div className="heading6">Badge Holders & Lanyards</div>
                            <div className="body1 text-secondary mt-2">Professional ID holders and lanyards with company branding</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="mb-4">
                                <Image
                                    src="/images/brand/Promo-Products (1).jpg"
                                    width={600}
                                    height={400}
                                    alt="Onboarding Guides"
                                    className="w-full rounded-xl"
                                />
                            </div>
                            <div className="heading6">Onboarding Guides</div>
                            <div className="body1 text-secondary mt-2">Custom handbooks, company culture guides, and welcome materials</div>
                        </div>
                    </div>
                </div>

                {/* Industry Examples Section */}
                <div className="container md:mt-20 mt-10">
                    <div className="heading3 text-center">How Different Industries Use New Hire Kits</div>
                    <div className="grid md:grid-cols-2 gap-8 md:mt-10 mt-6">
                        <div className="industry-example p-6 bg-surface rounded-2xl">
                            <div className="heading6 mb-3">Tech Startups & Software Companies</div>
                            <div className="body1 text-secondary">Tech companies ship comprehensive remote onboarding kits with branded hoodies, wireless chargers, mechanical keyboards, and company swag to create instant connection with distributed teams working from home.</div>
                        </div>
                        <div className="industry-example p-6 bg-surface rounded-2xl">
                            <div className="heading6 mb-3">Healthcare Organizations</div>
                            <div className="body1 text-secondary">Hospitals and clinics provide new healthcare workers with branded scrubs, badge holders, quality water bottles, and personalized name tags that help them feel prepared and professional from day one.</div>
                        </div>
                        <div className="industry-example p-6 bg-surface rounded-2xl">
                            <div className="heading6 mb-3">Corporate Offices</div>
                            <div className="body1 text-secondary">Corporate teams welcome new employees with desk setup kits including notebooks, premium pens, coffee mugs, and branded desk accessories that make their workspace feel personalized and professional.</div>
                        </div>
                        <div className="industry-example p-6 bg-surface rounded-2xl">
                            <div className="heading6 mb-3">Construction & Field Services</div>
                            <div className="body1 text-secondary">Construction companies equip new crew members with branded work gear including safety vests, hard hats, tool bags, and durable drinkware that they&apos;ll use every day on the job site.</div>
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

export default NewHireKitsUseCase
