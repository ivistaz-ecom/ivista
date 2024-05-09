'use client'
import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Image, CloseButton } from 'react-bootstrap'
// import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa";
import BannerAllPage from '../PropsShared/BannerAllPage';

import ConfigData from '../../config'

function HeroBanner() {

  const backgroundImage = {
    url: '/industrie/fashion_and_accessories_banner.jpg'
  };

  const mobileBackgroundImage = {
    url: '/industrie/mobile_industries_banner/fashion_and_accessories_mob_banner.jpg'
  }

  const bannerHeading = 'FASHION & ACCESSORIES'

  return (
    <>

      <Container fluid className='bg-black p-0 position-relative z-3'>
        <Container className="w-80 custom-container">
          <Row className="d-flex align-items-center">
            <BannerAllPage backgroundImage={backgroundImage} bannerHeading={bannerHeading} mobileBackgroundImage={mobileBackgroundImage} />
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default HeroBanner
