"use client"
import React from 'react'
import { Container } from 'react-bootstrap';
import HomeBanner from '../../../../components/Industries/HomeBanner';
import Header1 from '../../../../components/HeaderBlack';
import Footer from '../../../../components/Footer';

function page() {
  return (
    <>

      <Container fluid className="iv-bg pb-5 border-bottom z-3">
        <Header1 />
        <Container className="w-80 custom-container position-relative iv-bg z-3">
          <h1 className="text-offwhite fs-70 fw-bold z-3">
            PERFORMANCE
          </h1>
        </Container>
        <HomeBanner />
      </Container>
      <Footer />
    </>

  )
}

export default page