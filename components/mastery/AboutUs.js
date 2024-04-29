import React, { useEffect, useRef } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Image from 'next/image';
import Link from 'next/link'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Svg from '../Automobiles/svg'
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { FaArrowRight } from "react-icons/fa";
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);


function HeroBanner() {

  return (
    <>
      <Container className="bg-white banner w-80 pb-5 mb-4" >
        <Row className="d-flex align-items-start">
          <Col lg={12} className="pl-8 pt-5">
            <h1 className="fs-19 fw-bold red">About Us</h1>
            <p className="para-text">We started young. We knew that the digital age was dawning at a time when marketing was mostly mainline/offline and kept a sharp eye on the digital landscape, which was accelerating at an unprecedented pace. Starting with organic search and social, and then moving on to paid search and social marketing, we quickly learned what businesses needed to thrive. And in response, we created a strong bouquet of end-to-end digital services, including web development and UX/UI. Today, backed by years of mastery in the digital and e-commerce space, iVista is helping to make the online channel a viable source for improved awareness, engagement, leads and revenues for businesses in the B2B and B2C sectors.</p>
          </Col>
          <Col lg={12} className="pl-8 pt-5">
            <h1 className="fs-2 fw-semibold red">Planning Winning Strategies Backed by Deep Insights</h1>
            <p className="para-text">As a digital marketing agency, we have witnessed the shifts in the digital landscape for more than a quarter of a century now. In this process, we have gained deep insights and experience in designing effective digital marketing strategies that deliver results for our clients.</p>
          </Col>
          <Col lg={12} className="pl-8 pt-5">
            <h1 className="fs-2 fw-semibold red">Focusing on Learning and Training</h1>
            <p className="para-text">
              Over the years, we have realized that learning and training are key to understanding and navigating the complex intricacies of digital marketing. Beyond the requisite certifications, we focus on continuous upskilling and training sessions for our teams across departments.
            </p>
          </Col>
          <Col lg={12} className="pl-8 pt-5">
            <h1 className="fs-2 fw-semibold red">In Constant Pursuit of Measurable Outcomes</h1>
            <p className="para-text">At iVista, we believe that diligent work is crucial for achieving results, success, and goals. Our approach involves carefully calculating and curating each step, ensuring that we deliver the desired outcomes that bring you closer to your digital goals.</p>
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default HeroBanner
