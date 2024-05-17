"use client"
import React, { useState, useEffect } from 'react';
import Header1 from '../../../components/HeaderBlack'
import { Col, Container, Row } from 'react-bootstrap'
import CountUp from 'react-countup';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import Footer from '../../../components/Footer';


function page() {

  const [countVisible, setCountVisible] = useState([true, false, false]);

  const handleMouseEnter = (index) => {
    const newCountVisible = [false, false, false];
    newCountVisible[index] = true;
    setCountVisible(newCountVisible);
  };

  const handleMouseLeave = () => {
    setCountVisible([true, false, false]);
  };

  return (
    <>
      <Container fluid className="bg-black d-flex flex-column justify-content-between min-vh-100 bg-black" >
        <Header1 />

        <Container className="w-80 custom-container">
          <Col>
            <h1 className="text-white fs-70 fw-bold">MASTERY</h1>
          </Col>
          <Row className='d-flex flex-lg-row flex-column-reverse'>
            <Col className="section">
              <p className="mastery-text mastery-h" onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={handleMouseLeave}>Years of Experience & Expertise</p>
              <p className="mastery-text mastery-h" onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave}>Clients Served - 800+</p>
              <p className="mastery-text mastery-h" onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave}>Online Revenue Generated - $6B</p>
              {/* <p className="mastery-text mastery-h">Marketing Qualified Leads (MQLs) delivered</p> */}
              <p className="mastery-text mastery-h">Websites Designed and Developed ?</p>
            </Col>
            <Col className="d-flex justify-content-lg-end justify-content-start">
              {countVisible[0] && (
                <CountUp end={28} prefix="" className="counter" />
              )}
              {countVisible[1] && (
                <CountUp end={800} suffix="+" className="counter" />
              )}
              {countVisible[2] && (
                <CountUp end={6} prefix="$" suffix='B' className="counter" />
              )}
            </Col>
          </Row>
        </Container>

        <Container className="w-80 mt-lg-0 mt-5">
          <div id="wrapper">
            <section id="content">
            </section>
          </div>
          <Row className='d-flex flex-lg-row flex-column-reverse'>
            <Col className="overflow d-flex flex-column justify-content-end align-items-center">
              <Image src="/images/mastery_image.svg" className=" img-fluid" width={300} height={200} alt='' />
            </Col>
            <Col className="">
              <p className="mastery-text"> <span className='fst-italic fw-bold'>“Mastery demands all of a person.” </span>– Albert Einstein</p>
              <p className="mastery-text">
                Years of being in the digital marketing landscape and working with over 300+ clients have given us insights into how to master every aspect of this dynamic industry. Want to know how we do it?
              </p>
              <Container className="mt-3 pb-5 margin-left d-flex flex-column justify-content-center">
                <div className='d-flex flex-lg-row flex-column gap-3 justify-content-start'>
                  <div className='text-start'>
                    <Link href="/mastery/about-us" className="btn btn-13 b-width">About Us</Link>
                  </div>
                  <div className='text-start'>
                    <Link href="/mastery/solutions" className="btn btn-13 b-width">Solutions</Link>
                  </div>
                </div>

                <Container className="mt-5 margin-left d-lg-flex d-none">
                  <Link href="/arts" className="text">ART</Link>
                  <Link href="/performance" className="text mx-lg-5 mx-4">PERFORMANCE</Link>
                </Container>
              </Container>
            </Col>
          </Row>

          <Container className="mt-5 margin-left d-flex d-lg-none pb-4 pb-lg-0">
            <Link href="/arts" className="text">ART</Link>
            <Link href="/performance" className="text mx-lg-5 mx-4">PERFORMANCE</Link>
          </Container>
        </Container>
      </Container>

      <Footer />
    </>
  )
}

export default page