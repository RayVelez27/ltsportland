'use client'
import React, { useState } from 'react'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Footer from '@/components/Footer/Footer'
import * as Icon from "@phosphor-icons/react/dist/ssr";

const Faqs = () => {
    const [activeTab, setActiveTab] = useState<string | undefined>('ordering')
    const [activeQuestion, setActiveQuestion] = useState<string | undefined>('')

    const handleActiveTab = (tab: string) => {
        setActiveTab(tab)
    }

    const handleActiveQuestion = (question: string) => {
        setActiveQuestion(prevQuestion => prevQuestion === question ? undefined : question)
    }

    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="Quality Promotional Products • Bulk Discounts Available • Free Mockups" />
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-transparent" />
                <Breadcrumb heading='FAQs' subHeading='FAQs' />
            </div>
            <div className='faqs-block md:py-20 py-10'>
                <div className="container">
                    <div className="flex justify-between max-lg:flex-col gap-y-8">
                        <div className="left lg:w-1/4 w-full">
                            <div className="menu-tab flex lg:flex-col flex-row gap-5 flex-wrap">
                                {[
                                    'ordering', 'customization', 'bulk pricing', 'shipping', 'artwork & proofs', 'product care', 'contact'
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className={`tab-item inline-block w-fit heading6 has-line-before text-secondary2 hover:text-black duration-300 ${activeTab === item ? 'active' : ''}`}
                                        onClick={() => handleActiveTab(item)}
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="right lg:w-2/3 w-full">
                            {/* Ordering Tab */}
                            <div className={`tab-question flex flex-col gap-5 ${activeTab === 'ordering' ? 'active' : ''}`}>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '1' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('1')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">What is the minimum order quantity?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">Minimum order quantities vary by product. Most promotional items have minimums ranging from 25 to 100 pieces. Contact our team for specific product minimums and volume pricing options.</div>
                                </div>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '2' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('2')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">How long does it take to receive my order?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">Production time varies by product and customization complexity. Standard orders typically take 7-14 business days for production, plus shipping time. Rush orders are available for an additional fee. We&apos;ll provide an exact timeline when you request a quote.</div>
                                </div>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '3' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('3')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">How do I place an order?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">Simply contact us with your product requirements, desired quantities, and any customization details. Our team will provide a detailed quote, mockup, and timeline. Once approved, we&apos;ll process your order and keep you updated throughout production.</div>
                                </div>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '4' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('4')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">Can I order samples before placing a bulk order?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">Yes! We offer product samples for most items. Sample fees vary by product and are often credited toward your final order. Contact us to request samples of specific products you&apos;re considering.</div>
                                </div>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '5' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('5')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">What payment methods do you accept?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">We accept major credit cards, ACH bank transfers, and company checks. For first-time orders, we typically require 50% deposit with the balance due before shipping. Established accounts may qualify for net payment terms.</div>
                                </div>
                            </div>

                            {/* Customization Tab */}
                            <div className={`tab-question flex flex-col gap-5 ${activeTab === 'customization' ? 'active' : ''}`}>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '7' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('7')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">What customization options are available?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">We offer various customization methods including screen printing, embroidery, laser engraving, pad printing, and digital printing. The best method depends on your product, design complexity, and budget. Our team will recommend the optimal approach for your project.</div>
                                </div>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '8' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('8')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">Can you work with my existing logo or design?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">Absolutely! We can work with your existing logo files. For best results, provide vector files (AI, EPS, PDF) but we can also work with high-resolution PNG or JPG files. If needed, our design team can help clean up or recreate your logo.</div>
                                </div>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '9' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('9')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">How many colors can I use in my design?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">The number of colors depends on the decoration method and product. Screen printing typically allows 1-4 spot colors per location. Full-color digital printing and embroidery support unlimited colors. We&apos;ll advise on the best approach based on your design.</div>
                                </div>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '10' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('10')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">Can I customize different products with the same design?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">Yes! Your logo or design can be applied across multiple products. This is great for creating cohesive branded gift sets, employee kits, or event packages. We&apos;ll adjust the sizing and placement to work perfectly on each item.</div>
                                </div>
                            </div>

                            {/* Bulk Pricing Tab */}
                            <div className={`tab-question flex flex-col gap-5 ${activeTab === 'bulk pricing' ? 'active' : ''}`}>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '11' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('11')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">How does bulk pricing work?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">Unit prices decrease as order quantities increase. Larger quantities benefit from economies of scale in production and decoration. We provide tiered pricing quotes showing different quantity breaks to help you find the best value for your budget.</div>
                                </div>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '12' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('12')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">Do you offer volume discounts?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">Yes! We offer competitive volume discounts. The more you order, the lower the per-unit cost. Common quantity breaks are at 100, 250, 500, and 1000+ pieces, though exact breaks vary by product. Request a quote for specific pricing tiers.</div>
                                </div>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '13' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('13')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">Can I mix and match products to reach quantity breaks?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">Pricing is typically based on individual product quantities rather than combined totals. However, for large mixed orders, we may be able to offer additional discounts. Contact us to discuss your specific needs and we&apos;ll work to provide the best pricing possible.</div>
                                </div>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '14' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('14')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">Are there setup fees or hidden costs?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">Some decoration methods require one-time setup fees for screens, dies, or digitizing. These are clearly itemized in your quote. Many times setup fees are waived for larger orders. We provide transparent all-inclusive pricing with no hidden charges.</div>
                                </div>
                            </div>

                            {/* Shipping Tab */}
                            <div className={`tab-question flex flex-col gap-5 ${activeTab === 'shipping' ? 'active' : ''}`}>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '15' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('15')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">What are the shipping costs?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">Shipping costs vary based on order size, weight, destination, and delivery speed. We work with major carriers to get competitive rates and pass savings to you. Exact shipping costs are provided with your quote. For large orders, freight shipping may be most economical.</div>
                                </div>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '16' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('16')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">Do you ship internationally?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">Yes, we ship to most international destinations. International shipping costs and delivery times vary significantly by location. Customers are responsible for any customs duties, taxes, or import fees. Contact us for international shipping quotes and estimated delivery times.</div>
                                </div>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '17' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('17')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">Can I track my order?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">Yes! Once your order ships, we&apos;ll email you tracking information. You can follow your package from our facility to your door. We use reputable carriers that provide detailed tracking and delivery confirmation.</div>
                                </div>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '18' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('18')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">Can you ship to multiple addresses?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">Absolutely! We can ship portions of your order to different locations—perfect for remote teams, multiple office locations, or direct-to-recipient gift programs. Additional fees may apply for multiple shipments. Provide all addresses with your order and we&apos;ll coordinate the logistics.</div>
                                </div>
                            </div>

                            {/* Artwork & Proofs Tab */}
                            <div className={`tab-question flex flex-col gap-5 ${activeTab === 'artwork & proofs' ? 'active' : ''}`}>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '19' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('19')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">What file formats do you accept?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">We prefer vector files (AI, EPS, PDF) for best quality, but can also work with high-resolution raster files (PNG, JPG, TIFF). Vector files allow unlimited scaling without quality loss. If you only have low-resolution files, our design team may be able to help recreate your artwork.</div>
                                </div>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '20' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('20')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">Do you provide free mockups?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">Yes! We provide complimentary digital mockups showing how your logo will look on the selected products. This lets you visualize the final result before production begins. Mockups are included with every quote at no extra charge.</div>
                                </div>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '21' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('21')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">Do I need to approve a proof before production?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">Yes, we require written approval of a digital proof before starting production. This ensures you&apos;re completely satisfied with the design, colors, and placement. Once you approve, we&apos;ll begin production. Review proofs carefully as changes after approval may incur additional fees.</div>
                                </div>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '22' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('22')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">Can you help with design if I don&apos;t have artwork?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">Yes! Our in-house design team can create custom artwork, clean up existing logos, or help you develop the perfect design for your products. Simple design services are often complimentary with your order. More complex design projects may have additional fees.</div>
                                </div>
                            </div>

                            {/* Product Care Tab */}
                            <div className={`tab-question flex flex-col gap-5 ${activeTab === 'product care' ? 'active' : ''}`}>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '23' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('23')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">How do I care for branded apparel?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">For screen-printed or embroidered apparel, wash inside-out in cold water and tumble dry on low heat. Avoid bleach and fabric softeners. This helps preserve the decoration and extend the life of your branded clothing. Specific care instructions will be included with your order.</div>
                                </div>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '24' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('24')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">How should I clean drinkware products?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">Most promotional drinkware is top-rack dishwasher safe, though hand washing is recommended for longest life. Avoid abrasive cleaners that could damage printed logos. Stainless steel items may require hand washing. Product-specific care instructions will be provided.</div>
                                </div>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '25' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('25')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">How long will the branding last?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">With proper care, quality promotional products can maintain their branding for years. Embroidery is extremely durable. Screen printing and laser engraving also provide long-lasting results. The decoration method, product usage, and care all affect longevity. We use proven techniques for maximum durability.</div>
                                </div>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '26' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('26')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">What if I receive defective products?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">We inspect all orders before shipping, but if you receive defective items, contact us immediately. We&apos;ll work quickly to resolve the issue with replacements or appropriate credit. Please report any concerns within 7 days of delivery so we can address them promptly.</div>
                                </div>
                            </div>

                            {/* Contact Tab */}
                            <div className={`tab-question flex flex-col gap-5 ${activeTab === 'contact' ? 'active' : ''}`}>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '27' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('27')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">How can I contact customer service?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">Call us at 207-774-1104 during business hours (Monday-Friday, 9am-5pm EST), email orders@ltsportland.com, or use the contact form on our website. We respond to all inquiries within one business day. For urgent matters, phone is the fastest way to reach us.</div>
                                </div>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '28' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('28')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">Where are you located?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">Our office is located at 37 Danforth St., Portland, ME 04101. While we&apos;re based in Maine, we ship promotional products nationwide and internationally. Local customers are welcome to visit our office by appointment to view product samples and discuss their needs in person.</div>
                                </div>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '29' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('29')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">How quickly do you respond to quote requests?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">We aim to provide detailed quotes within 24 hours of receiving your request. For simple projects, you may hear back the same day. Complex multi-product orders or custom design projects may take slightly longer. We&apos;ll acknowledge your request promptly and provide a timeline.</div>
                                </div>
                                <div
                                    className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === '30' ? 'open' : ''}`}
                                    onClick={() => handleActiveQuestion('30')}
                                >
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">Do you work with businesses of all sizes?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">Absolutely! We serve everyone from small startups and nonprofits to large corporations and institutions. Whether you need 25 items or 10,000, we provide the same personalized service and attention to detail. No order is too small or too large—we&apos;re here to help bring your promotional product vision to life.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Faqs
