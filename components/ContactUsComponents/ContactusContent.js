import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link';
import Image from 'next/image'
import ContactForm from '../Forms/ContactForm';


const ContactusContent = () => {
    return (
        <>
            <Container className="w-80 custom-container">
                <Row>
                    <Col>
                        <h1 className="fs-21 text-white fw-bold">CONTACT US</h1>
                        <p className="text-white para-text">
                            “The secret to getting ahead is getting started.” - Mark Twain
                        </p>
                        <p className="text-white para-text">
                            Begin your journey towards performance now.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} className='py-4'>
                        <ContactForm />
                    </Col>
                    <Col lg={6} className="d-flex justify-content-center align-items-center">
                        <Container className="iv-bg contact py-lg-0 py-3">
                            <h1 className="contact-head pb-4">iVistaz Ecom Services Pvt Ltd</h1>
                            <p className="contact-text text-center">4th Floor, 16 & 16/1,</p>
                            <p className="contact-text text-center">Reliaable, Phoenix Towers,</p>
                            <p className="contact-text text-center"> Museum Rd,</p>
                            <p className="contact-text text-center"> Shanthala Nagar, Ashok Nagar</p>
                            <p className="contact-text text-center">Bengaluru, Karnataka 560025</p>
                            <Container className="text-center pt-5">
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
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ContactusContent
