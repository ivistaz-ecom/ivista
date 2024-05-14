"use client"
import React from 'react'
import Aboutus from '../../../../components/mastery/AboutUs';
import { Container } from 'react-bootstrap';
import Header1 from '../../../../components/HeaderBlack';
import Footer from '../../../../components/Footer';

function page() {
  return (
    <Container fluid className="bg-black pb-5">
      <Header1 />
      <Container className='w-80 custom-container bg-black z-3'>
        <h1 className="text-offwhite fs-70 fw-bold text-start">MASTERY</h1>
      </Container>
      <Aboutus />
      <Footer />
    </Container>
  )
}

export default page
