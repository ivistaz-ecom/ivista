import React, { useEffect, useState } from 'react'
import { Container, Row, Col, CloseButton, Image } from 'react-bootstrap'
import BannerAllPage from '../../PropsShared/BannerAllPage';


function HeroBanner() {

  const backgroundImage = {
    url: '/industrie/hospitality_banner.jpg'
  };

  const mobileBackgroundImage = {
    url: '/industrie/mobile_industries_banner/hospitality_mob_banner.jpg'
  }

  const bannerHeading = 'HOSPITALITY'

  return (
    <>
      <Container fluid className='p-0 bg-black position-relative z-3'>
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