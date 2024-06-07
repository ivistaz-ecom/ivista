"use client"
import React, { useEffect, useState } from 'react'
import { Container, Row, Col, CloseButton, Image } from 'react-bootstrap'
import BannerAllPage from '../../PropsShared/BannerAllPage';
import SeoComponents from '../../../components/SeoComponents/Seo'
import { usePathname } from 'next/navigation'


function HeroBanner() {

  const pathname = usePathname();
  const [domainName, setDomainName] = useState('');

  useEffect(() => {
    setDomainName(window.location.hostname);
  }, []);

  const title = "Enhancing digital experience for customers in hospitality sector";
  const description = " Leveraging twelve years of expertise with digital marketing in the hospitality sector, iVistaz ensures content is fine-tuned to customer expectations.";
  const path = `${domainName}${pathname}`;
  const metaImage = "";

  const backgroundImage = {
    url: '/industrie/hospitality_banner.jpg'
  };

  const mobileBackgroundImage = {
    url: '/industrie/mobile_industries_banner/hospitality_mob_banner.jpg'
  }

  const bannerHeading = 'HOSPITALITY'

  return (
    <>
      <SeoComponents title={title} description={description} path={path} metaImage={metaImage} />

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