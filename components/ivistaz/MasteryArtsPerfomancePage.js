import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import '../../src/app/globals.css'
import Mastery from './Mastery';
import Arts from './Arts';
import Performance from './Performance';
import Footer from '../Footer';
import Header1 from '../HeaderBlack';
import ScrollAnimation from '../SharedComponents/ScrollAnimation';

const MasteryArtsPerfomancePage = () => {

    const [isMobile, setIsMobile] = useState(false); // Default to false for server-side rendering
    const [viewportWidth, setViewportWidth] = useState(0); // Default to 0 for server-side rendering

    useEffect(() => {
        // Check if window is defined to ensure execution only on the client-side
        if (typeof window !== 'undefined') {
            // Access window.innerWidth only in the browser environment
            setViewportWidth(window.innerWidth);
            setIsMobile(window.innerWidth <= 768); // Set isMobile based on viewport width
            // Add event listener for window resize
            const handleResize = () => {
                setViewportWidth(window.innerWidth);
                setIsMobile(window.innerWidth <= 768); // Set isMobile based on updated viewport width
            };
            window.addEventListener('resize', handleResize);

            // Cleanup function to remove event listener when component unmounts
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []); // Empty dependency array ensures useEffect runs only once after initial render


    const nextSectionRef = useRef();
    const nextSectionRef1 = useRef();
    const nextSectionRef2 = useRef();

    function handleScrollToResults() {
        nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
    function handleScrollToResults1() {
        nextSectionRef1.current.scrollIntoView({ behavior: "smooth" });
    }
    function handleScrollToResults2() {
        nextSectionRef2.current.scrollIntoView({ behavior: "smooth" });
    }

    const roateText = {
        transform: isMobile ? 'rotate(0deg)' : 'rotate(270deg)',
        // transition: 'transform 150ms ease', // smooth transition
    }

    return (
        <>
            <Container fluid className='bg-black z-3 position-relative'>
                {/* <Header1 /> */}
                <Row className='h-100vh d-flex flex-lg-row flex-column'>
                    <Col className={`d-flex flex-column p-0 z-1 ${isMobile ? '' : 'border-end'} z-1`} lg={6} style={{ height: isMobile ? '66.66vh' : '' }}>
                        <Col className='mastery h-100 p-0 border-bottom d-flex flex-column w-100'>
                            <div onClick={handleScrollToResults} className='h-100 p-0 w-100 d-flex flex-column justify-content-center align-items-center text-decoration-none cursor-pointer'>
                                <div>
                                    <h1 className='text-white fs-70 fw-bold'> MASTERY </h1>
                                </div>
                                <div className='show-mastery'>
                                    <Image src="/home/masery.svg" width={100} height={10} alt='' className='w-100' />
                                </div>
                            </div>
                        </Col>

                        <Col className={`art p-0 d-flex justify-content-center align-items-center z-1 ${isMobile ? 'border-bottom' : ''}`}>
                            <div onClick={handleScrollToResults1} className='h-100 p-0 w-100 d-flex flex-column justify-content-center align-items-center text-decoration-none cursor-pointer'>
                                <div>
                                    <h1 className='text-white fs-70 fw-bold art-txt'> ART </h1>
                                </div>
                                <div className='show-art'>
                                    <Image src="/home/art.svg" width={100} height={10} alt='' className='w-100' />
                                </div>
                            </div>
                        </Col>
                    </Col>

                    <Col className='p-0 z-0' lg={6} style={{ height: isMobile ? '33.33vh' : '' }}>
                        <Col className='perfomance d-flex flex-column justify-content-center align-items-center h-100 p-0 z-0'>
                            <div onClick={handleScrollToResults2} className='h-100 p-0 w-100 d-flex flex-column justify-content-center align-items-center text-decoration-none cursor-pointer'>
                                <Col className='p-0 d-flex flex-column justify-content-center align-items-center w-100 text-decoration-none'>
                                    <div style={roateText}>
                                        <div className='d-flex'>
                                            <h1 className='text-white fs-70 fw-bold'> PERFORMANCE </h1>
                                        </div>
                                        <div className='show-perfomance'>
                                            <Image src="/home/masery.svg" width={100} height={10} alt='' className='w-100' />
                                        </div>
                                    </div>
                                </Col>
                            </div>
                        </Col>
                    </Col>
                </Row>
            </Container>

            <ScrollAnimation />

            <ul className='timeline'>
                <li ref={nextSectionRef}>
                    <div class="timeline-badge"></div>
                    <Mastery />
                </li>

                <li ref={nextSectionRef1}>
                    <div class="timeline-badge"></div>
                    <Arts />
                </li>

                <li ref={nextSectionRef2}>
                    <div class="timeline-badge"></div>
                    <Performance />
                </li>
            </ul>
            <Footer />
        </>
    );
}

export default MasteryArtsPerfomancePage;
