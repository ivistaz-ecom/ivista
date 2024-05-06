'use client'
import React from 'react'
import { Col, Container } from 'react-bootstrap'
import ScrollAnimation from '../../SharedComponents/ScrollAnimation'

const SocialMediaMarketingContent = () => {
    return (
        <>
            <ScrollAnimation />

            <Container fluid className="mt-4 p-0">
                <article>
                    <div className='timeline'>
                        <h1 className='fs-3 text-red fw-bold ps-lg-0 ps-5 px-0 position-relative'>
                            <div class="timeline-badge"></div>
                            <Container className='w-80 px-0'>
                                Social Media Marketing
                            </Container>
                        </h1>
                    </div>

                    <Col>
                        <Container className='w-80 px-0 ps-lg-0 ps-5'>
                            <p className="text-black para-text">
                                From targeting and re-targeting to leveraging look-alike and custom audiences, as well as diving into demographics, behaviors, attributes, and interests – the power of precise targeting on social media can be invaluable in helping businesses generate leads or sell online.
                            </p>

                            <p className="text-black para-text">
                                Leveraging social media marketing for driving website traffic, generating leads, or facilitating online sales goes beyond crafting compelling content or eye-catching visuals. Targeting, timing, ad formats, and bidding strategies must all come together in a well-thought-out plan. Only then can social media marketing truly fulfill its objectives and propel businesses towards success.
                            </p>

                            <p className="text-black para-text">
                                We understand the critical role that social media plays in helping you reach your goals, and we&apos;re here to guide your brand towards success in this dynamic arena. For businesses in both the B2B and B2C sectors, we will harness the intricacies of audience segmentation to ensure that your ad is seen by the right people through the right social media platforms like LinkedIn, Facebook, Instagram, and Twitter.
                            </p>


                        </Container>
                    </Col>

                    <Col className='position-relative'>
                        <div class="timeline-badge"></div>
                        <Container className='w-80 px-0 ps-lg-0 ps-5'>
                            <h1 className='fs-4 text-red fw-bold'>
                                Leads, online sales, enquiries, room bookings—what goals do you want to achieve with social media marketing?
                            </h1>

                        </Container>
                    </Col>
                    <Col className='position-relative mb-5'>
                        <div class="timeline-badge"></div>
                        <Container className='w-80 px-0 ps-lg-0 ps-5'>
                            <h1 className='fs-4 text-red fw-bold'>
                                Write to us at:
                            </h1>
                        </Container>
                    </Col>
                </article>
            </Container>
        </>
    )
}

export default SocialMediaMarketingContent