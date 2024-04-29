
"use client"
import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Image from 'next/image';
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa";
import Header1 from '../../../components/HeaderBlack';
import CaseStudiesFetchDataIndex from '../../../components/CaseStudies'
import Footer from '../../../components/Footer';


function HeroBanner() {

  return (
    <>
      <Container className="bg-black" fluid>
        <Header1 />
        <CaseStudiesFetchDataIndex />
        <Footer />
      </Container>
    </>
  )
}

export default HeroBanner
