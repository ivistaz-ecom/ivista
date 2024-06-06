"use client"
import React, { useState, useEffect, useRef } from 'react'
import Header1 from '../../../../components/HeaderBlack'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link';
import Image from 'next/image'
import Footer from '../../../../components/Footer';
import ScrollAnimationArt from '../../../../components/SharedComponents/ScrollAnimationArt';
import SeoComponents from '../../../../components/SeoComponents/Seo'
import { usePathname } from 'next/navigation'

function page() {
  const pathname = usePathname();
  const [domainName, setDomainName] = useState('');

  useEffect(() => {
    setDomainName(window.location.hostname);
  }, []);

  const title = " Performance-focused digital marketing services";
  const description = "At iVistaz, digital marketing services are tailored for optimal performance for the business, ensuring results are delivered.";
  const path = `${domainName}${pathname}`;
  const metaImage = ""; 

  return (
    <>     
     <SeoComponents title={title} description={description} path={path} metaImage={metaImage} />
     
      <ScrollAnimationArt/>
      <Container fluid className="mb-4 p-0">
        <Header1 />
        <img src="/images/h-icon.svg" className="header-icon " />
        <Container fluid className='bg-white z-3 p-0'>
          <article>
            <div className='timeline4'>
              <Container className="w-80 custom-container position-relative bg-white">
                <h1 className="fs-70 fw-bold ps-6">ART</h1>
              </Container>

              <Container className="bg-black banner w-80 pb-5 z-3" >
                <Row className="d-flex align-items-start">
                  <Col lg={12} className="mt-5 position-relative">
                    <div className=' position-relative'>
                      <div className='timeline-badge4 mt-4'></div>
                      <div className='ps-6'>
                        <h1 className="fs-19 fw-bold text-white i-link position-relative">
                          Services
                        </h1>
                        <p className="para-text text-white">
                          At the core of everything we do lies the art of transforming exceptional services into extraordinary results with effective digital marketing techniques. We are dedicated to crafting and curating tailored digital marketing solutions that exceed your expectations. Whether it’s a comprehensive package for content creation and design or a single service, we’re here to help brands achieve more than what they wish for. And the best part? We have a <Link href="/mastery/about-us" className="red">performance-based digital marketing model.</Link>  This means we get paid only when we deliver results.</p>
                      </div>
                    </div>

                  </Col>
                  <Col lg={12} className="mt-5">
                    <div className='position-relative'>
                      <div className='timeline-badge4 mt-2'></div>
                      <Link
                        className="fs-2 fw-semibold r-link position-relative ps-6"
                        href="/service/website-design-and-development">
                        Web Design & Development
                      </Link>
                    </div>
                  </Col>

                  <Col lg={12} className="mt-5">
                    <div className='position-relative'>
                      <div className='timeline-badge4 mt-2'></div>
                      <Link className="fs-2 fw-semibold r-link ps-6" href="/service/search-engine-optimization">
                        Search Engine Optimization
                      </Link>
                    </div>
                  </Col>

                  <Col lg={12} className="mt-5">
                    <div className='position-relative'>
                      <div className='timeline-badge4 mt-2'></div>
                      <Link className="fs-2 fw-semibold r-link ps-6" href="/service/search-engine-marketing">
                        Search Engine Marketing
                      </Link>
                    </div>
                  </Col>

                  <Col lg={12} className="mt-5">
                    <div className='position-relative'>
                      <div className='timeline-badge4 mt-2'></div>
                      <Link className="fs-2 fw-semibold r-link ps-6" href="/service/organic-social-media">
                        Social Media - Organic
                      </Link>
                    </div>
                  </Col>

                  <Col lg={12} className="mt-5">
                    <div className='position-relative'>
                      <div className='timeline-badge4 mt-2'></div>
                      <Link className="fs-2 fw-semibold r-link ps-6" href="/service/social-media-marketing">
                        Social Media Marketing
                      </Link>
                    </div>
                  </Col>
                  <Col lg={12} className="mt-5">
                    <div className='position-relative'>
                      <div className='timeline-badge4 mt-2'></div>
                      <Link className="fs-2 fw-semibold r-link ps-6" href="/service/content-development-b2b-b2c">
                        Content Development (B2B & B2C)
                      </Link>
                    </div>
                  </Col>
                  <Col lg={12} className="mt-5">
                    <div className='position-relative'>
                      <div className='timeline-badge4 mt-2'></div>
                      <Link className="fs-2 fw-semibold r-link ps-6" href="/service/design">
                        Design
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </article>
        </Container>
      </Container >
      <Footer />
    </>
  )
}

export default page