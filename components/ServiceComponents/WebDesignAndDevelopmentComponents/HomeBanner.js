import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ServiceBanner from '../../PropsShared/ServiceBanner'
import Link from 'next/link';

const HomeBanner = () => {

    const backgroundImage = {
        url: '/services/web_design_and_development_banner.jpg'
    };

    const mobileBackgroundImage = {
        url: '/services/mobile_service_banner/design_banner.jpg'
    }

    // Banner Main and Sub Heading
    const bannerSubHeading = 'WEB DESIGN &'
    const bannerHeading = 'DEVELOPMENT'

    return (

        <>

            <Container className='ng-white z-index-100' fluid>
                <Container className="w-80 custom-container" >
                    <Row className="d-flex align-items-center px-lg-0 px-2">
                        <ServiceBanner backgroundImage={backgroundImage} bannerSubHeading={bannerSubHeading} bannerHeading={bannerHeading} mobileBackgroundImage={mobileBackgroundImage} />
                    </Row>
                </Container>
            </Container>
            {/* <Container className="pt-4 w-80 pb-4 pt-4">
                <p className="para-text">As social developments produce both new possibilities and fresh challenges, active attempts to establish a better future for monitoring, assessment, and learning will become increasingly more crucial in the coming years. These changes in the philanthropic landscape—and the world around it—are profoundly altering the backdrop for decision-making inside social sector organisations as well as the larger practise of monitoring, evaluation, and learning.</p>
            </Container>
            <Container className=" w-80 p-5">
                <p className="fw-bold fs-3">Our services will help your audience understand your niche and help create awareness it by:</p>
                <p className="para-text">Providing end-to-end services that will bring in more attention from the identified target group.</p>
                <p className="para-text">For value creation, evaluate or reframe the current positioning, message, and narrative.</p>
                <p className="para-text">With captivating content and SEO, generate traction for your website and offerings.</p>
                <p className="para-text">Using email marketing, generate Marketing Qualified Leads (MQLs).</p>
                <Container className="text-center">
                    <Col className='d-flex flex-column align-items-center'>
                        <Link className="btn-14" href="/contact-us">Contact us</Link>
                    </Col>
                </Container>
            </Container> */}
        </>
    )
}

export default HomeBanner