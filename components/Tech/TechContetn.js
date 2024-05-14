import React from 'react'
import ScrollAnimation from '../SharedComponents/ScrollAnimationServices';
import { Col, Container } from 'react-bootstrap';
import CaseStudiesCategoriesComponents from '../PropsShared/CaseStudiesCategoriesComponents';
import Link from 'next/link';

const TechContetn = () => {

    const categoryId = 17;


    return (
        <>

            <ScrollAnimation />
            <Container fluid className='bg-black p-0'>
                <article>
                    <Col className='timeline1'>
                        <div className='position-relative'>
                            <div className='timeline-badge1 mt-4'></div>
                            <Container className=" w-80 pb-4 pt-4  ps-7" >
                                <p className="text-white para-text">The evolving digital trends and technologies are causing a tectonic shift in digital marketing. In this scenario, iVistaz will help you keep pace and have a firm grasp on the evolving digital ecosystem to give you measurable ROI for your digital spending. Our services include:</p>
                            </Container>
                        </div>

                        <div className='position-relative '>
                            <div className='timeline-badge1 mt-5'></div>
                            <Container className="iv-bg w-80 banner pt-5 pe-5 pb-5 ps-7">
                                <ul>
                                    <li className='industry-bullet'>
                                        <p className="text-white para-text">Assess the current or redefine<span className='fw-bold'> positioning, messaging and narrative</span> for value creation.</p>
                                    </li>
                                    <li className='industry-bullet'>
                                        <p className="text-white para-text">Create pull for your website and offerings with<span className='fw-bold'> engaging content and SEO</span>.</p>
                                    </li>
                                    <li className='industry-bullet'>
                                        <p className="text-white para-text">Generate<span className='fw-bold'> Marketing Qualified Leads</span> (MQLs) with email marketing, SEM and SMM.</p>
                                    </li>
                                    <li className='industry-bullet'>
                                        <p className="text-white para-text"><span className='fw-bold'>Enhance the web experience</span> for your customers with engaging UX/UI developed on a robust tech platform.</p>
                                    </li>
                                </ul>
                                <Container className="">
                                    <Col className='d-flex flex-column align-items-center mt-3'>
                                        <Link className="btn-14" href="/contact-us">Contact us</Link>
                                    </Col>
                                </Container>
                            </Container>
                        </div>

                        <Container className="mt-5 mb-5 w-80 ps-7">
                            <p className="fs-2 text-white">Here are some instances where our expertise and cutting-edge solutions have propelled Tech/IT companies to success:</p>
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

export default TechContetn
