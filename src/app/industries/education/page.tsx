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

const EducationIndustry = () => {
    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="Quality Promotional Products • Bulk Discounts Available • Free Mockups" />
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-transparent" />
                <Breadcrumb heading='Education & Schools' subHeading='Education & Schools' />
            </div>
            <div className='about md:pt-20 pt-10'>
                <div className="about-us-block">
                    <div className="container">
                        <div className="text flex items-center justify-center">
                            <div className="content md:w-5/6 w-full">
                                <div className="body1 text-center">
                                    Build school spirit and create memorable experiences with custom branded promotional products for educational institutions. From K-12 schools to colleges and universities, we provide high-quality merchandise that celebrates your educational community. Our products include branded apparel, spirit wear, student planners, water bottles, backpacks, lanyards, promotional giveaways for orientations and events, faculty appreciation gifts, and fundraising merchandise. Whether you&apos;re welcoming new students, celebrating academic achievements, hosting alumni events, or running fundraising campaigns, our products help strengthen school pride and community engagement. We understand the unique needs of educational institutions and offer budget-friendly options, bulk pricing, and fast turnaround times to meet your academic calendar deadlines.
                                </div>
                            </div>
                        </div>
                        <div className="list-img grid sm:grid-cols-3 gap-[30px] md:pt-20 pt-10">
                            <div className="bg-img">
                                <Image
                                    src={'/images/other/about-us1.png'}
                                    width={2000}
                                    height={3000}
                                    alt='Education promotional products'
                                    className='w-full rounded-[30px]'
                                />
                            </div>
                            <div className="bg-img">
                                <Image
                                    src={'/images/other/about-us2.png'}
                                    width={2000}
                                    height={3000}
                                    alt='School branded merchandise'
                                    className='w-full rounded-[30px]'
                                />
                            </div>
                            <div className="bg-img">
                                <Image
                                    src={'/images/other/about-us3.png'}
                                    width={2000}
                                    height={3000}
                                    alt='School spirit wear'
                                    className='w-full rounded-[30px]'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Benefit props="md:pt-20 pt-10" />
            <div className='about'>
                {/* Popular Education Products Section */}
                <div className="container md:mt-20 mt-10">
                    <div className="heading3 text-center">Popular Education Products</div>
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 md:mt-10 mt-6">
                        <div className="product-item text-center">
                            <div className="heading6">Spirit Wear & Apparel</div>
                            <div className="body1 text-secondary mt-2">T-shirts, hoodies, and athletic wear featuring your school logo and colors</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="heading6">Student Welcome Kits</div>
                            <div className="body1 text-secondary mt-2">Branded packages with school essentials for new student orientation</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="heading6">Fundraising Merchandise</div>
                            <div className="body1 text-secondary mt-2">Cost-effective items perfect for PTA/PTO fundraisers and school events</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="heading6">Academic Recognition Items</div>
                            <div className="body1 text-secondary mt-2">Awards, certificates, medals, and achievement gifts for students</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="heading6">Campus Essentials</div>
                            <div className="body1 text-secondary mt-2">Branded backpacks, water bottles, notebooks, and school supplies</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="heading6">Faculty & Staff Gifts</div>
                            <div className="body1 text-secondary mt-2">Appreciation items and branded gear for teachers and administrators</div>
                        </div>
                    </div>
                </div>

                {/* Use Cases Section */}
                <div className="container md:mt-20 mt-10">
                    <div className="heading3 text-center">How Schools Use Our Products</div>
                    <div className="grid md:grid-cols-2 gap-8 md:mt-10 mt-6">
                        <div className="use-case-item p-6 bg-surface rounded-2xl">
                            <div className="heading6 mb-3">New Student Orientation</div>
                            <div className="body1 text-secondary">Welcome incoming students with branded welcome kits including lanyards, water bottles, notebooks, and school maps.</div>
                        </div>
                        <div className="use-case-item p-6 bg-surface rounded-2xl">
                            <div className="heading6 mb-3">School Spirit Events</div>
                            <div className="body1 text-secondary">Boost attendance and excitement at pep rallies, homecoming, and sporting events with custom spirit wear and giveaways.</div>
                        </div>
                        <div className="use-case-item p-6 bg-surface rounded-2xl">
                            <div className="heading6 mb-3">Fundraising Campaigns</div>
                            <div className="body1 text-secondary">Generate revenue for programs and activities with branded merchandise that parents and students are proud to purchase.</div>
                        </div>
                        <div className="use-case-item p-6 bg-surface rounded-2xl">
                            <div className="heading6 mb-3">Teacher Appreciation</div>
                            <div className="body1 text-secondary">Show gratitude to educators with thoughtful branded gifts during Teacher Appreciation Week and end-of-year celebrations.</div>
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

export default EducationIndustry
