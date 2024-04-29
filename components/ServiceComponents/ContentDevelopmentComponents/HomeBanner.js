import React from 'react'
import { Container, Row } from 'react-bootstrap'
import ServiceBanner from '../../PropsShared/ServiceBanner'

const HomeBanner = () => {
    // const backgroundImage = "/services/seo_banner.jpg"

    const backgroundImage = {
        url: '/services/content_development.jpg'
    };

    const mobileBackgroundImage = {
        url: '/service/mobile_service_banner/content_development_banner.jpg'
    }

    const bannerSubHeading = "Content Development"
    const bannerHeading = "B2B & B2C"
    return (
        <>
            <Container className="w-80 custom-container">
                <Row className="d-flex align-items-center px-lg-0 px-2">
                    <ServiceBanner backgroundImage={backgroundImage} mobileBackgroundImage={mobileBackgroundImage} bannerSubHeading={bannerSubHeading} bannerHeading={bannerHeading} />
                </Row>
            </Container>
        </>
    )
}

export default HomeBanner