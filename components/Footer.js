"use client"
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link';

function Footer() {

    const currentYear = new Date().getFullYear();


    return (
        <>
            <Container fluid className="iv-bg p-0 z-2 position-relative">
                <Container className="w-80 p-12 d-lg-block d-none p-0 py-2" >
                    <Row>
                        <Col className="f-head p-0" lg={3}>ABOUT IVISTAZ</Col>
                        <Col className="f-head p-0" lg={3}> SERVICES </Col>

                        <Col className="f-head p-0" lg={3}>INDUSTRIES</Col>
                        <Col className="f-head p-0" lg={3}>SOLUTIONS</Col>

                    </Row>
                </Container>

                <Row className='w-80 p-4 d-lg-none d-flex'>
                </Row>
            </Container>


            <Container fluid className="bg-black z-2 position-relative p-lg-0 px-4 footer-main">
                <Container className="w-80 p-12 p-0 py-2" >
                    <Row>
                        {/* ABOUT IVISTAZ */}
                        <Col className="footer p-0" lg={3}>
                            <Col className="f-head d-lg-none d-flex py-lg-0 py-3 pb-2" lg={3}>ABOUT IVISTAZ</Col>
                            <ul>
                                {/* <li>
                                    <Link href="#" className='text-decoration-none text-white custom-footer-font'>
                                        Performance Focus
                                    </Link>
                                </li> */}
                                <li>
                                    {/* <Link href="#" className='text-decoration-none text-white custom-footer-font'>
                                        Company
                                    </Link> */}
                                </li>
                                <li>
                                    <Link href="/our-team" className='text-decoration-none text-white custom-footer-font'>
                                        Our Team
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact-us" className='text-decoration-none text-white custom-footer-font'>
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/case-studies" className='text-decoration-none text-white custom-footer-font'>
                                        Case Studies
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blogs" className='text-decoration-none text-white custom-footer-font'>
                                        Blogs
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/privacy-policy" className='text-decoration-none text-white custom-footer-font'>
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/our-clients" className='text-decoration-none text-white custom-footer-font'>
                                        Our Clients
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link href="#" className='text-decoration-none text-white custom-footer-font'>
                                        Statement
                                    </Link>
                                </li> */}
                                {/* <li>
                                    <Link href="#" className='text-decoration-none text-white custom-footer-font'>
                                        Disclaimer
                                    </Link>
                                </li> */}
                            </ul>

                        </Col>

                        {/* SERVICES */}
                        <Col className="footer p-0" lg={3}>
                            <Col className="f-head d-lg-none d-flex py-lg-0 py-3 pb-2" lg={3}>SERVICES</Col>
                            <ul>
                                <li>
                                    <Link href="/service/website-design-and-development" className='text-decoration-none text-white custom-footer-font'>
                                        Web Design & Development
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/service/search-engine-optimization" className='text-decoration-none text-white custom-footer-font'>
                                        Search Engine Optimization
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/service/search-engine-marketing" className='text-decoration-none text-white custom-footer-font'>
                                        Search Engine Marketing
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/service/organic-social-media" className='text-decoration-none text-white custom-footer-font'>
                                        Social Media - Organic
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/service/social-media-marketing" className='text-decoration-none text-white custom-footer-font'>
                                        Social Media Marketing
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/service/content-development-b2b-b2c" className='text-decoration-none text-white custom-footer-font'>
                                        Content Development (B2B & B2C)
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/service/design" className='text-decoration-none text-white custom-footer-font'>
                                        Design
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link href="service/website-design-and-development" className='text-decoration-none text-white custom-footer-font'>
                                        Videos
                                    </Link>
                                </li> */}
                            </ul>

                        </Col>

                        {/* INDUSTRIES */}
                        <Col className="footer p-0" lg={3}>
                            <Col className="f-head d-lg-none d-flex py-lg-0 py-3 pb-2" lg={3}>INDUSTRIES</Col>
                            <ul>
                                <li>
                                    <Link href="/industries/appliances" className='text-decoration-none text-white custom-footer-font'>
                                        Appliances
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/industries/automobiles" className='text-decoration-none text-white custom-footer-font'>
                                        Automobiles
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/industries/beauty-wellness" className='text-decoration-none text-white custom-footer-font'>
                                        Beauty & Wellness
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/industries/fashion-accessories" className='text-decoration-none text-white custom-footer-font'>
                                        Fashion & Accessories
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/industries/hospitality" className='text-decoration-none text-white custom-footer-font'>
                                        Hospitality
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/industries/jewellery" className='text-decoration-none text-white custom-footer-font'>
                                        Jewelry
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/industries/ngos" className='text-decoration-none text-white custom-footer-font'>
                                        Not-for-Profit
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/industries/technology-IT" className='text-decoration-none text-white custom-footer-font'>
                                        Tech/IT
                                    </Link>
                                </li>
                            </ul>
                        </Col>

                        {/*SOLUTIONS*/}
                        <Col className="footer p-0" lg={3}>
                            <Col className="f-head d-lg-none d-flex py-lg-0 py-3 pb-2" lg={2}>SOLUTIONS</Col>
                            <ul>
                                <li>
                                    <Link href="/mastery/solutions#value" className='text-decoration-none text-white custom-footer-font'>
                                        Value Creation
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/mastery/solutions#traffic" className='text-decoration-none text-white custom-footer-font'>
                                        Traffic
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/mastery/solutions#leadgen" className='text-decoration-none text-white custom-footer-font'>
                                        Lead-gen
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/mastery/solutions#onlinesales" className='text-decoration-none text-white custom-footer-font'>
                                        Online Sales
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/mastery/solutions#exp" className='text-decoration-none text-white custom-footer-font'>
                                        Experience
                                    </Link>
                                </li>
                            </ul>

                        </Col>
                    </Row>

                </Container>
            </Container>
            <Container className="iv-grey pt-2 pb-2 z-3" fluid>
                <Container className="text-center">
                    <Row className="g-0">
                        <Col className="d-flex align-items-center justify-content-end">
                            <p className="footer-text">Follow Us:</p>
                        </Col>
                        <Col className="d-flex align-items-center justify-content-start">
                            <Link href="https://www.linkedin.com/company/ivistawebsolutions/mycompany/" target='_blank'>
                                <Image src="/images/linkedin.svg" width={43} height={43} className="social" alt='' />
                            </Link>
                            <Link href="https://www.instagram.com/ivistawebsolutions/" target='_blank'>
                                <Image src="/images/instagram.svg" width={44} height={44} className="social" alt='' />
                            </Link>
                            <Link href="https://www.facebook.com/ivistasolutions/" target='_blank'>
                                <Image src="/images/facebook.svg" width={40} height={40} className="social" alt='' />
                            </Link>
                            <Link href="https://twitter.com/ivistasolutions?lang=en" target='_blank'>
                                <Image src="/images/twitter.svg" width={44} height={44} className="social" alt='' />
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container className="bg-black pt-1 pb-1 z-2" fluid>
                <Container className="text-center copyright">
                    <p className='mb-0'>© {currentYear} iVistaz Ecom Services Pvt Ltd</p>
                </Container>
            </Container>
        </>
    )
}

export default Footer
