import Link from 'next/link'
import React from 'react'
import { Col, Container } from 'react-bootstrap'
import CaseStudiesCategoriesComponents from '../PropsShared/CaseStudiesCategoriesComponents'
import ScrollAnimation from '../SharedComponents/ScrollAnimationServices'

const AutoMobileContent = () => {

    const categoryId = 10;

    return (
        <>
            <ScrollAnimation />
            <Container fluid className="p-0">
                <Container fluid className="bg-black p-0">
                    <article>
                        <Col className='timeline1'>
                            <div className='position-relative'>
                                <div className='timeline-badge1'></div>
                                <Container className="pt-4 w-80 pb-4 ps-7" >
                                    <p className="text-white para-text"><Link href='/pdf/e6b37619-1d69-4cad-b1ed-49d31f8e3719.pdf' target='_blank' className='hyper-link-red cursor-pointer'>According to the Ministry of Heavy Industries</Link>, Government of India, the automotive industry is likely to see significant transformations at a global level in the next ten years. Among the notable changes will be the shift of growth in demand for automobiles from developed nations to developing nations (mainly BRICS).</p>
                                    <p className="text-white para-text">India aims to double its auto industry size to Rs. 15 lakh crores by end of the year 2024 (Source: Ministry of Heavy Industries).</p>
                                </Container>
                            </div>

                            <div className='position-relative'>
                                <div className='timeline-badge1'></div>
                                <Container className="iv-bg w-80 banner pt-5 pb-5 pe-5 ps-7 ">
                                    <p className="fw-bold text-white fs-3">
                                        Your focus would be on strengthening your market share in India by growing your sales and dealer network. iVistaz can support you in this journey and help
                                    </p>
                                    <ul>
                                        <li className='industry-bullet'>
                                            <p className="text-white para-text">
                                                Your brand to<span className='fw-bold'> increase online enquiries, bookings and sales conversion ratios</span>.
                                            </p>
                                        </li>
                                        <li className='industry-bullet'>
                                            <p className="text-white para-text"> To increase your<span className='fw-bold'>  qualified leads and sales</span> conversion ratios for you directly and for your dealers.
                                            </p>
                                        </li>
                                    </ul>
                                    <Container className="">
                                        <Col className='d-flex flex-column align-items-center'>
                                            <Link className="btn-14 z-0" href="/contact-us">Contact us</Link>
                                        </Col>
                                    </Container>
                                </Container>
                            </div>
                            <Container className="mt-5 mb-5 w-80 ps-7">
                                <p className="fs-2 text-white">Here’s how we have helped brands win over the dynamic and highly competitive industry:</p>
                            </Container>
                        </Col>


                        {/* case studies Props */}
                        <Container className="w-80 pb-5">
                            <CaseStudiesCategoriesComponents categoryId={categoryId} />
                        </Container>
                    </article>
                </Container >

            </Container>
        </>
    )
}

export default AutoMobileContent
