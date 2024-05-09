import React, { useEffect, useRef, useState } from 'react'
import { Container, Row, Col, Button, Image, CloseButton } from 'react-bootstrap'
import Link from 'next/link'
import BannerAllPage from '../PropsShared/BannerAllPage';

import CaseStudiesCategoriesComponents from '../PropsShared/CaseStudiesCategoriesComponents';
import ScrollAnimation from '../SharedComponents/ScrollAnimationServices';

function HeroBanner() {

  const backgroundImage = {
    url: '/industrie/appliances_banner.jpg'
  };

  const mobileBackgroundImage = {
    url: '/industrie/mobile_industries_banner/appliances_mob_banner.jpg'
  };

  const bannerHeading = 'APPLIANCES'

  return (
    <>
      <ScrollAnimation />

      <Container fluid className="bg-black p-0 position-relative z-3">
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
