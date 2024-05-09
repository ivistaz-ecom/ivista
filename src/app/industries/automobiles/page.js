"use client"
import React from 'react'
import { Container } from 'react-bootstrap'
import HeroBanner from '../../../../components/Automobiles/HeroBanner'
import Header from '../../../../components/HeaderBlack'
import Footer from '../../../../components/Footer'

import AutoMobilesComponents from '../../../../components/Automobiles'

function page() {
  return (
    // <Container fluid className="bg-black pb-5">
    //   <Header />
    //   <HeroBanner />
    //   <Footer />
    // </Container>

    <>
      <AutoMobilesComponents />

    </>
  )
}

export default page
