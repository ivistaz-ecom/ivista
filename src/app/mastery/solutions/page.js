"use client"
import React from 'react'
import HomeBanner from '../../../../components/mastery/HomeBanner';
import { Container } from 'react-bootstrap';
import Header1 from '../../../../components/HeaderBlack';
import Footer from '../../../../components/Footer';

function page() {
  return (
    <Container fluid className="bg-black">
      <Header1 />
      <Container className='w-80 custom-container'>
        <h1 className="text-offwhite fs-70 fw-bold">MASTERY</h1>
      </Container>
      <HomeBanner />
      <Footer />
    </Container>
  )
}

export default page
