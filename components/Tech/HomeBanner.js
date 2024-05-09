import React, { useEffect, useRef, useState } from 'react'
import { Container, Row, Col, Button, Image, CloseButton } from 'react-bootstrap'
// import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link'
import BannerAllPage from '../PropsShared/BannerAllPage';

import ConfigData from '../../config'

function HeroBanner() {

  const backgroundImage = {
    url: '/industrie/tech_banner.jpg'
  };

  const mobileBackgroundImage = {
    url: '/industrie/mobile_industries_banner/tech_mob_banner.jpg'
  }

  const bannerHeading = 'TECH/IT'

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
