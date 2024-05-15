"use client"
import React from 'react'
import HomeBanner from '../../../../components/mastery/HomeBanner';
import { Container } from 'react-bootstrap';
import Header1 from '../../../../components/HeaderBlack';
import Footer from '../../../../components/Footer';

function page() {
  return (
    <Container fluid className="bg-black z-3">
      <Container fluid className="bg-black z-3">

        <Header1 />
      </Container>
      <Container className='w-80 custom-container bg-black z-3'>
        <h1 className="text-offwhite fs-70 fw-bold">MASTERY</h1>
      </Container>
      <HomeBanner />
      <Footer />
    </Container>
  )
}

export default page
