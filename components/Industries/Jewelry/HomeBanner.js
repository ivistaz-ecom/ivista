import React, { useEffect, useState } from 'react'
import { Container, Row, Col, CloseButton, Image } from 'react-bootstrap'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa";
import BannerAllPage from '../../PropsShared/BannerAllPage';

import ConfigData from '../../../config'

function HeroBanner() {

  const backgroundImage = {
    url: '/industrie/jewelry_banner.jpg'
  };

  const mobileBackgroundImage = {
    url: '/industrie/mobile_industries_banner/jewelry_mob_banner.jpg'
  }

  const bannerHeading = 'JEWELLRY'

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
