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
                <Container className="w-80 p-12 d-lg-block d-none" >
                    <Row>
                        <Col className="f-head" lg={4}>
                            SERVICES
                        </Col>
                        <Col className="f-head" lg={2}>SOLUTIONS</Col>
                        <Col className="f-head" lg={3}>INDUSTRIES</Col>
                        <Col className="f-head" lg={3}>ABOUT IVISTAZ</Col>
                    </Row>
                </Container>

                <Row className='w-80 p-4 d-lg-none d-flex'>
                </Row>
            </Container>


            <Container fluid className="bg-black z-2 position-relative">
                <Container className="w-80 p-12" >
                    <Row>
                        <Col className="footer" lg={4}>
                            <Col className="f-head d-lg-none d-flex py-lg-0 py-3 pb-2" lg={4}>SERVICES</Col>
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
                                    <Link href="/service/social-media-organic" className='text-decoration-none text-white custom-footer-font'>
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
                        <Col className="footer" lg={2}>
                            <Col className="f-head d-lg-none d-flex py-lg-0 py-3 pb-2" lg={2}>SOLUTIONS</Col>
                            <ul>
                                <li>
                                    <Link href="/mastery/solutions#value" className='text-decoration-none text-white custom-footer-font'>
                                        Value Creation
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/mastery/solutions#traffic" className='text-decoration-none text-white custom-footer-font'>
                                        Traffic Lead-gen
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/mastery/solutions#leadgen" className='text-decoration-none text-white custom-footer-font'>
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
                        <Col className="footer" lg={3}>
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
                                    <Link href="/industries/beauty" className='text-decoration-none text-white custom-footer-font'>
                                        Beauty & Wellness
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/industries/fashion" className='text-decoration-none text-white custom-footer-font'>
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
                                    <Link href="/industries/ngo" className='text-decoration-none text-white custom-footer-font'>
                                        Not-for-Profit
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/industries/tech" className='text-decoration-none text-white custom-footer-font'>
                                        Tech
                                    </Link>
                                </li>
                            </ul>
                        </Col>
                        <Col className="footer d-flex flex-column" lg={3}>
                            <Col className="f-head d-lg-none d-flex py-lg-0 py-3 pb-2" lg={3}>ABOUT IVISTAZ</Col>
                            <ul className='d-flex flex-column g-1'>
                                <li>
                                    <Link href="#" className='text-decoration-none text-white custom-footer-font'>
                                        Performance Focus
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className='text-decoration-none text-white custom-footer-font'>
                                        Company
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/team" className='text-decoration-none text-white custom-footer-font'>
                                        Team
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
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className='text-decoration-none text-white custom-footer-font'>
                                        Privacy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className='text-decoration-none text-white custom-footer-font'>
                                        Statement
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className='text-decoration-none text-white custom-footer-font'>
                                        Disclaimer
                                    </Link>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container className="iv-grey pt-2 pb-2" fluid>
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
            <Container className="bg-black pt-1 pb-1" fluid>
                <Container className="text-center copyright">
                    <p className='mb-0'>© {currentYear} iVistaz Ecom Services Pvt Ltd</p>
                </Container>
            </Container>
        </>
    )
}

export default Footer
