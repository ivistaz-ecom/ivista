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

      <ScrollAnimationArt />
      <Header1 />
      <Container fluid className="mb-lg-4 mb-0 p-0">

        <img src="/images/h-icon.svg" className="header-icon d-none d-lg-block d-sm-none" />
        <Container fluid className='bg-white z-3 p-0 mb-0'>
          <div className='custom_height_art_top'></div>
          <article>
            <div className='timeline4'>
              <Container className="w-80 custom-container position-relative bg-white">
                {/* <h1 className="fs-80 fw-bold ps-6">ART</h1> */}
              </Container>

              <Container className="banner w-80 mb-0 z-3" >
                <Row className="d-flex align-items-start">
                  <Col lg={12} className="mt-5 position-relative">
                    <div className=' position-relative'>
                      <div className='timeline-badge4 mt-4'></div>
                      <div className='ps-6'>
                        <h1 className="fs-21 fw-bold text-red position-relative">
                          Services
                        </h1>
                        <p className="para-text text-black">
                          At the core of everything we do lies the art of transforming exceptional services into extraordinary results with effective digital marketing techniques. We are dedicated to crafting and curating tailored digital marketing solutions that exceed your expectations. Whether it’s a comprehensive package for content creation and design or a single service, we’re here to help brands achieve more than what they wish for. And the best part? We have a <Link href="/mastery/about-us" className="red">performance-based digital marketing model.</Link>  This means we get paid only when we deliver results.</p>
                      </div>
                    </div>
                  </Col>
                  <div className='row bg-white z-3'>
                  {/* Column -1 */}
                  <div className="col-lg-4">
                    <div className="d-flex flex-lg-row flex-column align-items-center mt-lg-4 mt-3">
                      <div className=" pt-0">
                        <img src="/images/Content_Development.svg" />
                      </div>
                      <div className="ps-lg-4 text-lg-start text-center">
                        <Link className='text-decoration-none txt-danger' href="/service/content-development-b2b-b2c">
                        <p className='fw-bold fs-3 mb-0'>Content Development</p>
                        <p className='fw-bold fs-3'>(B2B & B2C)</p></Link>
                      </div>
                    </div>
                  </div>
                  {/* Column -2 */}
                  <div className="col-lg-4">
                    <div className="d-flex flex-lg-row flex-column align-items-center mt-lg-4 mt-3 pt-lg-3">
                      <div className=" pt-0">
                        <img src="/images/Design.svg" />
                      </div>
                      <div className="ps-lg-4 text-lg-start text-center">
                      <Link className='text-decoration-none txt-danger' href="/service/design">
                        <p className='fw-bold fs-3 pt-3'>Design</p></Link>
                      </div>
                    </div>
                  </div>
                  {/* Column -3 */}
                  <div className="col-lg-4">
                    <div className="d-flex flex-lg-row flex-column align-items-center mt-lg-4 mt-3">
                      <div className=" pt-0">
                        <img src="/images/Search_Engine_Marketing.svg" />
                      </div>
                      <div className="ps-lg-4 text-lg-start text-center">
                      <Link className='text-decoration-none txt-danger' href="/service/search-engine-marketing">
                        <p className='fw-bold fs-3'>Search Engine Marketing</p></Link>
                      </div>
                    </div>
                  </div>
                  {/* Column -4 */}
                  <div className="col-lg-4 pt-lg-5">
                    <div className="d-flex flex-lg-row flex-column align-items-center mt-lg-4 mt-3">
                      <div className="text-start pt-0">
                        <img src="/images/Search_Engine_Optimization.svg" />
                      </div>
                      <div className="ps-lg-4 text-lg-start text-center">
                      <Link className='text-decoration-none txt-danger' href="/service/search-engine-optimization">
                        <p className='fw-bold fs-3'>Search Engine Optimization</p></Link>
                      </div>
                    </div>
                  </div>
                   {/* Column -5 */}
                   <div className="col-lg-4 pt-lg-5">
                    <div className="d-flex flex-lg-row flex-column align-items-center mt-lg-4 mt-3">
                      <div className=" pt-0">
                        <img src="/images/Social_Media_Marketing.svg" />
                      </div>
                      <div className="ps-lg-4 text-lg-start text-center">
                      <Link className='text-decoration-none txt-danger' href="/service/social-media-marketing">
                        <p className='fw-bold fs-3'>Social Media Marketing</p></Link>
                      </div>
                    </div>
                  </div>
                   {/* Column -6 */}
                   <div className="col-lg-4 pt-lg-5">
                    <div className="d-flex flex-lg-row flex-column align-items-center mt-lg-4 mt-3">
                      <div className=" pt-0">
                        <img src="/images/Social_Media-Organic.svg" />
                      </div>
                      <div className="ps-lg-4 text-lg-start text-center">
                      <Link className='text-decoration-none txt-danger' href="/service/organic-social-media">
                        <p className='fw-bold fs-3 mb-0'>Social Media -</p>
                        <p className='fw-bold fs-3'> Organic</p></Link>
                      </div>
                    </div>
                  </div>
                   {/* Column -7 */}
                   <div className="col-lg-4 pt-lg-5">
                    <div className="d-flex flex-lg-row flex-column align-items-center mt-lg-4 mt-3">
                      <div className=" pt-0">
                        <img src="/images/Web_Design.svg" />
                      </div>
                      <div className="ps-lg-4 text-lg-start text-center">
                      <Link className='text-decoration-none txt-danger' href="/website-design-and-development">
                        <p className='fw-bold fs-3'>Web Design & Development</p></Link>
                      </div>
                    </div>
                  </div>
                  </div>
                </Row>
              </Container>
              <div className='custom_height_art_bottom'></div>
            </div>
          </article>
        </Container>
      </Container >
      <Footer />
    </>
  )
}

export default page