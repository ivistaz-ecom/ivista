import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link';
import Image from 'next/image'
import ContactForm from '../Forms/ContactForm';


const ContactusContent = () => {
    return (
        <>
            <style>
                {`
                    .submit_message {
                      display: flex;
                      flex-direction: column;
                      flex-wrap: nowrap;
                      align-content: center;
                      justify-content: center;
                      align-items: center;
                  }
                `}
            </style>
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
                    <Col lg={6} className='submit_message py-4'>
                        <ContactForm />
                    </Col>

                    {/* New Contact us */}

                    <Col lg={6} className="d-flex flex-column justify-content-center iv-bg my-5 rounded-4 h-50 ">
                        <Container className='contact'>
                            <h1 className="contact-head pb-4 pt-5">iVistaz Ecom Services Pvt. Ltd.</h1>
                            <p className="contact-text text-center">Business Enquiries</p>
                            <p><a href="tel:+918041966600" className="contact-text text-center text-decoration-none">+91 80 41966600</a></p>
                            <p className="contact-text text-center" ><Link className='text-white' href={"mailto: reach@ivistaz.com"}>reach@ivistaz.com</Link></p>

                            <Container className="text-center pt-5 pb-5">
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


                    {/* <Col lg={6} className="d-flex justify-content-center py-5">
                        <Container className="iv-bg contact py-lg-0 py-4 mt-0">
                            <h1 className="contact-head pb-4">iVistaz Ecom Services Pvt Ltd</h1>
                            <p className="contact-text text-center">4th Floor, 16 & 16/1,</p>
                            <p className="contact-text text-center">Reliaable Phoenix Towers,</p>
                            <p className="contact-text text-center"> Museum Road,</p>
                            <p className="contact-text text-center"> Shanthala Nagar, Ashok Nagar</p>
                            <p className="contact-text text-center">Bengaluru, Karnataka 560025</p>
                            <p className="contact-text text-center">+91 80 41966600</p>
                            

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
                    </Col> */}
                </Row>
                <Row className='mb-5'>
                    {/* Google map */}
                    <Col className="d-flex justify-content-center py-4 mb-5 p-0">
                        <div className='map-container'>
                            <div className='p-3 text-white iv-bg shadow-3 rounded-top-4'>
                                <p className='fs-3'>Address</p>
                                <p className="">4th Floor, 16 & 16/1, Reliaable Phoenix Towers, Museum Road, Shanthala Nagar, Ashok Nagar, Bengaluru-560025</p>
                            </div>
                            <iframe
                                className="responsive-iframe"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.998156002647!2d77.60210301170989!3d12.971969487290625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f7d8ccc4207%3A0xbd78d1bf607434a!2siVistaz%20Ecom%20Services%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1718256858925!5m2!1sen!2sin"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </Col>
                </Row>
                <style jsx>{`
    .map-container {
        width: 1300px;
        height: 400px;
    }

    .responsive-iframe {
        width: 100%;
        height: 100%;
    }

    @media (max-width: 768px) {
        .map-container {
            width: 500px;
            height: 400px;
        }
       .responsive-iframe {
            width: 100%;
            height: 80%;
    }
    }
`}</style>

            </Container>
        </>
    )
}

export default ContactusContent
