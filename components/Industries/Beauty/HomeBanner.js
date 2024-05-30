import React, { useEffect, useRef, useState } from 'react'
import { Container, Row, Col, Button, Image, CloseButton } from 'react-bootstrap'
// import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa";
import BannerAllPage from '../../PropsShared/BannerAllPage';

import ConfigData from '../../../config'


function HeroBanner() {

  const backgroundImage = {
    url: '/industrie/Beauty_and_wellness_banner.jpg'
  };

  const bannerHeading = 'BEAUTY & WELLNESS'

  const mobileBackgroundImage = {
    url: '/industrie/mobile_industries_banner/beauty_and_wellness_mob_banner.jpg'
  };


  return (
    <>
      <Container fluid className='bg-black p-0 position-relative z-3'>
        <Container className="w-80 custom-container">
          <Row className="d-flex flex-column justify-content-start align-items-lg-center">
            <BannerAllPage backgroundImage={backgroundImage} bannerHeading={bannerHeading} mobileBackgroundImage={mobileBackgroundImage} />
          </Row>
        </Container>
      </Container>


    </>
  )
}

export default HeroBanner
