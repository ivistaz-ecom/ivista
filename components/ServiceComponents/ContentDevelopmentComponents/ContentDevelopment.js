'use client'
import React from 'react'
import { Col, Container } from 'react-bootstrap'
import ScrollAnimation from '../../SharedComponents/ScrollAnimation'

const ContentDevelopment = () => {
    return (
        <>
            <ScrollAnimation />
            <Container fluid className="mt-4 p-0">
                <article>
                    <div className='timeline'>
                        <h1 className='fs-3 text-red fw-bold ps-lg-0 ps-5 px-0 position-relative'>
                            <div class="timeline-badge"></div>
                            <Container className='w-80 px-0'>
                                Content Development
                            </Container>
                        </h1>
                    </div>

                    <Col className='position-relative'>
                        <Container className='w-80 px-0 ps-lg-0 ps-5'>
                            <p className="text-black para-text fw-semibold">
                                “Content builds relationships. Relationships are built on trust. Trust drives revenue.” – Andrew Davis, Bestselling Author and Keynote Speaker
                            </p>

                            <p className="text-black para-text">
                                We understand the importance of high-quality web content and craft SEO-friendly content for organizations across the B2B and B2C sectors. We work closely with our SEO teams to ensure that the right mix of keywords and phrases is infused organically in your content to power your page to the top of Search Engine Ranking Pages (SERP).
                            </p>

                            <p className="text-black para-text">
                                Our approach extends beyond mere content creation; we strategically plan the content mix to cater to every stage of the buyer journey—top-of-the-funnel, middle-of-the-funnel, and bottom-of-the-funnel. We will craft content that will resonate with your audience at each touchpoint, bolster user engagement, foster repeat visitors, and drive traffic towards your conversion pages.
                            </p>


                        </Container>
                    </Col>

                    <Col className='position-relative'>
                        <div class="timeline-badge"></div>
                        <Container className='w-80 px-0 ps-lg-0 ps-5 position-relative'>
                            <h1 className='fs-3 text-red fw-bold'>
                                Our content development expertise covers the following:
                            </h1>
                        </Container>
                    </Col>

                    <Col>
                        <Container className='w-80 px-0 ps-lg-0 ps-5 position-relative'>
                            <p className='text-red fw-bold para-text'>
                                Long-form content:
                            </p>
                            <p className="text-black para-text">
                                Blogs. Articles. White papers. eBooks. POVs. Case studies. Product-solution pages. Campaign landing pages. Newsletter content. Video content.
                            </p>

                            <p className='text-red fw-bold para-text'>
                                Short content:
                            </p>

                            <p className="text-black para-text">
                                A+ content. e-commerce content and product descriptions. Quora content. Social media content, including short videos. Infographic development. Content for email marketing. Content for paid marketing for search and social.
                            </p>

                            <p className='text-red fw-bold para-text'>
                                Industries:
                            </p>

                            <p className="text-black para-text">
                                We have helped businesses across a diverse range of industries, such as hi-tech, hospitality, not-for-profits, healthcare, real estate, aviation, home and kitchen appliances, and retail sectors, with their unique content needs.
                            </p>
                        </Container>
                    </Col>

                    <Col className='position-relative pb-5'>
                        <div class="timeline-badge"></div>
                        <Container className='w-80 px-0 ps-lg-0 ps-5 pt-2'>
                            <p className='text-red fw-bold para-text'>
                                What is your content requirement today?
                                Write to us at:
                            </p>
                        </Container>
                    </Col>
                </article>
            </Container>
        </>
    )
}

export default ContentDevelopment
