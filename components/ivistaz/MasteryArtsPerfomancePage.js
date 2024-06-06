import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import '../../src/app/globals.css'
import Mastery from './Mastery';
import Arts from './Arts';
import Performance from './Performance';
import Footer from '../Footer';
import ScrollAnimation from '../SharedComponents/ScrollAnimation';
import Link from 'next/link';

const MasteryArtsPerfomancePage = () => {
    const [isMainSectionVisible, setIsMainSectionVisible] = useState(true);
    const [isNextSectionVisible, setIsNextSectionVisible] = useState(false);

    const masteryRef = useRef();
    const artsRef = useRef();
    const performanceRef = useRef();

    const handleScrollToSection = (sectionRef) => {
        setIsMainSectionVisible(false);
        setIsNextSectionVisible(true);
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const [isMobile, setIsMobile] = useState(false);
    const [viewportWidth, setViewportWidth] = useState(0);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setViewportWidth(window.innerWidth);
            setIsMobile(window.innerWidth <= 768);
            const handleResize = () => {
                setViewportWidth(window.innerWidth);
                setIsMobile(window.innerWidth <= 768);
            };
            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    const rotateText = {
        transform: isMobile ? 'rotate(0deg)' : 'rotate(270deg)',
    };

    return (
        <>

            {/* <ScrollAnimation /> */}

            {isMainSectionVisible && (
                <Container className="bg-black h-100vh d-flex flex-column justify-content-center" fluid>
                    <Row className='h-100vh d-flex flex-lg-row flex-column'>
                        <Col className={`d-flex flex-column p-0 z-1 ${isMobile ? '' : 'border-end'} z-1`} lg={6} style={{ height: isMobile ? '66.66vh' : '' }}>
                            <Col className='mastery h-100 p-0 border-bottom d-flex flex-column w-100'>
                                <div onClick={() => handleScrollToSection(masteryRef)} className='h-100 p-0 w-100 d-flex flex-column justify-content-center align-items-center text-decoration-none cursor-pointer'>
                                    <div>
                                        <Link href="/home#mastery" className='text-decoration-none'>
                                            <h1 className='text-white fs-70 fw-bold'> MASTERY </h1>
                                        </Link>
                                    </div>
                                    <div className='show-mastery'>
                                        <Image src="/home/masery.svg" width={100} height={10} alt='' className='w-100' />
                                    </div>
                                </div>
                            </Col>

                            <Col className={`art p-0 d-flex justify-content-center align-items-center z-1 ${isMobile ? 'border-bottom' : ''}`}>
                                <div onClick={() => handleScrollToSection(artsRef)} className='h-100 p-0 w-100 d-flex flex-column justify-content-center align-items-center text-decoration-none cursor-pointer'>
                                    <div>
                                        <Link href="/home#art" className='text-decoration-none'>
                                            <h1 className='text-white fs-70 fw-bold art-txt'> ART </h1>
                                        </Link>
                                    </div>
                                    <div className='show-art'>
                                        <Image src="/home/art.svg" width={100} height={10} alt='' className='w-100' />
                                    </div>
                                </div>
                            </Col>
                        </Col>

                        <Col className='p-0 z-0' lg={6} style={{ height: isMobile ? '33.33vh' : '' }}>
                            <Col className='perfomance d-flex flex-column justify-content-center align-items-center h-100 p-0 z-0'>
                                <div onClick={() => handleScrollToSection(performanceRef)} className='h-100 p-0 w-100 d-flex flex-column justify-content-center align-items-center text-decoration-none cursor-pointer'>
                                    <Col className='p-0 d-flex flex-column justify-content-center align-items-center w-100 text-decoration-none'>
                                        <div style={rotateText}>
                                            <div className='d-flex'>
                                                <Link href="/home#perf" className='text-decoration-none'>
                                                    <h1 className='text-white fs-70 fw-bold'> PERFORMANCE </h1>
                                                </Link>
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
            )}
            {isNextSectionVisible &&
                <article className='custom-container'>
                    <div className='timeline'>
                        <h6 ref={masteryRef} id='mastery' className='position-relative'>
                            <div className="timeline-badge"></div>
                            <Mastery />
                        </h6>
                        <h6 ref={artsRef} id="art">
                            <div className="timeline-badge"></div>
                            <Arts />
                        </h6>
                        <h6 ref={performanceRef} id="perf">
                            <div className="timeline-badge"></div>
                            <Performance />
                        </h6>
                    </div>
                    <Footer />
                </article>
            }
        </>
    );
}

export default MasteryArtsPerfomancePage;
