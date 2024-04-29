'use client'
import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Image, CloseButton } from 'react-bootstrap'
// import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa";
import BannerAllPage from '../PropsShared/BannerAllPage';

import ConfigData from '../../config'

function HeroBanner() {

  const backgroundImage = {
    url: '/industrie/fashion_and_accessories_banner.jpg'
  };

  const mobileBackgroundImage = {
    url: '/industrie/mobile_industries_banner/fashion_and_accessories_mob_banner.jpg'
  }

  const bannerHeading = 'FASHION & ACCESSORIES'

  const [data, setData] = useState(null);

  const categoryId = 13;

  const siteUrl = ConfigData.wpApiUrl;
  const serverUrl = ConfigData.SERVER;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${siteUrl}/posts?categories=${categoryId}&per_page=3&production_mode[]=${serverUrl}`);
        const data = await response.json();
        setData(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [siteUrl, serverUrl, categoryId]);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    // Add event listener to prevent scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'auto'; // Enable scrolling when component unmounts
    };
  }, [isOpen]);

  const handleShowModal = (item) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedItem(null);
  };


  return (
    <>
      <Container className="w-80 custom-container">
        <Row className="d-flex align-items-center">
          <BannerAllPage backgroundImage={backgroundImage} bannerHeading={bannerHeading} mobileBackgroundImage={mobileBackgroundImage} />
        </Row>
      </Container>

      <Container className="pt-4 w-80 pb-4 pt-4" >
        <p className="text-white para-text">
          According to an article by the Times of India, the fashion industry<Link href="https://timesofindia.indiatimes.com/blogs/voices/indian-apparel-and-fashion-market-in-next-five-years-industry-growth-challenges-and-opportunities/" target='_blank' className='hyper-link-red cursor-pointer'> is poised to grow into a $106 billion industry by 2026</Link>, bringing up the Indian fashion market on maps. We will help you to capitalize on this market opportunity with robust digital solutions that include:</p>

      </Container>
      <Container className="iv-bg w-80 banner p-5">
        <ul>
          <li className='industry-bullet'>
            <p className="text-white para-text">Bridging the gap between online visitors and sales (in-store and online) both on your e-store, as well as on marketplaces and<span className='fw-bold'> increasing online conversions</span></p>
          </li>
          <li className='industry-bullet'>
            <p className="text-white para-text">
              Creating<span className='fw-bold'> strong curated online experiences</span> for your customers to strengthen brand loyalty
            </p>
          </li>
          <li className='industry-bullet'>
            <p className="text-white para-text">
              Ensuring a<span className='fw-bold'> consistent social media engagement</span> with your customers.
            </p>
          </li>
        </ul>
        <Container className="text-center">
          <Col className='d-flex flex-column align-items-center'>
            <Link className="btn-14 z-0" href="/contact-us">Contact us</Link>
          </Col>
        </Container>
      </Container>
      <Container className="mt-5 mb-5 w-80">
        <p className="fs-2 text-white">Here’s how we helped beauty and wellness brands secure a winning edge:</p>
      </Container>

      <Container className="w-80">
        <Col className='d-flex flex-lg-row flex-column justify-content-center'>
          {data ? ( // Check if data is available
            data.map((items) => (
              <div className='iv-cards col-lg-4' key={items.id}>
                <Image
                  src={items.acf.thumbnail_image.url}
                  alt={items.title.rendered}
                  className='w-100 img-fluid' height={240}
                  width={200}
                />
                <div class="card-body d-flex flex-column justify-content-between mb-0">
                  <div>
                    <div class="card-title" dangerouslySetInnerHTML={{ __html: items.title.rendered }} />
                    <p class="card-text three-line-show" dangerouslySetInnerHTML={{ __html: items.excerpt.rendered }} />
                  </div>
                  <div className='mt-3'>
                    <div class="iv-link cursor-pointer d-inline-block" onClick={() => handleShowModal(items)}>
                      Read more
                      <FaArrowRight className="icons" />
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className='text-white'>
              <div class="spinner-border text-danger" role="status">
              </div>
              <span class=" text-white">Loading...</span>
            </div>
            // Render loading message while data is being fetched
          )}
        </Col>
        <Col>
          {isOpen && (
            <div className='position-fixed top-0 start-0 end-0 bottom-0 z-index-100 d-flex flex-column justify-content-center align-items-center bg-black bg-opacity-75'>
              <span className='position-absolute top-0 bottom-0 end-0 start-0 z-3' onClick={handleCloseModal}></span>
              <div className='position-relative p-5 bg-white h-80vh w-50 rounded-3 overflow-auto z-index-100'>
                <div className='position-absolute end-0 p-4 pe-5 top-0' onClick={handleCloseModal}>
                  <div className='position-fixed'>
                    <CloseButton />
                  </div>
                </div>
                <div className='text-black'>
                  {selectedItem && (
                    <>
                      <div className='d-flex flex-column justify-content-between'>
                        <div>
                          <h2 className='text-red'>{selectedItem.title.rendered}</h2>
                          <div className='case-text text-whitethree-line-show' dangerouslySetInnerHTML={{ __html: selectedItem.content.rendered }} />
                        </div>
                        <div>
                          <Col className='d-flex flex-column justify-content-center align-items-center'>
                            <Link className="btn-14 z-0" href="/contact-us">Contact us</Link>
                          </Col>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </Col>
      </Container>

      <Container className="w-80 mt-5 d-flex justify-content-center mb-5">
        <Link href="/case-studies" className="btn-13 z-0">View All Case Studies</Link>
      </Container>
    </>
  )
}

export default HeroBanner
