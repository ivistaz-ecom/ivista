"use client"
import React from 'react'
import Aboutus from '../../../../components/mastery/AboutUs';
import { Container } from 'react-bootstrap';
import Header1 from '../../../../components/HeaderBlack';
import Footer from '../../../../components/Footer';

function page() {
  return (
    <>
      <Header1 />
      <Container fluid className="bg-black pb-3">
        <div className='custom_height_top'></div>

        <Container className='w-80 custom-container bg-black position-relative z-3 mb-0'>
          <h1 className="text-offwhite fs-70 fw-bold text-start ps-5 mb-0">MASTERY</h1>
        </Container>
        <Aboutus />
        <div className='custom_height_bottom'></div>
      </Container>
      <Footer />
    </>
  )
}

export default page
