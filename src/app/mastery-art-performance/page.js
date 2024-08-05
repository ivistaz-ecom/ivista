"use client"
import React from 'react';
import Footer from '../../../components/Footer';
import ScrollAnimation from '../../../components/SharedComponents/ScrollAnimation';
import Header from '../../../components/HeaderBlack'
import NewMastery from '../../../components/ivistaz/NewMastery';

const MasteryArtPerformance = () => {
    return (
        <>
        <Header />
        <ScrollAnimation />
        <div className='custom-container'> 
            <NewMastery />
            <Footer />
        </div>
    </>
    );
}

export default MasteryArtPerformance;
