"use client"
import React, { useState, useEffect, useRef } from 'react'
import { Container } from 'react-bootstrap';
import HomeBanner from '../../../../components/Industries/HomeBanner';
import Header1 from '../../../../components/HeaderBlack';
import Footer from '../../../../components/Footer';
import SeoComponents from '../../../../components/SeoComponents/Seo'
import { usePathname } from 'next/navigation'

function page() {
  const pathname = usePathname();
  const [domainName, setDomainName] = useState('');

  useEffect(() => {
    setDomainName(window.location.hostname);
  }, []);

  const title = " Digital marketing services across industries";
  const description = "By embracing innovative solutions and a passion for creating exceptional performances, iVistaz delivers expert digital marketing services for various industries.";
  const path = `${domainName}${pathname}`;
  const metaImage = "";
  return (
    <>

      <SeoComponents title={title} description={description} path={path} metaImage={metaImage} />

      <Container fluid className="iv-bg pb-5 border-bottom z-3 p-0">
        <Header1 />
        <Container className="w-80 custom-container position-relative iv-bg z-3">
          <h1 className="text-offwhite fs-70 fw-bold z-3 pt-4">
            PERFORMANCE
          </h1>
        </Container>
        <HomeBanner />
      </Container>
      <Footer />
    </>

  )
}

export default page
