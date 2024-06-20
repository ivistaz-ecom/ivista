"use client"
import React from 'react';
import Mastery from '../../../components/ivistaz/Mastery';
import Arts from '../../../components/ivistaz/Arts';
import Performance from '../../../components/ivistaz/Performance';
import Footer from '../../../components/Footer';
import Experience from '@/app/experience/page';
import ScrollAnimation from '../../../components/SharedComponents/ScrollAnimation';
import Header from '../../../components/HeaderBlack'

const MasteryArtPerformance = () => {
    return (
        <>
        <Header/>
        <ScrollAnimation/>
        <div className='custom-container'>
            <div className=''>
                <div className='position-relative' id='mastery'>
                    <div className="timeline-badge"></div>
                    <Mastery />
                </div>
                <div className='position-relative' id='art'>
                    <div className="timeline-badge"></div>
                    <Arts />
                </div>
                <div className='position-relative' id='performance'>
                    <div className="timeline-badge"></div>
                    <Performance />
                </div>
            </div>
            <Footer />
        </div>
        </>
    );
}

export default MasteryArtPerformance;
