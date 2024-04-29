"use client"
import React from 'react'
import Header1 from '../../../../components/HeaderBlack'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link';
import Image from 'next/image'
import Footer from '../../../../components/Footer';
function page() {
  return (
    <>
      <Container fluid className="mb-4">
        <Header1 />
        <img src="/images/h-icon.svg" className="header-icon " />
        <Container className="w-80 custom-container">
          <h1 className="fs-70 fw-bold">ART</h1>
        </Container>

        <Container className="bg-black banner w-80 pb-5 z-3" >
          <Row className="d-flex align-items-start">
            <Col lg={12} className="pl-8 pt-5">
              <h1 className="fs-19 fw-bold text-white i-link">Services</h1>
              <p className="para-text text-white">At the core of everything we do lies the art of transforming exceptional services into extraordinary results. We are dedicated to crafting and curating tailored solutions that exceed your expectations. Whether it’s a comprehensive package or a single service, we’re here to help brands achieve more than what they wish for. And the best part? We have a <Link href="/mastery/about-us" className="red">performance-focused model</Link>. This means we get paid only when we deliver results.</p>
            </Col>
            <Col lg={12} className="pl-8 pt-5">
              <Link className="fs-2 fw-semibold  r-link" href="/service/website-design-and-development">
                Web Design & Development
              </Link>
            </Col>
            <Col lg={12} className="pl-8 pt-5">
              <Link className="fs-2 fw-semibold r-link" href="/service/search-engine-optimization">
                Search Engine Optimization
              </Link>
            </Col>
            <Col lg={12} className="pl-8 pt-5">
              <Link className="fs-2 fw-semibold r-link" href="/service/search-engine-marketing">
                Search Engine Marketing
              </Link>
            </Col>
            <Col lg={12} className="pl-8 pt-5">
              <Link className="fs-2 fw-semibold r-link" href="/service/social-media-organic">
                Social Media - Organic
              </Link>
            </Col>
            <Col lg={12} className="pl-8 pt-5">
              <Link className="fs-2 fw-semibold r-link" href="/service/social-media-marketing">
                Social Media Marketing
              </Link>
            </Col>
            <Col lg={12} className="pl-8 pt-5">
              <Link className="fs-2 fw-semibold r-link" href="/service/content-development-b2b-b2c">
                Content Development (B2B & B2C)
              </Link>
            </Col>
            <Col lg={12} className="pl-8 pt-5">
              <Link className="fs-2 fw-semibold r-link" href="/service/design">
                Design
              </Link>
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </>
  )
}

export default page