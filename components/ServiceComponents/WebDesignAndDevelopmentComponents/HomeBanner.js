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

            <Container className='bg-white z-3 position-relative' fluid>
                <Container className="w-80 custom-container z-index-100" >
                    <Row className="d-flex align-items-center px-lg-0 px-2 z-index-100">
                        <ServiceBanner backgroundImage={backgroundImage} bannerSubHeading={bannerSubHeading} bannerHeading={bannerHeading} mobileBackgroundImage={mobileBackgroundImage} />
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default HomeBanner