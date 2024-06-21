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
      <Header1 />
      <Container fluid className="iv-bg border-bottom z-3 p-0">
        <div className='custom_height_per_top'></div>
        {/* <Container className="w-80 custom-container position-relative iv-bg z-3">
          <h1 className="text-offwhite fs-80 fw-bold z-3 pt-4 py-4">
            PERFORMANCE
          </h1>
        </Container> */}
        <HomeBanner />
        <div className='custom_height_per_bottom'></div>
      <Footer />
      </Container>
    </>

  )
}

export default page
