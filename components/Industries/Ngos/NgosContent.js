import React from 'react'
import { Col, Container } from 'react-bootstrap';
import ScrollAnimationIndustries from '../../SharedComponents/ScrollAnimationindustries';
import CaseStudiesCategoriesComponents from '../../PropsShared/CaseStudiesCategoriesComponents';
import Link from 'next/link';

const NgosContent = () => {

    const categoryId = 16;

    return (
        <>
            <ScrollAnimationIndustries />
            <Container fluid className='bg-black p-0'>
                <article>
                    <Col className='timeline3 pt-1'>
                        <div className='position-relative '>
                            <div className='timeline-badge3 mt-4'></div>
                            <Container className="pt-4 w-80 pb-4 ps-7" >

                                <p className="text-white para-text pe-lg-2 pe-3">As social developments produce both new possibilities and fresh challenges, active attempts to establish a better future for monitoring, assessment, and learning will become increasingly more crucial in the coming years. These changes in the philanthropic landscape—and the world around it—are profoundly altering the backdrop for decision-making inside social sector organisations as well as the larger practise of monitoring, evaluation, and learning.</p>
                            </Container>
                        </div>

                        <div className='position-relative '>
                            <div className='timeline-badge3 mt-5'></div>
                            <Container className="iv-bg w-80 banner pt-5 pb-5 pe-5 ps-7">
                                <p className="fw-bold text-white fs-3">Our services will help your audience understand your niche and help create awareness it by:</p>
                                <p className="text-white para-text">Providing end-to-end services that will bring in more attention from the identified target group.</p>
                                <p className="text-white para-text">For value creation, evaluate or reframe the current positioning, message, and narrative.</p>
                                <p className="text-white para-text">With captivating content and SEO, generate traction for your website and offerings.</p>
                                <p className="text-white para-text">Using email marketing, generate Marketing Qualified Leads (MQLs).</p>
                                <Container className="text-center">
                                    <Col className='d-flex flex-column align-items-center'>
                                        <Link className="btn-14 z-0" href="/contact-us">Contact us</Link>
                                    </Col>
                                </Container>
                            </Container>
                        </div>

                        <Container className="mt-5 mb-5 w-80 ps-7">
                            <p className="fs-2 text-white">Explore how we have partnered with organizations to create meaningful change, amplify their reach, and drive impactful outcomes:</p>
                        </Container>
                    </Col>

                    {/* case studies Props */}
                    <Container className="w-80 pb-5">
                        <CaseStudiesCategoriesComponents categoryId={categoryId} />
                    </Container>
                </article>
            </Container>
        </>
    )
}

export default NgosContent
