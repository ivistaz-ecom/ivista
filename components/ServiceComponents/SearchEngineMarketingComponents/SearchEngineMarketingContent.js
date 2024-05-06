'use client'
import React from 'react'
import { Col, Container } from 'react-bootstrap'
import ScrollAnimation from '../../SharedComponents/ScrollAnimation'

const SearchEngineMarketingContent = () => {
    return (
        <>
            <ScrollAnimation />
            <Container className="mt-4 p-0" fluid>
                <article>
                    <div className='timeline'>
                        <h1 className='fs-3 text-red fw-bold ps-lg-0 ps-5 px-0 position-relative'>
                            <div class="timeline-badge"></div>
                            <Container className='w-80 px-0'>
                                Search Engine Marketing
                            </Container>
                        </h1>
                    </div>
                    <Col>
                        <Container className='w-80 px-0 ps-lg-0 ps-5 px-0'>
                            <p className="text-black para-text fw-semibold">
                                Digital journeys and buying decisions are unpredictable, impulsive, and fragmented. Buying decisions take place in micro-moments.
                            </p>
                            <p className="text-black para-text fw-semibold">
                                Customers are continuously online and on the move, responding to stimuli and searching online. <br />
                                Are you there, or will you be missed?
                            </p>
                            <p className="text-black para-text fw-semibold">
                                Buyers are continuously tapping, scrolling, and clicking. <br />
                                Will you be noticed or passed over?
                            </p>
                            <p className="text-black para-text">
                                Digital journeys and buying decisions are unpredictable, impulsive, and fragmented. Buying decisions take place in micro-moments.
                            </p>

                            <p className="text-black para-text">
                                When customers leave footprints online about what they are looking for, search engine marketing (SEM) becomes essential. It helps businesses to showcase the right product or solution to the right target audience at the right time. With expert pricing, bidding, and targeting strategies, we can help your product or service ad be placed at the top of Search Engine Results Pages (SERP).
                            </p>

                            <p className="text-black para-text">
                                Bidding and competition on top search engines like Google, Bing, and Yahoo! are intense. Imagine thousands of brands vying for the same space to get the attention and eyeballs of the same audience! To get top placements for your ad on the Search Engine Results Page (SERP), you will need an expert partner to craft your message, include the right keywords, exclude negative words, and deploy the right bidding strategy.
                            </p>

                            <p className="text-black para-text">
                                Depending on your needs, we will recommend search ads, display ads, video ads, shopping ads, and discovery ads to drive traffic to your web conversion pages. While helping you with online leads, sales, or bookings, our focus will also be to optimize your Cost Per Lead (CPL).
                            </p>


                        </Container>
                    </Col>

                    <div className='position-relative mb-5 ps-lg-0 ps-5 px-0'>
                        <div class="timeline-badge"></div>
                        <Container className='w-80 p-0'>
                            <h1 className='fs-3 text-red fw-bold'>
                                Need help with your Search Engine Marketing?
                            </h1>
                            <h1 className='fs-3 text-red fw-bold'>
                                Let us know your requirements.
                            </h1>
                        </Container>
                    </div>
                </article>
            </Container>
        </>
    )
}

export default SearchEngineMarketingContent