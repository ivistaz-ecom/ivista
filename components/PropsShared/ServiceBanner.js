'use client'
import React, { useEffect, useState } from 'react'
import { Col } from 'react-bootstrap'

const ServiceBanner = ({ backgroundImage, mobileBackgroundImage, bannerHeading, bannerSubHeading }) => {

    const [isMobile, setIsMobile] = useState(false);
    const [viewportWidth, setViewportWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setViewportWidth(window.innerWidth);
            setIsMobile(window.innerWidth <= 768);
        };

        // Check if window is available before adding event listener
        if (typeof window !== 'undefined') {
            handleResize(); // Call it initially to set the initial state
            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    return (
        <>
            <div
                style={{
                    backgroundImage: isMobile ? `url(${mobileBackgroundImage.url})` : `url(${backgroundImage.url})`, // Access the URL from the object
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    height: '358px',
                }}
                className='d-flex flex-column justify-content-lg-center justify-content-start align-items-center align-items-lg-start pt-lg-0 pt-4 rounded-5'
            >

                <Col lg={7} className="pl-8 d-flex flex-column text-align-start">
                    <h1 className="fs-21 fw-bold text-white lh-1 py-5">
                        <span className="fs-19 fw-bold text-white mb-0 ">
                            {bannerSubHeading}
                        </span>
                        {' '}
                        {bannerHeading}
                    </h1>
                </Col>
            </div >
        </>
    )
}

export default ServiceBanner