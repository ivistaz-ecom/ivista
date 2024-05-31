import React from 'react'
import { Container, Col } from 'react-bootstrap'
import ScrollAnimationIndustries from '../../SharedComponents/ScrollAnimationindustries';
import CaseStudiesCategoriesComponents from '../../PropsShared/CaseStudiesCategoriesComponents'
import Link from 'next/link'

const BeautyContent = () => {

    const categoryId = 12;

    return (
        <>

            <ScrollAnimationIndustries />

            <Container fluid className="bg-black p-0">
                <article>
                    <Col className='timeline3'>
                        <div className='position-relative'>
                            <div className='timeline-badge3 mt-4'></div>
                            <Container className="pt-4 w-80 pb-4 pt-4 ps-7" >
                                <p className="text-white para-text pe-lg-2 pe-3" >The beauty and wellness market has been growing at a rapid pace in India. The market in India<Link href="https://bwwellbeingworld.businessworld.in/article/How-Beauty-Wellness-Sector-Emerge-As-A-Thriving-Sector-In-India/18-10-2021-408985/" target='_blank' className='hyper-link-red cursor-pointer'> was valued at INR 901.07 Bn in 2018 and is forecasted to reach INR 2,463.49 Bn by the year 2024</Link>.</p>
                                <p className="text-white para-text pe-lg-2 pe-3">What is notable is that the beauty and wellness market today straddles the affluent as well as the middle class, the female as well as the male sexes, the synthetic brands as well as the organic brands. The sheer number of new entrants, especially in the ‘natural’, ‘vegan’ ‘safe’ and ‘sustainable’ categories is testimony to the exponential growth of the industry.</p>
                            </Container>

                        </div>


                        <div className='position-relative'>
                            <div className='timeline-badge3 mt-5'></div>
                            <Container className="iv-bg w-80 banner pb-5 pt-5 pe-5 ps-7">
                                <p className="fw-bold text-white fs-3">To help your brand to stand out in a highly crowded market, we will:</p>
                                <ul>
                                    <li className='industry-bullet'>
                                        <p className="text-white para-text">Develop and implement robust<span className='fw-bold'> search strategies</span> to drive your primary target audience to your brand store and marketplaces.</p>
                                    </li>
                                    <li className='industry-bullet'>
                                        <p className="text-white para-text">Create a robust<span className='fw-bold'> performance-based e-commerce model</span> with a monthly/quarterly goal of improving and sustaining your revenues.</p>
                                    </li>
                                    <li className='industry-bullet'>
                                        <p className="text-white para-text">Create a robust e-commerce channel that will not only improve revenues on your e-store and marketplaces but<span className='fw-bold'>  also drive customers to your offline stores</span>.</p>
                                    </li>
                                </ul>
                                <Container className="text-center">
                                    <Col className='d-flex flex-column align-items-center'>
                                        <Link className="btn-14 z-0" href="/contact-us">Contact us</Link>
                                    </Col>
                                </Container>
                            </Container>
                        </div>
                        <Container className="mt-5 mb-5 w-80 ps-7">
                            <p className="fs-2 text-white">Here’s how we helped beauty and wellness brands secure a winning edge:</p>
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

export default BeautyContent
