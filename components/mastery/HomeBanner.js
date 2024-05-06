import React, { useEffect, useRef } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Image from 'next/image';
import Link from 'next/link'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Svg from '../Automobiles/svg'
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { FaArrowRight } from "react-icons/fa";
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);


function HeroBanner() {

  return (
    <>
      <Container className="bg-white banner w-80 pb-5 mb-4" >
        <Row className="d-flex align-items-start">
          <Col lg={12} className="pl-8 pt-5" >
            <h1 className="fs-19 fw-bold red">Solutions</h1>
            <p className="para-text">In the ever-changing realm of digital marketing, expectations have taken a quantum leap, compelling individuals to adapt like never before. Brands have relentlessly pursued growth by embracing innovative solutions. That’s where we step in. With a passion for creating exceptional experiences and staying ahead of the curve, we’ve mastered our art. And today, we don’t just perform, we outperform.</p>
          </Col>
          <Col lg={12} className="pl-8 pt-2" id='value'>
            <h3 className="fs-3 red fw-semibold" >Value Creation</h3>
            <p className="para-text">
              We understand that creating value for your company/brand lies primarily in how you communicate your value proposition. Our strategy and copy team will collaborate with you to craft the messaging and narrative for your company/brand.
            </p>
          </Col>
          <Col lg={12} className="pl-8 pt-2" id="traffic">
            <h3 className="fs-3 red fw-semibold">Traffic</h3>
            <p className="para-text">
              Web traffic is a function of SEO, content, and UX/UI coming together. We will research and create a repository of keywords to match the search intent of your customers. A robust combination of primary, secondary, and tertiary keywords and long-tail phrases will be infused into your web content to maximise Page 1 ranking for your keywords. Your traffic will be further boosted with off-page SEO, social bookmarking, directory, blog page, Quora, and video submissions.
            </p>
          </Col>
          <Col lg={12} className="pl-8 pt-2" id='leadgen'>
            <h3 className="fs-3 red fw-semibold">Lead-gen</h3>
            <p className="para-text">
              If you are a B2B company looking to consistently deliver MQLs (Marketing Qualified Leads) to your sales pipeline, we are here to help. Our lead-gen team will understand your goals and develop robust social and email marketing plans to get you leads and enquiries.
            </p>
            <p className="para-text">

              Read our B2B lead-gen case studies <Link href="/case-studies" className=' red'>here.
              </Link>
            </p>
          </Col>

          <Col lg={12} className="pl-8 pt-2" id='onlinesales'>
            <h3 className="fs-3 red fw-semibold">Online Sales</h3>
            <p className="para-text">
              Whether it is B2C products like home appliances, automobiles, earphones, airline tickets, or hotel room bookings, we have helped businesses significantly increase their online sales. Our e-commerce marketing capabilities include Organic Search, Paid Search/Google PPC, real-time bidding, Organic and Paid Social marketing, and Amazon marketing. Our ad campaigns are designed not just to create awareness and demand for your products and services but will also keep a sharp eye on your CPL (Cost Per Lead) and ROAS (Return on Ad Spend).
            </p>
            <p className="para-text">
              Read our success stories for boosting online sales <Link href="/case-studies" className='red'>here.
              </Link>
            </p>
          </Col>
          <Col lg={12} className="pl-8 pt-2" id='exp'>
            <h3 className="fs-3 red fw-semibold">Experience</h3>
            <p className="para-text">
              Today, the first customer touch point takes place online. That’s the premise we begin with when we design digital journeys.
            </p>
            <p className="para-text">
              We are passionate about building web and mobile experiences that will bring your customers back to engage with your website, brand, and content. For UX/UI, we combine design with data and analytics to create seamless experiences—desktop, mobile, or apps. Our platform capabilities include WordPress, React, JS, Node, and Magento.
            </p>
            <p className="para-text">
              Looking to develop a new website or redesign your existing one? Reach out to us <Link href="/contact-us" className=' red'>here.
              </Link>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default HeroBanner
