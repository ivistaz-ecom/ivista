'use client'
import React from 'react'
import { Col, Container } from 'react-bootstrap'
import ScrollAnimationService from '../../SharedComponents/ScrollAnimationServices'


const SocialMediaOrganicComponents = () => {
    return (
        <>
            <ScrollAnimationService />
            <Container className="mt-4 p-0" fluid>
                <article>
                    <div className='timeline1'>
                        {/* <div className='position-relative '>
                            <div class="timeline-badge1"></div>
                            <Container className='w-80 px-0'>
                                <h1 className='fs-3 text-red fw-bold ps-7'>
                                    Organic Social Media
                                </h1>
                            </Container>
                        </div> */}
                        <Col className='position-relative'>
                            <div class="timeline-badge1"></div>
                            <Container className='w-80 ps-7 pe-lg-0 pe-3    '>
                                <p className="text-black para-text fw-semibold">
                                    “Online is old news. Online in social media is today’s news... Social media is not a subset of the internet. Social media is the internet.” Sean Case, Nielsen Social President
                                </p>

                                <p className="text-black para-text fw-semibold">
                                    Organic Social Media Marketing helps to humanise your brand, transforming it from a faceless entity into a relatable personality. By tapping into the emotional pulse of your audience, we will help your business cultivate loyalty that extends beyond transactional interactions. This also lays the groundwork for enduring brand advocacy and word-of-mouth promotion and helps to develop brand credibility and authority in an era where trust reigns supreme.
                                </p>

                                <p className="text-black para-text fw-semibold">
                                    Developing your brand's organic presence on social media demands a well-defined strategy that evolves and matures with time. As your digital marketing partner, we will provide comprehensive Social Media Management services, crafting compelling content that sparks authentic interactions among your audience. Towards this, we will curate a meticulously designed content calendar that will be a fine mosaic of your strengths, industry expertise, and thought leadership.
                                </p>

                                <p className="text-black para-text">
                                    Our approach to Social Media Management will be directly linked to measurable metrics such as engagement and follower growth. This will provide you with invaluable insights into the effectiveness of your social media marketing endeavors. As a leading social media marketing agency in Bangalore, we focus on these key performance indicators, ensuring you gain a comprehensive understanding of how your brand resonates with your audience and the impact of your online presence.
                                </p>
                            </Container>
                        </Col>

                        <div className='position-relative'>
                            <div className='timeline-badge1'></div>
                            <Container className='w-80 ps-7 mb-5'>
                                <h1 className='fs-3 text-red fw-bold'>
                                    How can we help you with your organic social media?
                                </h1>
                            </Container>
                        </div>
                    </div>
                </article>
            </Container>
        </>
    )
}

export default SocialMediaOrganicComponents