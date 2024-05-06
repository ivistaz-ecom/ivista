'use client'
import React from 'react'
import { Col, Container } from 'react-bootstrap'
import ScrollAnimation from '../../SharedComponents/ScrollAnimation'

const SocialMediaOrganicComponents = () => {
    return (
        <>
            <ScrollAnimation />
            <Container className="mt-4 p-0" fluid>
                <div className='timeline'>
                    <h1 className='fs-3 text-red fw-bold ps-lg-0 ps-5 px-0 position-relative'>
                        <div class="timeline-badge"></div>
                        <Container className='w-80 px-0'>
                            Organic Social Media
                        </Container>
                    </h1>
                </div>
                <Col>
                    <Container className='w-80 px-0 ps-lg-0 ps-5 px-0'>
                        <p className="text-black para-text fw-semibold">
                            “Online is old news. Online in social media is today’s news... Social media is not a subset of the internet. Social media is the internet.” Sean Case, Nielsen Social President
                        </p>

                        <p className="text-black para-text">
                            Organic social media marketing helps to humanize your brand, transforming it from a faceless entity into a relatable personality. By tapping into the emotional pulse of your audience, we will help your business cultivate loyalty that extends beyond transactional interactions. This also lays the groundwork for enduring brand advocacy and word-of-mouth promotion and helps to develop brand credibility and authority in an era where trust reigns supreme.
                        </p>

                        <p className="text-black para-text">
                            Developing your brand&apos;s organic presence on social media demands a well-defined strategy that evolves and matures with time. As your digital marketing partner, we will craft compelling content that sparks authentic interactions among your audience. Towards this, we will curate a meticulously designed content calendar that will be a fine mosaic of your strengths, industry expertise, and thought leadership.
                        </p>

                        <p className="text-black para-text">
                            Our approach to organic social media strategy will be directly linked to measurable metrics such as engagement and follower growth. This will provide you with invaluable insights into the effectiveness of your social media marketing endeavors. With a focus on these key performance indicators, you&apos;ll gain a comprehensive understanding of how your brand resonates with your audience and the impact of your online presence.
                        </p>
                    </Container>
                </Col>

                <Col className='position-relative mb-5'>
                    <div class="timeline-badge"></div>
                    <Container className='w-80 px-0 ps-lg-0 ps-5 px-0'>
                        <h1 className='fs-3 text-red fw-bold'>
                            How can we help you with your organic social media?
                        </h1>
                    </Container>
                </Col>
            </Container>
        </>
    )
}

export default SocialMediaOrganicComponents