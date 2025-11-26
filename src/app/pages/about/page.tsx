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

const AboutUs = () => {
    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="Quality Promotional Products • Bulk Discounts Available • Free Mockups" />
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-white" />
            </div>
            <section className='about md:pt-32 pt-24'>
                <style jsx>{`
                    .cs-container {
                        width: 100%;
                        max-width: 80rem;
                        margin: auto;
                        padding: 0 1rem;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        gap: clamp(3rem, 10vw, 6.25rem);
                    }

                    .cs-content {
                        text-align: left;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                    }

                    .cs-flex {
                        max-width: 38.5rem;
                    }

                    .cs-topper {
                        font-size: 1rem;
                        line-height: 1.2em;
                        text-transform: uppercase;
                        text-align: inherit;
                        letter-spacing: 0.1em;
                        font-weight: 700;
                        color: #ff6a3e;
                        margin-bottom: 0.5rem;
                        display: block;
                    }

                    .cs-title {
                        font-size: clamp(1.9375rem, 3.9vw, 3.0625rem);
                        font-weight: 900;
                        line-height: 1.2em;
                        text-align: inherit;
                        max-width: 43.75rem;
                        margin: 0 0 1rem 0;
                        color: #1a1a1a;
                    }

                    .cs-text {
                        font-size: clamp(1rem, 1.5vw, 1.125rem);
                        line-height: 1.6em;
                        margin: 0 0 1rem 0;
                        color: #767676;
                    }

                    .cs-wrapper {
                        width: 100%;
                    }

                    .cs-card-group {
                        width: 100%;
                        margin: 0;
                        padding: 0;
                        display: grid;
                        grid-template-columns: repeat(12, 1fr);
                        row-gap: 1.75rem;
                        column-gap: clamp(1rem, 2.3vw, 1.25rem);
                    }

                    .cs-item {
                        text-align: left;
                        list-style: none;
                        width: 100%;
                        margin: 0;
                        box-sizing: border-box;
                        display: flex;
                        grid-column: span 12;
                        flex-direction: row;
                        align-items: flex-start;
                        gap: clamp(1rem, 3vw, 1.5rem);
                    }

                    .cs-icon-wrapper {
                        width: clamp(3.75rem, 7vw, 5rem);
                        height: clamp(3.75rem, 7vw, 5rem);
                        margin: 0;
                        box-sizing: border-box;
                        border: 1px solid #ff6a3e;
                        border-radius: 0.5rem;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        position: relative;
                        flex: none;
                    }

                    .cs-icon {
                        width: 2rem;
                        height: auto;
                        display: block;
                    }

                    .cs-text-group {
                        flex: 1;
                    }

                    .cs-h3 {
                        font-size: 1.25rem;
                        line-height: 1.5em;
                        margin: 0 0 0.5rem 0;
                        color: #1a1a1a;
                        font-weight: 700;
                    }

                    .cs-item-text {
                        font-size: clamp(0.875rem, 1.5vw, 1rem);
                        line-height: 1.6em;
                        margin: 0;
                        color: #767676;
                    }

                    .cs-image-group {
                        width: 100%;
                        height: auto;
                        min-height: 30.875rem;
                        margin-top: 3rem;
                        display: grid;
                        grid-template-columns: repeat(12, 1fr);
                        gap: 1.5rem;
                        position: relative;
                    }

                    .cs-picture-wrapper {
                        grid-column: span 12;
                        position: relative;
                        border-radius: 1.5rem;
                        overflow: hidden;
                    }

                    .cs-picture1 {
                        width: 100%;
                        height: 100%;
                        display: block;
                    }

                    .cs-picture1 img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        border-radius: 1.5rem;
                    }

                    .cs-box {
                        position: absolute;
                        bottom: 2rem;
                        left: 2rem;
                        background: rgba(255, 255, 255, 0.95);
                        padding: 1.5rem 2rem;
                        border-radius: 1rem;
                        display: flex;
                        flex-direction: column;
                        gap: 0.25rem;
                        z-index: 10;
                        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                    }

                    .cs-header {
                        font-size: 1.25rem;
                        line-height: 1.2em;
                        font-weight: 700;
                        margin: 0;
                        color: #1a1a1a;
                    }

                    .cs-desc {
                        font-size: 0.875rem;
                        line-height: 1.5em;
                        margin: 0;
                        color: #767676;
                    }

                    .cs-picture2 {
                        grid-column: span 12;
                        display: none;
                    }

                    @media only screen and (min-width: 48rem) {
                        .cs-item {
                            grid-column: span 6;
                        }

                        .cs-picture-wrapper {
                            grid-column: span 8;
                        }

                        .cs-picture2 {
                            grid-column: span 4;
                            display: block;
                        }

                        .cs-picture2 img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                            border-radius: 1.5rem;
                        }
                    }

                    @media only screen and (min-width: 64rem) {
                        .cs-item {
                            grid-column: span 4;
                        }
                    }
                `}</style>

                <div className="cs-container">
                    <div className="cs-content">
                        <div className="cs-flex">
                            <span className="cs-topper">Why Choose LTS Inc</span>
                            <h2 className="cs-title">Elevate Your Brand with Premium Promotional Products</h2>
                        </div>
                        <p className="cs-text">
                            Based in Portland, Maine, LTS Inc. is your trusted partner for creating lasting impressions through custom promotional products. With access to the ASI network and thousands of quality products, we combine local service with industry-leading expertise. From branded apparel and corporate gifts to trade show giveaways and employee recognition items, we help businesses of all sizes tell their story through promotional merchandise. Our commitment to quality, personalized service, and timely delivery sets us apart in the promotional products industry.
                        </p>
                    </div>

                    <div className="cs-wrapper">
                        <ul className="cs-card-group">
                            <li className="cs-item">
                                <picture className="cs-icon-wrapper">
                                    <svg className="cs-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 2L2 9L16 16L30 9L16 2Z" stroke="#ff6a3e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M2 23L16 30L30 23" stroke="#ff6a3e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M2 16L16 23L30 16" stroke="#ff6a3e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </picture>
                                <div className="cs-text-group">
                                    <h3 className="cs-h3">Thousands of Products</h3>
                                    <p className="cs-item-text">
                                        Access to the entire ASI marketplace means unlimited options. From classic promotional items to cutting-edge tech accessories, we help you find the perfect products to represent your brand.
                                    </p>
                                </div>
                            </li>
                            <li className="cs-item">
                                <picture className="cs-icon-wrapper">
                                    <svg className="cs-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="16" cy="16" r="14" stroke="#ff6a3e" strokeWidth="2"/>
                                        <path d="M16 8V16L22 20" stroke="#ff6a3e" strokeWidth="2" strokeLinecap="round"/>
                                    </svg>
                                </picture>
                                <div className="cs-text-group">
                                    <h3 className="cs-h3">Fast & Reliable Service</h3>
                                    <p className="cs-item-text">
                                        We understand deadlines matter. Our streamlined process and strong supplier relationships ensure your promotional products arrive on time, every time, without compromising quality.
                                    </p>
                                </div>
                            </li>
                            <li className="cs-item">
                                <picture className="cs-icon-wrapper">
                                    <svg className="cs-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2z" stroke="#ff6a3e" strokeWidth="2"/>
                                        <path d="M16 10v6l4 4" stroke="#ff6a3e" strokeWidth="2" strokeLinecap="round"/>
                                    </svg>
                                </picture>
                                <div className="cs-text-group">
                                    <h3 className="cs-h3">Expert Guidance</h3>
                                    <p className="cs-item-text">
                                        Our experienced team provides personalized recommendations based on your goals, budget, and brand identity. We guide you through product selection, design, and production every step of the way.
                                    </p>
                                </div>
                            </li>
                        </ul>

                        <div className="cs-image-group">
                            <div className="cs-picture-wrapper">
                                <picture className="cs-picture cs-picture1">
                                    <Image
                                        src="/images/brand/promo-collage-center3-1024x543.webp"
                                        width={868}
                                        height={828}
                                        alt="Promotional products showcase"
                                        style={{ objectFit: 'cover' }}
                                    />
                                </picture>
                                <div className="cs-box">
                                    <span className="cs-header">Maine-Based Excellence</span>
                                    <span className="cs-desc">Local service with national reach</span>
                                </div>
                            </div>
                            <picture className="cs-picture cs-picture2">
                                <Image
                                    src="/images/brand/Best-Company-Swag-Ideas_Hero.webp"
                                    width={394}
                                    height={394}
                                    alt="Custom branded merchandise"
                                    style={{ objectFit: 'cover' }}
                                />
                            </picture>
                        </div>
                    </div>
                </div>
            </section>
            <Benefit props="md:pt-20 pt-10" />
            <Newsletter props="bg-green md:mt-20 mt-10" />
            <Brand />
            <Footer />
        </>
    )
}

export default AboutUs