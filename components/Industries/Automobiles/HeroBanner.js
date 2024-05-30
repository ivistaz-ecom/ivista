import React, { useEffect, useRef, useState } from 'react'
import { Container, Row, Col, Button, Image, CloseButton } from 'react-bootstrap'
import BannerAllPage from '../../PropsShared/BannerAllPage';

function HeroBanner() {

  const backgroundImage = {
    url: '/industrie/automobile_banner.jpg'
  };

  const bannerHeading = 'AUTOMOBILES'

  const mobileBackgroundImage = {
    url: '/industrie/mobile_industries_banner/automobile_mobile_banner.jpg'
  }

  return (
    <>
      <Container className='bg-black z-3 position-relative p-0' fluid>
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
