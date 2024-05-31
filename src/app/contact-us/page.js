"use client"
import React from 'react';
import { Container } from 'react-bootstrap'
import Header1 from '../../../components/HeaderBlack';
import Footer from '../../../components/Footer'; 

import ContactusComponents from '../../../components/ContactUsComponents'

function page() {
  return (
    <>
      <Container className="bg-black pb-5" fluid>
        <Header1 />
        <ContactusComponents />
      </Container>
      <Footer />
    </>
  )
}

export default page
