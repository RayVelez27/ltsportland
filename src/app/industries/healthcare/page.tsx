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

const HealthcareIndustry = () => {
    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="Quality Promotional Products • Bulk Discounts Available • Free Mockups" />
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-transparent" />
                <Breadcrumb heading='Healthcare Promotional Products' subHeading='Healthcare Promotional Products' />
            </div>
            <div className='about md:pt-20 pt-10'>
                <div className="about-us-block">
                    <div className="container">
                        <div className="text flex items-center justify-center">
                            <div className="content md:w-5/6 w-full">
                                <div className="body1 text-center">
                                    Build trust and strengthen patient relationships with custom branded promotional products designed specifically for healthcare settings. From hospitals and clinics to private practices and healthcare systems, we provide high-quality promotional items that reinforce your commitment to care. Our healthcare promotional products include branded scrubs, medical bags, wellness kits, stress relief items, hand sanitizers, water bottles, and patient appreciation gifts. Whether you&apos;re launching a wellness campaign, hosting a health fair, recognizing dedicated staff, or thanking loyal patients, our products help your healthcare brand stand out. We understand the importance of quality and safety in healthcare, which is why we offer products that meet industry standards while effectively promoting your practice or facility. Let us help you create memorable touchpoints that build lasting patient loyalty and staff morale.
                                </div>
                            </div>
                        </div>
                        <div className="list-img grid sm:grid-cols-3 gap-[30px] md:pt-20 pt-10">
                            <div className="bg-img">
                                <Image
                                    src={'/images/brand/logomarkhurley.jpg'}
                                    width={2000}
                                    height={3000}
                                    alt='Healthcare promotional products'
                                    className='w-full rounded-[30px]'
                                />
                            </div>
                            <div className="bg-img">
                                <Image
                                    src={'/images/brand/azalee-globe-stress-ball-616.jpg'}
                                    width={2000}
                                    height={3000}
                                    alt='Medical branded merchandise'
                                    className='w-full rounded-[30px]'
                                />
                            </div>
                            <div className="bg-img">
                                <Image
                                    src={'/images/brand/lanyard-snugz.jpg'}
                                    width={2000}
                                    height={3000}
                                    alt='Healthcare staff gifts'
                                    className='w-full rounded-[30px]'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Benefit props="md:pt-20 pt-10" />
            <div className='about'>
                {/* Popular Healthcare Products Section */}
                <div className="container md:mt-20 mt-10">
                    <div className="heading3 text-center">Popular Healthcare Products</div>
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 md:mt-10 mt-6">
                        <div className="product-item text-center">
                            <div className="mb-4">
                                <Image
                                    src="https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?w=600&h=400&fit=crop"
                                    width={600}
                                    height={400}
                                    alt="Custom Scrubs & Medical Apparel"
                                    className="w-full rounded-xl"
                                />
                            </div>
                            <div className="heading6">Custom Scrubs & Medical Apparel</div>
                            <div className="body1 text-secondary mt-2">Professional branded scrubs, lab coats, and medical uniforms for your entire staff</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="mb-4">
                                <Image
                                    src="https://images.unsplash.com/photo-1556816723-1ce827b9cfbb?w=600&h=400&fit=crop"
                                    width={600}
                                    height={400}
                                    alt="Wellness Kits"
                                    className="w-full rounded-xl"
                                />
                            </div>
                            <div className="heading6">Wellness Kits</div>
                            <div className="body1 text-secondary mt-2">Curated wellness packages with hand sanitizers, stress balls, and health essentials</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="mb-4">
                                <Image
                                    src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&h=400&fit=crop"
                                    width={600}
                                    height={400}
                                    alt="Patient Appreciation Gifts"
                                    className="w-full rounded-xl"
                                />
                            </div>
                            <div className="heading6">Patient Appreciation Gifts</div>
                            <div className="body1 text-secondary mt-2">Thoughtful branded items like tote bags, water bottles, and wellness journals</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="mb-4">
                                <Image
                                    src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=400&fit=crop"
                                    width={600}
                                    height={400}
                                    alt="Medical Bags & Carriers"
                                    className="w-full rounded-xl"
                                />
                            </div>
                            <div className="heading6">Medical Bags & Carriers</div>
                            <div className="body1 text-secondary mt-2">Durable branded bags for nurses, doctors, and medical professionals</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="mb-4">
                                <Image
                                    src="/images/brand/Untitled design - 2025-11-04T165254.582.png"
                                    width={600}
                                    height={400}
                                    alt="Health Fair Giveaways"
                                    className="w-full rounded-xl object-cover"
                                    style={{ height: '400px' }}
                                />
                            </div>
                            <div className="heading6">Health Fair Giveaways</div>
                            <div className="body1 text-secondary mt-2">Affordable bulk items perfect for community health events and screenings</div>
                        </div>
                        <div className="product-item text-center">
                            <div className="mb-4">
                                <Image
                                    src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&h=400&fit=crop"
                                    width={600}
                                    height={400}
                                    alt="Staff Recognition Awards"
                                    className="w-full rounded-xl"
                                />
                            </div>
                            <div className="heading6">Staff Recognition Awards</div>
                            <div className="body1 text-secondary mt-2">Quality recognition items to celebrate your healthcare heroes</div>
                        </div>
                    </div>
                </div>

                {/* Use Cases Section */}
                <div className="container md:mt-20 mt-10">
                    <div className="heading3 text-center">How Healthcare Organizations Use Our Products</div>
                    <div className="grid md:grid-cols-2 gap-8 md:mt-10 mt-6">
                        <div className="use-case-item p-6 bg-surface rounded-2xl">
                            <div className="heading6 mb-3">New Patient Welcome Kits</div>
                            <div className="body1 text-secondary">Make great first impressions with branded welcome packages including health information folders, appointment cards, and useful wellness items.</div>
                        </div>
                        <div className="use-case-item p-6 bg-surface rounded-2xl">
                            <div className="heading6 mb-3">Staff Appreciation Programs</div>
                            <div className="body1 text-secondary">Boost morale and retention with quality branded gifts during Healthcare Worker Appreciation Week, holidays, and milestone celebrations.</div>
                        </div>
                        <div className="use-case-item p-6 bg-surface rounded-2xl">
                            <div className="heading6 mb-3">Community Health Events</div>
                            <div className="body1 text-secondary">Promote wellness initiatives and health screenings with branded giveaways that keep your organization top-of-mind in the community.</div>
                        </div>
                        <div className="use-case-item p-6 bg-surface rounded-2xl">
                            <div className="heading6 mb-3">Referral Partner Gifts</div>
                            <div className="body1 text-secondary">Strengthen relationships with referring physicians and partner organizations through thoughtful branded gifts.</div>
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

export default HealthcareIndustry
