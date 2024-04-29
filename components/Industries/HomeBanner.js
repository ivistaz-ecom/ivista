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
      <Container className="bg-white banner w-80 pb-5" >
        <Row className="d-flex align-items-start">
          <Col lg={12} className="pl-8 pt-5">
            <h1 className="fs-19 fw-bold">Industries</h1>
            <p className="para-text">Client expectations have taken a quantum leap, compelling individuals to adapt like never before. Brands have relentlessly pursued growth by embracing innovative solutions. That’s where we step in. With a passion for creating exceptional experiences and staying ahead of the curve, we’ve mastered our art. And today, we don’t just perform, we outperform.</p>
          </Col>
          <Col lg={12} className="pl-8 pt-5">
            <Link className="fs-3 i-link fw-semibold" href="/industries/automobiles">Automobiles</Link></Col>
          <Col lg={12} className="pl-8 pt-4">
            <Link className="fs-3 i-link fw-semibold" href="/industries/tech">Tech/IT</Link></Col>
          <Col lg={12} className="pl-8 pt-4">
            <Link className="fs-3 i-link fw-semibold" href="/industries/hospitality">Hospitality</Link></Col>
          <Col lg={12} className="pl-8 pt-4">
            <Link className="fs-3 i-link fw-semibold" href="/industries/appliances">Appliances</Link></Col>
          <Col lg={12} className="pl-8 pt-4">
            <Link className="fs-3 i-link fw-semibold" href="/industries/ngo">Not-for-Profits/NGOs</Link></Col>
          <Col lg={12} className="pl-8 pt-4">
            <Link className="fs-3 i-link fw-semibold" href="/industries/jewellery">Jewellry</Link></Col>
          <Col lg={12} className="pl-8 pt-4">
            <Link className="fs-3 i-link fw-semibold" href="/industries/beauty">Beauty & Wellness</Link></Col>
          <Col lg={12} className="pl-8 pt-4">
            <Link className="fs-3 i-link fw-semibold" href="/industries/accessories">Fashion & Accessories</Link></Col>
        </Row>
      </Container>

    </>
  )
}

export default HeroBanner
