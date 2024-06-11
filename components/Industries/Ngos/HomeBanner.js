"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Container, Row, Col, Button, Image, CloseButton } from 'react-bootstrap'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa";
import BannerAllPage from '../../PropsShared/BannerAllPage';
import ConfigData from '../../../config'
import SeoComponents from '../../../components/SeoComponents/Seo'
import { usePathname } from 'next/navigation'

function HeroBanner() {

  const pathname = usePathname();
  const [domainName, setDomainName] = useState('');

  useEffect(() => {
    setDomainName(window.location.hostname);
  }, []);

  const title = "Digital Marketing Solutions for Nonprofit Organizations | SEO, Social Media & Web Design";
  const description = "Maximize your nonprofit's impact with our comprehensive digital marketing services. From SEO and social media marketing to web design, we help NGOs and nonprofit organizations reach their audience and drive meaningful engagement.";
  const path = `${domainName}${pathname}`;
  const metaImage = "";

  const backgroundImage = {
    url: '/industrie/ngos_banner.jpg'
  };

  const mobileBackgroundImage = {
    url: '/industrie/mobile_industries_banner/NGOs_mob_banner.jpg'
  }

  const bannerHeading = 'NOT-FOR-PROFITS/NGOS' 

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
