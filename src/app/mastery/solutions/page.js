"use client"
import React from 'react'
import HomeBanner from '../../../../components/mastery/HomeBanner';
import { Container } from 'react-bootstrap';
import Header1 from '../../../../components/HeaderBlack';
import Footer from '../../../../components/Footer';

function page() {
  return (


    <Container fluid className="bg-black pb-5">
      <Header1 />
      <Container className='w-80 custom-container bg-black position-relative z-3 mb-0'>
        <h1 className="text-offwhite fs-70 fw-bold text-start ps-5 mb-0">MASTERY</h1>
      </Container>
      <HomeBanner />
      <Footer />
    </Container>

  )
}

export default page
