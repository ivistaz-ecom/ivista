'use client'
import Link from 'next/link'
import React from 'react'
import { Col, Container } from 'react-bootstrap'
import ScrollAnimation from '../../SharedComponents/ScrollAnimationServices'
// import ScrollAnimation from '../../SharedComponents/ScrollAnimation'

const WebDesignAndDevelopmentContent = () => {
    return (
        <>
            <ScrollAnimation />

            <Container fluid className="mt-4 p-0">
                <article>
                    <div className='timeline1'>
                        <div className='position-relative'>
                            <div class="timeline-badge1"></div>
                            <Container className='w-80 ps-7'>
                                <p className="text-black para-text fw-semibold">
                                    If your website is not engaging, intuitive, and visually appealing, you&apos;re losing potential customers to competitors. That is why a professionally designed website is crucial to bring back visitors for meaningful engagement.
                                </p>

                                <p className="text-black para-text">
                                    Your brand&apos;s reputation hinges on your digital footprint. The website and mobile app serve as the primary showcases for your brand, products, expertise, and distinctiveness.
                                </p>

                                <p className="text-black para-text">
                                    With over 26 years of experience, we have crafted more than 150 websites for businesses spanning aviation, e-commerce, healthcare, home appliances, hospitality, NGOs, technology, real estate, and retail.
                                </p>

                                <p className="text-black para-text">
                                    We prioritize user-centricity in our web design and development process and delve into questions on behalf of your users: &quot;How easily can they access information?&quot;; and &quot;How many steps are required from discovery to enquiry?&quot; This approach embodies User Experience (UX) principles, encompassing design, interface, information architecture, navigation, and content.
                                </p>

                                <p className="text-black para-text">
                                    Whether you need a B2B website, an e-commerce platform, a compelling website for your NGO, or a mobile app, we tailor our designs to align with your digital marketing objectives while optimizing user experience.
                                </p>
                            </Container>
                        </div>

                        <div className='position-relative mt-3  px-0'>
                            <div class="timeline-badge1"></div>
                            <Container className='w-80 ps-7'>
                                <h1 className='fs-3 text-red fw-bold p-0'>
                                    Our expertise in web and mobile app design includes:
                                </h1>
                                <ul>
                                    <li className="text-black para-text mb-0">
                                        User Interface (UI) and User Experience (UX) design
                                    </li>
                                    <li className="text-black para-text mb-0">
                                        Information Architecture
                                    </li>
                                    <li className="text-black para-text mb-0">
                                        Illustrations and animations
                                    </li>
                                    <li className="text-black para-text mb-0">
                                        Dynamic and responsive designs
                                    </li>
                                    <li className="text-black para-text">
                                        Mobile responsiveness
                                    </li>
                                </ul>
                            </Container>
                        </div>

                        <div className='position-relative mt-3 px-0'>
                            <div class="timeline-badge1"></div>
                            <Container className='w-80 ps-7'>
                                <h1 className='fs-3 text-red fw-bold'>
                                    Technological Proficiency:
                                </h1>
                                <ul>
                                    <li className="text-black para-text mb-0">
                                        WordPress
                                    </li>

                                    <li className="text-black para-text mb-0">
                                        React
                                    </li>

                                    <li className="text-black para-text mb-0">
                                        Magento
                                    </li>

                                    <li className="text-black para-text mb-0">
                                        Spotify
                                    </li>

                                    <li className="text-black para-text">
                                        PHP
                                    </li>
                                </ul>
                            </Container>
                        </div>
                        <h1 className='para-text text-red fw-bold pb-5 mt-2 position-relative px-0'>
                            <div class="timeline-badge1"></div>
                            <Container className='w-80 ps-7'>
                                <Link href="/contact-us" className='red'>Contact us</Link> today to embark on your journey to digital success.
                            </Container>
                        </h1>
                    </div>
                </article>
            </Container>

        </>
    )
}

export default WebDesignAndDevelopmentContent