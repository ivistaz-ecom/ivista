import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Container, Row, Image } from 'react-bootstrap';
import ConfigData from '../../config';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const CaseStudiesFetchData = () => {
    return (
        <Container className="w-80 custom-container">
            <h1 className="fs-80 fw-bold text-white">CASE STUDIES</h1>
            <h3 className="fs-19 text-white fw-semibold poppins">Performance you'll love. Can we replicate it for you?</h3>
            <Row className='py-lg-5'>
                {/* Column 1*/}
                <Col md={4} className="d-flex py-2">
                    <Link href={'/case-studies/global-tech-company-seo-success'} target='_blank' className='text-line'>
                        <div className="card text-white bg-white mb-3 rounded-5 w-100 h-100 d-flex flex-column">
                            <div className="card-body d-flex flex-column justify-content-between flex-grow-1">
                                <div className='card-title d-flex justify-content-between align-items-center'>
                                    <div>
                                        <p className="fs-23 mb-0 red para-text fw-bold ps-3">201%</p>
                                    </div>
                                    <div className='d-flex'>
                                        <Image src="/images/search.svg" className='w-50 ms-auto' width={100} height={100} alt='' />
                                    </div>
                                </div>
                                <div className='d-flex flex-column flex-grow-1'>
                                    <div>
                                        <p className="card-text text-dark fs-4 p-3">Increase in Ranking Keywords and 275+ on Page One: SEO Victory for a Global Financial Services Giant</p>
                                    </div>
                                </div>
                                <div className='py-5 pb-0'>
                                    <button type="button" className="btn btn-16 z-0 rounded-4">Read More</button>
                                </div>
                            </div>
                        </div>
                    </Link>
                </Col>

                {/* Column 2 */}
                <Col md={4} className="d-flex py-2">
                    <Link href={'case-studies/leading-jewellery-and-accessories-brand-case-studystrategic-insights'} target='_blank' className='text-line'>
                        <div className="card text-white bg-white mb-3 rounded-5 w-100 h-100 d-flex flex-column">
                            <div className="card-body d-flex flex-column justify-content-between flex-grow-1">
                                <div className='card-title d-flex justify-content-between align-items-center'>
                                    <div>
                                        <p className="fs-23 mb-0 red para-text fw-bold ps-3">2x</p>
                                    </div>
                                    <div className='pe-0 d-flex'>
                                        <Image src="/images/shoping.svg" className='w-50 ms-auto' width={100} height={100} alt='' />
                                    </div>
                                </div>
                                <div className='d-flex flex-column flex-grow-1'>
                                    <div>
                                        <p className="card-text text-dark fs-4 p-3">Revenue Growth Every 3 Years for Leading Jewelry Brand: Strategic Success Story</p>
                                    </div>
                                </div>
                                <div className='py-5 pb-0'>
                                    <button type="button" className="btn btn-16 z-0 rounded-4">Read More</button>
                                </div>
                            </div>
                        </div>
                    </Link>
                </Col>

                {/* Column 3 */}
                <Col md={4} className="d-flex py-2">
                    <Link href={'/case-studies/luxury-automobile-lead-generation-case-study-optimising-dealerships'} target='_blank' className='text-line'>
                        <div className="card text-white bg-white mb-3 rounded-5 w-100 h-100 d-flex flex-column">
                            <div className="card-body d-flex flex-column justify-content-between flex-grow-1">
                                <div className='card-title d-flex justify-content-between align-items-center'>
                                    <div>
                                        <p className="fs-23 mb-0 red para-text fw-bold ps-3">1 <span className='fs-3 red'>in 14</span></p>
                                    </div>
                                    <div className='d-flex'>
                                        <Image src="/images/magnet.svg" className='w-50 ms-auto' width={100} height={100} alt='' />
                                    </div>
                                </div>
                                <div className='d-flex flex-column flex-grow-1'>
                                    <div>
                                        <p className="card-text text-dark fs-4 p-3">Lead Conversion and Cost per Lead Reduced to Rs.1,292: Luxury Automobile Dealership Optimization</p>
                                    </div>
                                </div>
                                <div className='py-5 pb-0'>
                                    <button type="button" className="btn btn-16 z-0 rounded-4">Read More</button>
                                </div>
                            </div>
                        </div>
                    </Link>
                </Col>
            </Row>

            <Row className=''>
                {/* Column 4*/}
                <Col md={4} className="d-flex py-2">
                    <Link href={'case-studies/top-beauty-brand-case-study-optimising-ecommerce-conversion-and-mobile-engagement'} target='_blank' className='text-line'>
                        <div className="card text-white bg-white mb-3 rounded-5 w-100 h-100 d-flex flex-column">
                            <div className="card-body d-flex flex-column justify-content-between flex-grow-1">
                                <div className='card-title d-flex justify-content-between align-items-center'>
                                    <div>
                                        <p className="fs-23 mb-0 red para-text fw-bold ps-3">2.8%</p>
                                    </div>
                                    <div className='d-flex'>
                                        <Image src="/images/message.svg" className='w-50 ms-auto' width={100} height={100} alt='' />
                                    </div>
                                </div>
                                <div className='d-flex flex-column flex-grow-1'>
                                    <div>
                                        <p className="card-text text-dark fs-4 p-3">Conversion Rate from 0.8% in 3 Months: E-commerce and Mobile Engagement Success for a Top Beauty Brand</p>
                                    </div>
                                </div>
                                <div className='py-5 pb-0'>
                                    <button type="button" className="btn btn-16 z-0 rounded-4">Read More</button>
                                </div>
                            </div>
                        </div>
                    </Link>
                </Col>

                {/* Column 5 */}
                <Col md={4} className="d-flex py-2">
                    <Link href={'/case-studies/b2b-email-marketing-case-study-generating-qualified-leads-with-strategic-campaigns'} target='_blank' className='text-line'>
                        <div className="card text-white bg-white mb-3 rounded-5 w-100 h-100 d-flex flex-column">
                            <div className="card-body d-flex flex-column justify-content-between flex-grow-1">
                                <div className='card-title d-flex justify-content-between align-items-center'>
                                    <div>
                                        <p className="fs-23 mb-0 red para-text fw-bold ps-3">10.8%</p>
                                    </div>
                                    <div className='d-flex'>
                                        <Image src="/images/message.svg" className='w-50 ms-auto' width={100} height={100} alt='' />
                                    </div>
                                </div>
                                <div className='d-flex flex-column flex-grow-1'>
                                    <div>
                                        <p className="card-text text-dark fs-4 p-3">Conversion Rate from 367 Organizations: B2B Email Marketing Success</p>
                                    </div>
                                </div>
                                <div className='py-5 pb-0'>
                                    <button type="button" className="btn btn-16 z-0 rounded-4">Read More</button>
                                </div>
                            </div>
                        </div>
                    </Link>
                </Col>

                {/* Column 6 */}
                <Col md={4} className="d-flex py-2">
                    <Link href={'/case-studies/multinational-retail-corporation-case-study-enhancing-online-presence-and-traffic-for-ngos'} target='_blank' className='text-line'>
                        <div className="card text-white bg-white mb-3 rounded-5 w-100 h-100 d-flex flex-column">
                            <div className="card-body d-flex flex-column justify-content-between flex-grow-1">
                                <div className='card-title d-flex justify-content-between align-items-center'>
                                    <div>
                                        <p className="fs-23 mb-0 red para-text fw-bold ps-3">93,345</p>
                                    </div>
                                    <div className='d-flex'>
                                        <Image src="/images/scale.svg" className='w-50 ms-auto' width={100} height={100} alt='' />
                                    </div>
                                </div>
                                <div className='d-flex flex-column flex-grow-1'>
                                    <div>
                                        <p className="card-text text-dark fs-4 p-3">Unique Leads in 12 Months: Online Presence and Traffic Boost for NGOs by a Multinational Retail Corporation</p>
                                    </div>
                                </div>
                                <div className='py-5 pb-0'>
                                    <button type="button" className="btn btn-16 z-0 rounded-4">Read More</button>
                                </div>
                            </div>
                        </div>
                    </Link>
                </Col>
            </Row>

            <Row className='py-lg-5 pb-3'>
                {/* Column 7*/}
                <Col md={4} className="d-flex py-2">
                    <Link href={'/case-studies/premier-hotel-chain-case-studyelevating-direct-online-bookings-and-global-reach-with-digital-strategy'} target='_blank' className='text-line'>
                        <div className="card text-white bg-white mb-3 rounded-5 w-100 h-100 d-flex flex-column">
                            <div className="card-body d-flex flex-column justify-content-between flex-grow-1">
                                <div className='card-title d-flex justify-content-between align-items-center'>
                                    <div>
                                        <p className="fs-23 mb-0 red para-text fw-bold ps-3">7%</p>
                                    </div>
                                    <div className='d-flex'>
                                        <Image src="/images/shoping.svg" className='w-50 ms-auto' width={100} height={100} alt='' />
                                    </div>
                                </div>
                                <div className='d-flex flex-column flex-grow-1'>
                                    <div>
                                        <p className="card-text text-dark fs-4 p-3">Increase in Direct Online Bookings and 30% Higher Revenue: Digital Strategy Success for a Premier Hotel Chain</p>
                                    </div>
                                </div>
                                <div className='py-5 pb-0'>
                                    <button type="button" className="btn btn-16 z-0 rounded-4">Read More</button>
                                </div>
                            </div>
                        </div>
                    </Link>
                </Col>

                {/* Column 8 */}
                <Col md={4} className="d-flex py-2">
                    <Link href={'/case-studies/top-hotel-chain-case-study-boosting-direct-online-bookings-and-revenue-with-strategic-digital-marketing'} target='_blank' className='text-line'>
                        <div className="card text-white bg-white mb-3 rounded-5 w-100 h-100 d-flex flex-column">
                            <div className="card-body d-flex flex-column justify-content-between flex-grow-1">
                                <div className='card-title d-flex justify-content-between align-items-center'>
                                    <div>
                                        <p className="fs-23 mb-0 red para-text fw-bold ps-3">14%</p>
                                    </div>
                                    <div className='d-flex'>
                                        <Image src="/images/message.svg" className='w-50 ms-auto' width={100} height={100} alt='' />
                                    </div>
                                </div>
                                <div className='d-flex flex-column flex-grow-1'>
                                    <div>
                                        <p className="card-text text-dark fs-4 p-3">Direct Online Bookings and Doubled Average Rate of Return: Strategic Digital Marketing Success for Top Hotel Chain</p>
                                    </div>
                                </div>
                                <div className='py-5 pb-0'>
                                    <button type="button" className="btn btn-16 z-0 rounded-4">Read More</button>
                                </div>
                            </div>
                        </div>
                    </Link>
                </Col>

                {/* Column 9 */}
                <Col md={4} className="d-flex py-2">
                    <Link href={'/case-studies/digital-marketing-case-study-increasing-website-traffic-and-online-revenue-for-a-major-hotel-chain'} target='_blank' className='text-line'>
                        <div className="card text-white bg-white mb-3 rounded-5 w-100 h-100 d-flex flex-column">
                            <div className="card-body d-flex flex-column justify-content-between flex-grow-1">
                                <div className='card-title d-flex justify-content-between align-items-center'>
                                    <div>
                                        <p className="fs-23 mb-0 red para-text fw-bold">8%</p>
                                    </div>
                                    <div className='d-flex'>
                                        <Image src="/images/scale.svg" className='w-50 ms-auto' width={100} height={100} alt='' />
                                    </div>
                                </div>
                                <div className='d-flex flex-column flex-grow-1'>
                                    <div>
                                        <p className="card-text text-dark fs-4 p-3">Direct Online Bookings and 32% Boost in Wedding and MIC Leads: Hotel Chain Digital Marketing Success</p>
                                    </div>
                                </div>
                                <div className='py-5 pb-0'>
                                    <button type="button" className="btn btn-16 z-0 rounded-4">Read More</button>
                                </div>
                            </div>
                        </div>
                    </Link>
                </Col>
            </Row>



            {/* <Col className='text-center'>
                {data.length > visibleItems && (
                    <button type="button" className="btn btn-15 my-5" onClick={handleLoadMore}>Load More</button>
                )}
            </Col> */}
        </Container>
    );
};

export default CaseStudiesFetchData;
