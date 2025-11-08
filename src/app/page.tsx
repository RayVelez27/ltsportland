'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import SliderOne from '@/components/Slider/SliderOne'
import Collection from '@/components/Home1/Collection'
import Banner from '@/components/Home1/Banner'
import Benefit from '@/components/Home1/Benefit'
import testimonialData from '@/data/Testimonial.json'
import Testimonial from '@/components/Home1/Testimonial'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  return (
    <>
      <TopNavOne props="style-one bg-black" slogan="Quality Promotional Products • Bulk Discounts Available • Free Mockups" />
      <div id="header" className='relative w-full'>
        <MenuOne props="bg-white" />
        <SliderOne />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Collection />
      </motion.div>

      {/* Why Choose Us Section */}
      <motion.section
        className="why-choose-us md:py-20 py-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <style jsx>{`
          .why-choose-container {
            width: 100%;
            max-width: 80rem;
            margin: auto;
            padding: 0 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: clamp(3rem, 6vw, 4rem);
          }

          .why-choose-content {
            text-align: left;
            width: 100%;
            max-width: 33.875rem;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }

          .why-choose-topper {
            font-size: 1rem;
            line-height: 1.2em;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            font-weight: 700;
            color: #ff6a3e;
            margin-bottom: 0.5rem;
            display: block;
          }

          .why-choose-title {
            font-size: clamp(1.9375rem, 3.9vw, 3.0625rem);
            font-weight: 900;
            line-height: 1.2em;
            max-width: 43.75rem;
            margin: 0 0 1rem 0;
            color: #1a1a1a;
          }

          .why-choose-text {
            font-size: clamp(1rem, 1.5vw, 1.125rem);
            line-height: 1.6em;
            margin: 0 0 1rem 0;
            color: #767676;
          }

          .why-choose-text:last-of-type {
            margin-bottom: 2rem;
          }

          .why-choose-color {
            color: #ff6a3e;
            font-size: inherit;
            font-weight: inherit;
            line-height: inherit;
          }

          .why-choose-ul {
            width: 100%;
            margin: 0 0 2rem 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 1.5rem;
          }

          .why-choose-li {
            list-style: none;
            margin: 0;
            padding: 0;
          }

          .why-choose-h3 {
            font-size: 1.25rem;
            line-height: 1.2em;
            font-weight: 700;
            margin: 0 0 0.5rem 0;
            color: #1a1a1a;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            gap: 0.75rem;
          }

          .why-choose-icon {
            width: 1.0625rem;
            height: auto;
            margin-top: 0.25rem;
            filter: brightness(0) saturate(100%) invert(52%) sepia(89%) saturate(2223%) hue-rotate(344deg) brightness(102%) contrast(101%);
          }

          .why-choose-item-text {
            font-size: 0.875rem;
            line-height: 1.6em;
            margin: 0;
            color: #767676;
          }

          .why-choose-button {
            font-size: 1rem;
            line-height: clamp(2.875rem, 5.5vw, 3.5rem);
            text-decoration: none;
            font-weight: 700;
            text-align: center;
            margin: 0;
            color: #fff;
            min-width: 9.375rem;
            padding: 0 1.5rem;
            background-color: #ff6a3e;
            border-radius: 0.5rem;
            display: inline-block;
            position: relative;
            z-index: 1;
            box-sizing: border-box;
            transition: background-color 0.3s;
          }

          .why-choose-button:hover {
            background-color: #e55a2e;
          }

          .why-choose-image-group {
            width: 100%;
            max-width: 40rem;
            position: relative;
            z-index: 1;
            border-radius: 1rem;
            overflow: hidden;
          }

          .why-choose-gif {
            width: 100%;
            height: auto;
            display: block;
            border-radius: 1rem;
            object-fit: cover;
          }

          @media only screen and (min-width: 64rem) {
            .why-choose-container {
              flex-direction: row;
              justify-content: space-between;
            }

            .why-choose-image-group {
              flex: none;
              order: 2;
            }
          }
        `}</style>

        <div className="why-choose-container">
          <div className="why-choose-image-group">
            <img
              src="/images/brand/Story_-Classic-05-[remix].gif"
              alt="LTS Inc promotional products showcase"
              className="why-choose-gif"
            />
          </div>

          <div className="why-choose-content">
            <span className="why-choose-topper">Why Choose LTS Inc</span>
            <h2 className="why-choose-title">Your Trusted Partner for <span className="why-choose-color">Promotional Excellence</span></h2>
            <p className="why-choose-text">
              Based in Portland, Maine, LTS Inc. has been helping businesses create lasting impressions through premium promotional products. With access to thousands of products and decades of combined experience, we&apos;re your one-stop shop for all things branded.
            </p>
            <p className="why-choose-text">
              From corporate apparel and trade show giveaways to employee recognition gifts and client appreciation items, we deliver quality products on time and within budget. Let us help you tell your brand story.
            </p>

            <ul className="why-choose-ul">
              <li className="why-choose-li">
                <h3 className="why-choose-h3">
                  <svg className="why-choose-icon" width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="8" height="8" fill="currentColor"/>
                    <rect y="10" width="8" height="8" fill="currentColor"/>
                    <rect x="9" width="8" height="8" fill="currentColor"/>
                    <rect x="9" y="10" width="8" height="8" fill="currentColor"/>
                  </svg>
                  Access to Thousands of Products
                </h3>
                <p className="why-choose-item-text">
                  Through our ASI network membership, we offer unlimited options from industry-leading suppliers. From classic promotional items to cutting-edge tech accessories, we help you find the perfect products to represent your brand.
                </p>
              </li>
              <li className="why-choose-li">
                <h3 className="why-choose-h3">
                  <svg className="why-choose-icon" width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="8" height="8" fill="currentColor"/>
                    <rect y="10" width="8" height="8" fill="currentColor"/>
                    <rect x="9" width="8" height="8" fill="currentColor"/>
                    <rect x="9" y="10" width="8" height="8" fill="currentColor"/>
                  </svg>
                  Expert Guidance & Service
                </h3>
                <p className="why-choose-item-text">
                  Our experienced team provides personalized recommendations based on your goals, budget, and timeline. We guide you through product selection, design approval, and production to ensure a smooth experience from start to finish.
                </p>
              </li>
              <li className="why-choose-li">
                <h3 className="why-choose-h3">
                  <svg className="why-choose-icon" width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="8" height="8" fill="currentColor"/>
                    <rect y="10" width="8" height="8" fill="currentColor"/>
                    <rect x="9" width="8" height="8" fill="currentColor"/>
                    <rect x="9" y="10" width="8" height="8" fill="currentColor"/>
                  </svg>
                  Quality Guaranteed, On Time
                </h3>
                <p className="why-choose-item-text">
                  We stand behind every product we deliver. Our strong supplier relationships and streamlined processes ensure your promotional items arrive on schedule without compromising on quality or craftsmanship.
                </p>
              </li>
            </ul>

            <a className="why-choose-button" href="/pages/contact">Request a Quote</a>
          </div>
        </div>
      </motion.section>

      {/* How We Work Section */}
      <motion.section
        className="how-we-work md:py-20 py-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <style jsx>{`
          .steps-container {
            width: 100%;
            max-width: 80rem;
            margin: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: clamp(3rem, 6vw, 4rem);
          }

          .steps-content {
            text-align: center;
            width: 100%;
            padding: 0 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .steps-topper {
            font-size: 1rem;
            line-height: 1.2em;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            font-weight: 700;
            color: #ff6a3e;
            margin-bottom: 0.5rem;
            display: block;
          }

          .steps-title {
            font-size: clamp(1.9375rem, 3.9vw, 3.0625rem);
            font-weight: 900;
            line-height: 1.2em;
            max-width: 43.75rem;
            margin: 0 0 1rem 0;
            color: #1a1a1a;
          }

          .steps-text {
            font-size: clamp(1rem, 1.5vw, 1.125rem);
            line-height: 1.6em;
            margin: 0;
            color: #767676;
            max-width: 32.625rem;
          }

          .steps-card-group {
            margin: 0;
            padding: 0;
            display: grid;
            justify-items: center;
            align-items: stretch;
            grid-auto-flow: row;
            width: 100%;
          }

          .steps-item {
            list-style: none;
            box-sizing: border-box;
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            position: relative;
          }

          .steps-item::after {
            content: "";
            width: 100%;
            height: 1px;
            background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #bababa 50%, rgba(255, 255, 255, 0) 100%);
            opacity: 0.6;
            position: absolute;
            bottom: 0;
            left: 0;
          }

          .steps-item:first-of-type {
            padding-top: 0;
          }

          .steps-item:last-of-type {
            padding-bottom: 0;
          }

          .steps-item:last-of-type::after {
            content: none;
          }

          .steps-number {
            font-size: clamp(5rem, 1vw, 6.25rem);
            font-weight: 900;
            line-height: 1.2em;
            color: #ff6a3e;
            opacity: 0.12;
            display: block;
          }

          .steps-h3 {
            font-size: clamp(1.25rem, 2vw, 1.5625rem);
            font-weight: 700;
            line-height: 1.2em;
            margin: -1.9375rem 0 1rem 0;
            color: #1a1a1a;
          }

          .steps-item-text {
            font-size: clamp(0.875rem, 2vw, 1rem);
            line-height: 1.5em;
            text-align: left;
            margin: 0;
            color: #767676;
          }

          @media only screen and (min-width: 48rem) {
            .steps-card-group {
              grid-template-columns: repeat(4, 1fr);
              gap: 0;
            }

            .steps-item {
              padding: clamp(1.5rem, 3vw, 3.75rem);
            }

            .steps-item::after {
              width: 1px;
              height: 100%;
              background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, #bababa 50%, rgba(255, 255, 255, 0) 100%);
              opacity: 0.6;
              right: 0;
              left: initial;
            }

            .steps-item:first-of-type,
            .steps-item:last-of-type {
              padding: clamp(1.5rem, 3vw, 3.75rem);
            }
          }
        `}</style>

        <div className="steps-container">
          <div className="steps-content">
            <span className="steps-topper">Our Process</span>
            <h2 className="steps-title">How We Work</h2>
            <p className="steps-text">
              From concept to delivery, we make ordering promotional products simple and stress-free. Our proven process ensures quality results every time.
            </p>
          </div>
          <ul className="steps-card-group">
            <li className="steps-item">
              <span className="steps-number">01</span>
              <h3 className="steps-h3">Share Your Vision</h3>
              <p className="steps-item-text">
                Tell us about your project, budget, and timeline. We&apos;ll help you find the perfect products to match your brand and goals.
              </p>
            </li>
            <li className="steps-item">
              <span className="steps-number">02</span>
              <h3 className="steps-h3">Review & Approve Design</h3>
              <p className="steps-item-text">
                Our design team creates custom mockups for your approval. We&apos;ll refine until it&apos;s exactly what you envisioned.
              </p>
            </li>
            <li className="steps-item">
              <span className="steps-number">03</span>
              <h3 className="steps-h3">Production & Quality Check</h3>
              <p className="steps-item-text">
                Your order goes into production with our trusted suppliers. Every item is inspected to meet our high-quality standards.
              </p>
            </li>
            <li className="steps-item">
              <span className="steps-number">04</span>
              <h3 className="steps-h3">Delivery & Delight</h3>
              <p className="steps-item-text">
                Receive your perfectly branded products on time and ready to impress. We handle logistics so you can focus on making an impact.
              </p>
            </li>
          </ul>
        </div>
      </motion.section>

      {/* Top Selling Products Section */}
      <motion.div
        className="top-selling-products md:pt-20 pt-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="container">
          <div className="heading3 text-center">Top Selling Products</div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-8 md:mt-10 mt-6">

            {/* Premium Drinkware - From Employee Appreciation */}
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

            {/* Branded Apparel - From Employee Appreciation */}
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

            {/* Wellness Gifts - From Employee Appreciation */}
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

            {/* Branded Tote Bags - From Trade Shows */}
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

            {/* Stress Relievers & Toys - From Trade Shows */}
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

            {/* Pens & Notebooks - From Trade Shows */}
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

            {/* Backpacks & Bags - From New Hire Kits */}
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

            {/* Onboarding Guides - From New Hire Kits */}
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

            {/* Welcome Boxes - From New Hire Kits */}
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

          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Banner />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Benefit props="md:py-20 py-10" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Testimonial data={testimonialData} limit={6} />
      </motion.div>
      <Footer />
    </>
  )
}
