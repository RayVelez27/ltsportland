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
      <TopNavOne props="style-one bg-black" slogan="🌲 Proudly Maine-Owned & Operated Since 1991 🌲" />
      <div id="header" className='relative w-full'>
        <MenuOne props="bg-white" />
        <SliderOne />
      </div>

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
            }
          }
        `}</style>

        <div className="why-choose-container">
          <div className="why-choose-content">
            <h2 className="why-choose-title">More Than Promotional Products. <span className="why-choose-color">A Maine Legacy.</span></h2>
            <p className="why-choose-text">
              We&apos;re your neighbors. You&apos;ve probably seen our work at local trade shows, community events, and on the apparel of businesses throughout Greater Portland. We&apos;re not a national franchise shipping generic products from across the country. We&apos;re Jason and the LTS team—fellow Mainers who understand that when you succeed, our community succeeds.
            </p>
            <p className="why-choose-text">
              We believe in quality. Maine has always been known for craftsmanship that lasts. Whether it&apos;s boats, buildings, or branded products, we don&apos;t cut corners. Every item we source meets our high standards because your brand deserves nothing less. That&apos;s not just good business—it&apos;s the Maine way.
            </p>
            <p className="why-choose-text">
              We give back. For 33 years, we&apos;ve supported local schools, youth sports, community organizations, and charitable causes throughout Maine. When you work with LTS, a portion of every project goes back into the community we all call home.
            </p>

            <a className="why-choose-button" href="/pages/contact">Request a Quote</a>
          </div>

          <div className="why-choose-image-group">
            <img
              src="/images/brand/Story_-Classic-05-[remix].gif"
              alt="LTS Inc promotional products showcase"
              className="why-choose-gif"
            />
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="how-we-work md:py-20 py-10" style={{paddingLeft: 0, paddingRight: 0, backgroundColor: '#f7f7f7'}}>
        <style jsx>{`
          .steps-container {
            width: 100%;
            max-width: 36.5rem;
            margin: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: clamp(3rem, 6vw, 4rem);
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
            align-items: center;
            position: relative;
            text-align: center;
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
            font-size: clamp(3rem, 8vw, 5rem);
            font-weight: 900;
            line-height: 1.2em;
            color: #ff6a3e;
            display: block;
            margin-bottom: 0.5rem;
          }

          .steps-h3 {
            font-size: clamp(1rem, 2vw, 1.25rem);
            font-weight: 600;
            line-height: 1.4em;
            margin: 0;
            color: #1a1a1a;
          }

          @media only screen and (min-width: 48rem) {
            .steps-container {
              max-width: 120rem;
            }

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
          <ul className="steps-card-group">
            <li className="steps-item">
              <span className="steps-number">33</span>
              <h3 className="steps-h3">Years Serving Maine</h3>
            </li>
            <li className="steps-item">
              <span className="steps-number">500+</span>
              <h3 className="steps-h3">Local Businesses</h3>
            </li>
            <li className="steps-item">
              <span className="steps-number">25+</span>
              <h3 className="steps-h3">Charities Supported</h3>
            </li>
            <li className="steps-item">
              <span className="steps-number">100%</span>
              <h3 className="steps-h3">Maine Committed</h3>
            </li>
          </ul>
        </div>
      </section>

      {/* Our Process Section */}
      <motion.section
        id="why-choose-289"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <style jsx global>{`
          #why-choose-289 {
            text-align: center;
            padding: clamp(3.75rem, 7.82vw, 6.25rem) 1rem;
          }
          #why-choose-289 .cs-container {
            width: 100%;
            max-width: 34.375rem;
            margin: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: clamp(3rem, 6vw, 4rem);
          }
          #why-choose-289 .cs-content {
            text-align: left;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }
          #why-choose-289 .cs-topper {
            font-size: 1rem;
            line-height: 1.2em;
            text-transform: uppercase;
            text-align: inherit;
            letter-spacing: 0.1em;
            font-weight: 700;
            color: #ff6a3e;
            margin-bottom: 0.25rem;
            display: block;
          }
          #why-choose-289 .cs-title {
            font-size: clamp(1.9375rem, 3.9vw, 3.0625rem);
            font-weight: 900;
            line-height: 1.2em;
            text-align: inherit;
            max-width: 43.75rem;
            margin: 0 0 1rem 0;
            color: #1a1a1a;
            position: relative;
          }
          #why-choose-289 .cs-text {
            font-size: clamp(1rem, 1.5vw, 1.125rem);
            line-height: 1.5em;
            text-align: inherit;
            width: 100%;
            max-width: 32.625rem;
            margin: 0;
            color: #767676;
          }
          #why-choose-289 .cs-card-group {
            width: 100%;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 1rem;
          }
          #why-choose-289 .cs-item {
            list-style: none;
            text-align: left;
            width: 100%;
            padding: 2rem;
            background-color: #f7f7f7;
            border-radius: 1rem;
            box-sizing: border-box;
            transition: background-color 0.3s;
          }
          #why-choose-289 .cs-item:hover {
            background-color: #ff6a3e;
            cursor: pointer;
          }
          #why-choose-289 .cs-item:hover .cs-h3 {
            color: #fff;
          }
          #why-choose-289 .cs-item:hover .cs-item-text {
            color: #fff;
          }
          #why-choose-289 .cs-icon {
            width: auto;
            height: 3rem;
            margin-bottom: 1.5rem;
            display: block;
          }
          #why-choose-289 .cs-h3 {
            font-size: clamp(1.25rem, 2.5vw, 1.5625rem);
            line-height: 1.2em;
            margin: 0 0 1rem 0;
            color: #1a1a1a;
            transition: color 0.3s;
          }
          #why-choose-289 .cs-item-text {
            font-size: 1rem;
            line-height: 1.5em;
            margin: 0 0 1rem 0;
            color: #767676;
            transition: color 0.3s;
          }
          #why-choose-289 .cs-link {
            font-size: 1rem;
            font-weight: 600;
            color: #ff6a3e;
            text-decoration: none;
            display: inline-block;
            transition: color 0.3s;
          }
          #why-choose-289 .cs-link:hover {
            color: #e55a2e;
          }
          #why-choose-289 .cs-item:hover .cs-link {
            color: #fff;
          }
          @media only screen and (min-width: 48rem) {
            #why-choose-289 .cs-container {
              max-width: 80rem;
            }
            #why-choose-289 .cs-content {
              flex-direction: row;
              justify-content: space-between;
              align-items: flex-end;
              gap: 4rem;
            }
            #why-choose-289 .cs-flex {
              width: 50%;
            }
            #why-choose-289 .cs-title {
              margin: 0;
            }
            #why-choose-289 .cs-card-group {
              justify-content: space-between;
              align-items: stretch;
              flex-direction: row;
              gap: clamp(1rem, 1.5vw, 1.25rem);
            }
            #why-choose-289 .cs-item {
              width: auto;
              padding: 2rem clamp(1rem, 2.1vw, 2rem);
            }
          }
        `}</style>

        <div className="cs-container">
          <div className="cs-content">
            <div className="cs-flex">
              <h2 className="cs-title">Why Maine Businesses Choose LTS</h2>
            </div>
          </div>
          <ul className="cs-card-group">
            <li className="cs-item">
              <div className="cs-icon" style={{fontSize: '3rem', marginBottom: '1.5rem'}}>🏔️</div>
              <h3 className="cs-h3">Maine Craftsmanship You Can Trust</h3>
              <p className="cs-item-text">
                We&apos;ve spent 33 years building relationships with suppliers who share our commitment to quality. No cheap imports that fall apart after one use. Just honest, Maine-quality products that make you proud to put your name on them.
              </p>
              <a href="/pages/about" className="cs-link">See Our Quality Guarantee →</a>
            </li>
            <li className="cs-item">
              <div className="cs-icon" style={{fontSize: '3rem', marginBottom: '1.5rem'}}>🤝</div>
              <h3 className="cs-h3">Your Portland Neighbors, Not a Distant Vendor</h3>
              <p className="cs-item-text">
                Call us and you&apos;ll talk to Jason—not a call center in another state. Visit our Portland location and we&apos;ll meet face-to-face. Need a rush order? We&apos;ll make it happen because that&apos;s what neighbors do.
              </p>
              <a href="/pages/contact" className="cs-link">Call Jason Now →</a>
            </li>
            <li className="cs-item">
              <div className="cs-icon" style={{fontSize: '3rem', marginBottom: '1.5rem'}}>💙</div>
              <h3 className="cs-h3">Invested in Maine&apos;s Success—Including Yours</h3>
              <p className="cs-item-text">
                We&apos;ve supported over 25 local charities, sponsored countless youth sports teams, and helped Maine nonprofits stretch their budgets for 33 years. Because strong communities create strong businesses.
              </p>
              <a href="/pages/about" className="cs-link">Learn About Our Community Work →</a>
            </li>
          </ul>
        </div>
      </motion.section>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Collection />
      </motion.div>

      {/* Contact Us Section */}
      <motion.section
        id="cs-contact-242"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <style jsx global>{`
          #cs-contact-242 {
            padding: clamp(3.75rem, 7.82vw, 6.25rem) 1rem;
          }
          #cs-contact-242 .cs-container {
            width: 100%;
            max-width: 80rem;
            margin: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: clamp(3rem, 6vw, 4rem);
          }
          #cs-contact-242 .cs-content {
            text-align: center;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          #cs-contact-242 .cs-topper {
            font-size: 1rem;
            line-height: 1.2em;
            text-transform: uppercase;
            text-align: inherit;
            letter-spacing: 0.1em;
            font-weight: 700;
            color: #ff6a3e;
            margin-bottom: 0.25rem;
            display: block;
          }
          #cs-contact-242 .cs-title {
            font-size: clamp(1.9375rem, 3.9vw, 3.0625rem);
            font-weight: 900;
            line-height: 1.2em;
            text-align: inherit;
            max-width: 32.625rem;
            margin: 0 0 1rem 0;
            color: #1a1a1a;
            position: relative;
          }
          #cs-contact-242 .cs-text {
            font-size: clamp(1rem, 1.5vw, 1.125rem);
            line-height: 1.5em;
            text-align: inherit;
            width: 100%;
            max-width: 32.625rem;
            margin: 0;
            color: #767676;
          }
          #cs-contact-242 #cs-form-242 {
            width: 100%;
            margin-bottom: clamp(2rem, 5.3vw, 2.5rem);
            padding: clamp(1.25rem, 4.5vw, 2.5rem);
            box-sizing: border-box;
            border: 1px solid #dad9e3;
            border-radius: 1rem;
          }
          #cs-contact-242 .cs-label {
            font-size: clamp(0.875rem, 1.3vw, 1rem);
            line-height: 1.5em;
            font-weight: 700;
            margin-bottom: clamp(1rem, 1em, 1.25rem);
            color: #1a1a1a;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-direction: column;
          }
          #cs-contact-242 .cs-label-message {
            margin-bottom: clamp(2rem, 4.5vw, 2.5rem);
          }
          #cs-contact-242 .cs-input,
          #cs-contact-242 .cs-textarea {
            font-size: 1rem;
            width: 100%;
            height: 4rem;
            margin-top: 0.25rem;
            padding-left: 1.25rem;
            border: 1px solid transparent;
            border-bottom: 1px solid #b4b2c7;
            box-sizing: border-box;
            transition: border 0.3s;
          }
          #cs-contact-242 .cs-input:hover,
          #cs-contact-242 .cs-textarea:hover {
            border: 1px solid #ff6a3e;
          }
          #cs-contact-242 .cs-input::placeholder,
          #cs-contact-242 .cs-textarea::placeholder {
            color: #7d799c;
          }
          #cs-contact-242 .cs-textarea {
            font-family: inherit;
            margin: 0;
            padding-top: 1.25rem;
            min-height: 7.5rem;
          }
          #cs-contact-242 .cs-button-solid {
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
            border: none;
            cursor: pointer;
            transition: background-color 0.3s;
          }
          #cs-contact-242 .cs-button-solid:hover {
            background-color: #e55a2e;
          }
          #cs-contact-242 .cs-submit {
            width: 100%;
          }
          #cs-contact-242 .cs-right-section {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-end;
            gap: clamp(1.75rem, 4vw, 2.5rem);
            position: relative;
          }
          #cs-contact-242 .cs-ul {
            padding: 0;
            padding-left: clamp(1rem, 3vw, 2rem);
            margin: 0;
            width: 100%;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
          }
          #cs-contact-242 .cs-li {
            list-style: none;
            display: flex;
            justify-content: flex-start;
            align-items: center;
          }
          #cs-contact-242 .cs-li:hover .cs-icon-wrapper {
            transform: scale(1.1);
          }
          #cs-contact-242 .cs-li:nth-of-type(2) {
            padding-bottom: 1.25rem;
            border-bottom: 1px solid #dad9e3;
          }
          #cs-contact-242 .cs-header {
            font-size: clamp(1rem, 2vw, 1.25rem);
            font-weight: 700;
            line-height: 1.2em;
            margin-bottom: 0.5rem;
            color: #1a1a1a;
            display: block;
          }
          #cs-contact-242 .cs-link {
            font-size: clamp(1rem, 2vw, 1.25rem);
            line-height: 1.2em;
            text-decoration: none;
            color: #767676;
            position: relative;
          }
          #cs-contact-242 .cs-link:hover:before {
            width: 100%;
          }
          #cs-contact-242 .cs-link:before {
            content: "";
            width: 0%;
            height: 2px;
            background: currentColor;
            opacity: 1;
            position: absolute;
            display: block;
            bottom: 0;
            left: 0;
            transition: width 0.3s;
          }
          #cs-contact-242 .cs-block {
            display: block;
          }
          #cs-contact-242 .cs-icon-wrapper {
            margin-right: clamp(2rem, 2.5vw, 2.25rem);
            display: flex;
            justify-content: center;
            align-items: center;
            flex: none;
            transition: transform 0.3s;
          }
          #cs-contact-242 .cs-icon {
            width: clamp(2rem, 3vw, 2.25rem);
            height: auto;
            display: block;
          }
          #cs-contact-242 .cs-picture {
            width: 100%;
            border-radius: clamp(1rem, 1.5vw, 1.25rem);
            overflow: hidden;
            display: block;
            position: relative;
            aspect-ratio: 1.44;
          }
          #cs-contact-242 .cs-img {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            object-fit: cover;
          }
          @media only screen and (min-width: 43.75rem) {
            #cs-contact-242 #cs-form-242 {
              display: flex;
              justify-content: space-between;
              align-items: flex-start;
              flex-wrap: wrap;
              order: 2;
            }
            #cs-contact-242 .cs-label {
              width: 48%;
            }
            #cs-contact-242 .cs-label-message {
              width: 100%;
            }
            #cs-contact-242 .cs-right-section {
              flex-direction: row;
              align-items: center;
            }
          }
          @media only screen and (min-width: 64rem) {
            #cs-contact-242 .cs-container {
              max-width: 80rem;
              flex-direction: row;
              justify-content: space-between;
              align-items: flex-start;
              flex-wrap: wrap;
              column-gap: 1.25rem;
              row-gap: 4rem;
            }
            #cs-contact-242 #cs-form-242 {
              width: 50%;
              max-width: 40.625rem;
            }
            #cs-contact-242 .cs-label {
              width: 100%;
            }
            #cs-contact-242 .cs-right-section {
              width: 45%;
              max-width: 33.875rem;
              flex: none;
              flex-direction: column;
            }
            #cs-contact-242 .cs-block {
              display: inline-block;
            }
            #cs-contact-242 .cs-picture {
              width: 100%;
              max-width: 100%;
              height: 27.375rem;
            }
          }
        `}</style>

        <div className="cs-container">
          <div className="cs-content">
            <span className="cs-topper">Let&apos;s Work Together</span>
            <h2 className="cs-title">Get Your Free Quote Today</h2>
            <p className="cs-text">
              Ready to make your brand stand out? Tell us about your project and we&apos;ll provide a personalized quote with product recommendations tailored to your goals and budget.
            </p>
          </div>

          <form id="cs-form-242" name="Contact Form" method="post" action="/pages/contact">
            <label className="cs-label">
              Name
              <input className="cs-input" required type="text" id="name-242" name="name" placeholder="Your Name" />
            </label>
            <label className="cs-label">
              Email
              <input className="cs-input" required type="email" id="email-242" name="email" placeholder="your@email.com" />
            </label>
            <label className="cs-label">
              Phone
              <input className="cs-input" required type="tel" id="phone-242" name="phone" placeholder="(207) 555-1234" />
            </label>
            <label className="cs-label">
              Company Name
              <input className="cs-input" type="text" id="company-242" name="company" placeholder="Your Company" />
            </label>
            <label className="cs-label cs-label-message">
              Tell Us About Your Project
              <textarea className="cs-input cs-textarea" required name="message" id="message-242" placeholder="What products are you interested in? What's your timeline and budget?"></textarea>
            </label>
            <button className="cs-button-solid cs-submit" type="submit">Get My Free Quote</button>
          </form>

          <div className="cs-right-section">
            <ul className="cs-ul">
              <li className="cs-li">
                <div className="cs-icon-wrapper">
                  <svg className="cs-icon" width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="#ff6a3e"/>
                  </svg>
                </div>
                <div className="cs-flex-group">
                  <span className="cs-header">Email</span>
                  <a href="mailto:info@ltsportland.com" className="cs-link">info@ltsportland.com</a>
                </div>
              </li>
              <li className="cs-li">
                <div className="cs-icon-wrapper">
                  <svg className="cs-icon" width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="#ff6a3e"/>
                  </svg>
                </div>
                <div className="cs-flex-group">
                  <span className="cs-header">Phone</span>
                  <a href="tel:207-555-0123" className="cs-link">(207) 555-0123</a>
                </div>
              </li>
              <li className="cs-li">
                <div className="cs-icon-wrapper">
                  <svg className="cs-icon" width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#ff6a3e"/>
                  </svg>
                </div>
                <div className="cs-flex-group">
                  <span className="cs-header">Visit Us</span>
                  <a href="https://maps.google.com" target="_blank" rel="noopener" className="cs-link">
                    <span className="cs-block">Portland, Maine</span>
                  </a>
                </div>
              </li>
            </ul>

            <div className="cs-picture">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46523.09319988769!2d-70.29089673125!3d43.66147360000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb29c72aab0ee2d%3A0x7e9db6b53372fa29!2sPortland%2C%20ME!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{border: 0}}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="cs-img"
              />
            </div>
          </div>
        </div>
      </motion.section>

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

