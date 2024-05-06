"use client"
import React from 'react';
import { Container } from 'react-bootstrap'
import Image from 'next/image'
import { Row, Col, Button } from 'react-bootstrap'
import Header1 from '../../../components/HeaderBlack';
import CareerComponents from '../../../components/CareersComponents/';
import Footer from '../../../components/Footer';

function page() {

  return (
    <>
      <Container className="bg-white p-0" fluid>
        <Header1 />
        <CareerComponents />
        <Footer />
      </Container>
    </>
  )
}

export default page
