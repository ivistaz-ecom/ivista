"use client"
import React from 'react'
import Header1 from '../../../components/HeaderBlack'
import { Col, Container, Row } from 'react-bootstrap'
import CountUp from 'react-countup';
import Link from 'next/link';
import Image from 'next/image'
import Footer from '../../../components/Footer';
function performance() {
  return (
    <>
      <Container fluid className="iv-bg border-bottom d-flex flex-column justify-content-between min-vh-100">
        <Header1 />
        <Container className="w-80 mb-5 custom-container">
          <Col>
            <h1 className="text-white fs-70 fw-bold mb-5 text-start">PERFORMANCE</h1>
          </Col>
          <Row className='d-flex flex-lg-row flex-column justify-content-between'>
            <Col className="d-flex flex-column justify-content-between p-0" lg={7}>
              <Container className='text-start'>
                <p className="mastery-text">
                  <span className='fst-italic fw-bold'>“Behind every brilliant performance there were countless hours of practice and preparation.”</span> – Eric Butterworth
                </p>
                <p className="mastery-text">
                  We work in collaboration with our clients to design digital journeys that create experiences that people will never forget; and for that we intend to deliver performance beyond expectations.
                </p>
                <Container className="mt-3 pb-5 margin-left d-flex flex-column justify-content-center">
                  <div className='d-flex flex-lg-row flex-column gap-3'>
                    <div className='text-start'>
                      <Link href="/industries" className="btn btn-13 b-width z-0">Industries</Link>
                    </div>
                    <div className='text-start'>
                      <Link href="/case-studies" className="btn btn-13 b-width z-0">Case Studies</Link>
                    </div>
                  </div>
                </Container>
              </Container>

              <Container className="margin-left d-lg-flex d-none mb-4">
                <Col className=''>
                  <Link href="/arts" className="perform-text">ART</Link>
                  <Link href="/mastery" className="perform-text mx-5">MASTERY</Link>
                </Col>
              </Container>
            </Col>

            <Col className="arts">
              <Image src="/images/performance_image.svg" className="performance-img img-fluid h-100" width={500} height={290} alt='' />
            </Col>
          </Row>

          <Container className="margin-left d-lg-none d-flex mb-2">
            <Col className=''>
              <Link href="/arts" className="perform-text">ART</Link>
              <Link href="/mastery" className="perform-text mx-5">MASTERY</Link>
            </Col>
          </Container>
        </Container>
      </Container>
      <Footer />

    </>
  )
}

export default performance