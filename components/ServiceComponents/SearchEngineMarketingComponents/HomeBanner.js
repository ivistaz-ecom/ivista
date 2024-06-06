"use client"
import React, { useState, useEffect, useRef } from 'react'
import { Container, Row } from 'react-bootstrap'
import ServiceBanner from '../../PropsShared/ServiceBanner'

import SeoComponents from '../../SeoComponents/Seo'
import { usePathname } from 'next/navigation'





const HomeBanner = () => {

    const pathname = usePathname();
    const [domainName, setDomainName] = useState('');

    useEffect(() => {
        setDomainName(window.location.hostname);
    }, []);

    const title = "Expert SEM Strategies for Effective Online Advertisin";
    const description = " Navigate micro-moments with expert SEM. Place ads at the top of SERPs, optimize CPL, and drive conversions with search, display, video, shopping, and discovery ads.";
    const path = `${domainName}${pathname}`;
    const metaImage = "";

    // const backgroundImage = "/services/seo_banner.jpg"

    const backgroundImage = {
        url: '/services/sem_banner.jpg'
    };

    const mobileBackgroundImage = {
        url: '/service/mobile_service_banner/sem_banner.jpg'
    }
    const bannerSubHeading = "SEARCH ENGINE"
    const bannerHeading = "MARKETING"
    return (
        <>

            <SeoComponents title={title} description={description} path={path} metaImage={metaImage} />

            <Container className='bg-white z-3 position-relative' fluid>
                <Container className="w-80 custom-container z-index-100" >
                    <Row className="d-flex align-items-center px-lg-0 px-2">
                        <ServiceBanner backgroundImage={backgroundImage} mobileBackgroundImage={mobileBackgroundImage} bannerSubHeading={bannerSubHeading} bannerHeading={bannerHeading} />
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default HomeBanner