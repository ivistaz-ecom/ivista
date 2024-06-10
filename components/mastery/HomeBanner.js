"use client"
import React, { useState, useEffect, useRef } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Image from 'next/image';
import Link from 'next/link'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Svg from '../Industries/Automobiles/svg'
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { FaArrowRight } from "react-icons/fa";
import ScrollAnimationIOthers from '../SharedComponents/ScrollAnimationIOthers';
import SeoComponents from '../../components/SeoComponents/Seo'
import { usePathname } from 'next/navigation'
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);


function HeroBanner() {

  const pathname = usePathname();
  const [domainName, setDomainName] = useState('');

  useEffect(() => {
    setDomainName(window.location.hostname);
  }, []);

  const title = "Expert Digital marketing solutions with iVistaz";
  const description = " Ivistaz has mastered its art, providing expert digital marketing solutions that aim at value creation, increasing traffic, and generating leads and customers.";
  const path = `${domainName}${pathname}`;
  const metaImage = "";

  return (
    <>
      <SeoComponents title={title} description={description} path={path} metaImage={metaImage} />
      <ScrollAnimationIOthers />
      <Container className="bg-white banner w-80 pb-5 mb-4  z-3 p-0" >
        <Row className="d-flex align-items-start p-0">
          <article>
            <div className='timeline2'>
              <Col lg={12} className=" mt-5 position-relative" >
                <div className='timeline-badge2 mt-lg-4'></div>
                <h1 className="fs-19 fw-bold red ps-6">Solutions</h1>
                <p className="para-text ps-6 pe-lg-2 pe-3">In the ever-changing realm of digital marketing, expectations have taken a quantum leap, compelling individuals to adapt like never before. Brands have relentlessly pursued growth by embracing innovative solutions. That’s where we step in. With a passion for creating exceptional experiences and staying ahead of the curve, we’ve mastered our art. And today, we don’t just perform, we outperform.</p>
              </Col>
              <Col lg={12} className=" mt-2 position-relative" id='value'>
                <div className='timeline-badge2 mt-1'></div>
                <h3 className="fs-3 red fw-semibold ps-6">Value Creation</h3>
                <p className="para-text ps-6 pe-lg-2 pe-3">
                  We understand that creating value for your company/brand lies primarily in how you communicate your value proposition. Our strategy and copy team will collaborate with you to craft the messaging and narrative for your company/brand, working to increase brand value with Digital Marketing.
                </p>
              </Col>
              <Col lg={12} className="mt-2 position-relative" id="traffic">
                <div className='timeline-badge2 mt-1'></div>
                <h3 className="fs-3 red fw-semibold ps-6">Traffic</h3>
                <p className="para-text ps-6 pe-lg-2 pe-3">
                  Web traffic is a function of SEO, content, and UX/UI coming together. We will research and create a repository of keywords to match the search intent of your customers. A robust combination of primary, secondary, and tertiary keywords and long-tail phrases will be infused into your web content to maximize Page 1 ranking for your keywords. Your traffic will be further boosted with off-page SEO, social bookmarking, directory, blog page, Quora, and video submissions.
                </p>
              </Col>
              <Col lg={12} className="mt-2 position-relative" id='leadgen'>
                <div className='timeline-badge2 mt-1'></div>
                <h3 className="fs-3 red fw-semibold ps-6">Lead-gen</h3>
                <p className="para-text ps-6 pe-lg-2 pe-3">
                  If you are a B2B company looking to consistently deliver MQLs (Marketing Qualified Leads) to your sales pipeline, we are here to help. Our lead-gen team will understand your goals and develop robust social and email marketing plans to generate Leads with Digital Marketing.
                </p>
                <p className="para-text ps-6">
                  Read our B2B lead-gen case studies <Link href="/case-studies" className=' red'>here.
                  </Link>
                </p>
              </Col>

              <Col lg={12} className="mt-2 position-relative" id='onlinesales'>
                <div className='timeline-badge2 mt-1'></div>
                <div className='ps-6'>
                  <h3 className="fs-3 red fw-semibold">Online Sales</h3>
                  <p className="para-text pe-lg-2 pe-3">
                    Whether it is B2C products like home appliances, automobiles, earphones, airline tickets, or hotel room bookings, we have helped businesses significantly increase Online Sales with Digital Marketing. Our e-commerce marketing strategies and capabilities include Organic Search, Paid Search/Google PPC, real-time bidding, Organic and Paid Social marketing, and Amazon marketing. Our ad campaigns are designed not just to create awareness and demand for your products and services but will also keep a sharp eye on your CPL (Cost Per Lead) and ROAS (Return on Ad Spend).
                  </p>
                  <p className="para-text">
                    Read our success stories for boosting online sales <Link href="/case-studies" className='red'>here.
                    </Link>
                  </p>
                </div>
              </Col>
              <Col lg={12} className="mt-2 position-relative" id='exp'>
                <div className='timeline-badge2 mt-1'></div>
                <div className='ps-6'>
                  <h3 className="fs-3 red fw-semibold">Experience</h3>
                  <p className="para-text pe-lg-2 pe-3">
                    Today, the first customer touch point takes place online. That’s the premise we begin with when we design digital journeys.
                  </p>
                  <p className="para-text pe-lg-2 pe-3">
                    We are passionate about building web and mobile experiences that will bring your customers back to engage with your website, brand, and content. For UX/UI, we combine design with data and analytics to create seamless experiences—desktop, mobile, or apps. Our platform capabilities include WordPress, React, JS, Node, and Magento.
                  </p>
                  <p className="para-text pe-lg-2 pe-3">
                    Looking to develop a new website or redesign your existing one? Reach out to us <Link href="/contact-us" className=' red'>here.
                    </Link>
                  </p>
                </div>
              </Col>
            </div>
          </article >
        </Row>

      </Container>
    </>
  )
}

export default HeroBanner
