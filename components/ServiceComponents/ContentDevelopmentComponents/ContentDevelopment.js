'use client'
import React from 'react'
import { Col, Container } from 'react-bootstrap'
import ScrollAnimationService from '../../SharedComponents/ScrollAnimationServices'
import Link from 'next/link'


const ContentDevelopment = () => {
    return (
        <>
            <ScrollAnimationService />
            <Container fluid className="mt-4 p-0">
                <article>
                    <div className='timeline1'>
                        {/* <h1 className='fs-3 text-red fw-bold ps-7 position-relative'>
                            <div class="timeline-badge1"></div>
                            <Container className='w-80'>
                                Content Development
                            </Container>
                        </h1> */}

                        <Col className='position-relative'>
                            <div class="timeline-badge1"></div>
                            <Container className='w-80 ps-7 pe-lg-0 pe-3'>
                                <p className="text-black para-text fw-semibold">
                                    “Content builds relationships. Relationships are built on trust. Trust drives revenue.” – Andrew Davis, Bestselling Author and Keynote Speaker
                                </p>

                                <p className="text-black para-text">
                                    We understand the importance of high-quality web content and craft SEO-friendly  content for B2C and B2B content marketing across sectors. We work closely with our SEO teams to ensure that the right mix of keywords and phrases is infused organically in your content to power your page to the top of Search Engine Ranking Pages (SERP).
                                </p>

                                <p className="text-black para-text">
                                    Our approach extends beyond mere article writing services; we strategically plan the content mix to cater to every stage of the buyer journey—top-of-the-funnel, middle-of-the-funnel, and bottom-of-the-funnel. Through SEO content writing, we will craft content that will resonate with your audience at each touchpoint, bolster user engagement, foster repeat visitors, and drive traffic towards your conversion pages.
                                </p>


                            </Container>
                        </Col>

                        <Col className='position-relative'>
                            <div class="timeline-badge1"></div>
                            <Container className='w-80 ps-7 position-relative'>
                                <h1 className='fs-3 text-red fw-bold'>
                                    Our content development expertise covers the following:
                                </h1>
                            </Container>
                        </Col>

                        <Col>
                            <Container className='w-80 ps-7 position-relative pe-lg-0 pe-3'>
                                <p className='text-red fw-bold para-text '>
                                    Long-form content:
                                </p>
                                <p className="text-black para-text">
                                    <ul>
                                        <li>Blogs</li>
                                        <li>Articles</li>
                                        <li>White papers</li>
                                        <li>eBooks</li>
                                        <li>POVs</li>
                                        <li>Case studies</li>
                                        <li>Product-solution pages</li>
                                        <li>Campaign landing pages</li>
                                        <li>Newsletter content</li>
                                        <li>Video content</li>
                                    </ul>
                                </p>

                                <p className='text-red fw-bold para-text'>
                                    Short content:
                                </p>

                                <p className="text-black para-text">
                                    <ul>
                                        <li>A+ content</li>
                                        <li>e-commerce content</li>
                                        <li>Product descriptions</li>
                                        <li>Quora content</li>
                                        <li>Social media content including short videos</li>
                                        <li>Infographic development</li>
                                        <li>Content for email marketing</li>
                                        <li>Content for paid marketing for search and social</li>
                                    </ul>
                                </p>

                                <p className='text-red fw-bold para-text'>
                                    Industry-specific content:
                                </p>

                                <p className="text-black para-text">
                                    We have helped businesses across a diverse range of industries, such as hi-tech, hospitality, not-for-profits, healthcare, real estate, aviation, home and kitchen appliances, and retail sectors, with their unique content needs.
                                </p>
                            </Container>
                        </Col>

                        <Col className='position-relative mt-2 pb-5'>
                            <div class="timeline-badge1"></div>
                            <Container className='w-80 ps-7 '>
                                <p className='text-red fw-bold para-text'>
                                    What is your content requirement? <Link href="/contact-us" className='red'>Contact us</Link> today.
                                </p>
                            </Container>
                        </Col>
                    </div>
                </article>
            </Container>
        </>
    )
}

export default ContentDevelopment
