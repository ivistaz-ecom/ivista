import React, { useEffect, useRef, useState } from 'react'
import { Container, Row, Col, Button, Image, CloseButton } from 'react-bootstrap'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa";
import BannerAllPage from '../PropsShared/BannerAllPage';

import ConfigData from '../../config'

function HeroBanner() {

  const backgroundImage = {
    url: '/industrie/appliances_banner.jpg'
  };

  const mobileBackgroundImage = {
    url: '/industrie/mobile_industries_banner/appliances_mob_banner.jpg'
  };

  const bannerHeading = 'APPLIANCES'

  const [data, setData] = useState(null);

  const siteUrl = ConfigData.wpApiUrl;
  const serverUrl = ConfigData.SERVER;

  const categoryId = 11;

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
          The Indian Appliances and Consumer Electronics industry is expected to double to Rs.1.48 lac crore by 2025 <Link href="https://retail.economictimes.indiatimes.com/news/consumer-durables-and-information-technology/consumer-electronics/indian-appliances-consumer-electronic-industry-to-double-to-rs-1-48-crore-by-2025/95568165" target='_blank' className='hyper-link-red'>according to CEAMA</Link>.  A <Link href="https://yourstory.com/2022/10/indian-online-shoppers-migh-outnumber-us-shoppers-ecommerce" target='_blank' className='hyper-link-red'>recent report</Link> by Flipkart and Bain & Co says the number of online shoppers in India is likely to <span className='fw-bold'>grow to 400 million-450 million by 2027</span> from 180 million-190 million in 2021 <span className='fw-bold'>and appliances</span> (along with mobiles and electronics) <span className='fw-bold'> will have among the highest market shares at 25-30%</span>.
        </p>
      </Container>
      <Container className="iv-bg w-80 banner p-5">
        <p className="text-white para-text">The size of customers doing research online and buying offline is rapidly shrinking. More and more buyers are now comfortable buying even large appliances online. Undoubtedly, you would be looking to capitalize on this opportunity.</p>
        <p className="text-white para-text"> Our carefully tailored digital marketing strategies will help<span className='fw-bold'> to increase online sales both on your brand e-store as well as on marketplaces</span>.</p>
        <Container className="text-center">
          <Col className='d-flex flex-column justify-content-center align-items-center'>
            <Link className="btn-14 z-0" href="/contact-us">Contact us</Link>
          </Col>
        </Container>
      </Container>

      <Container className="mt-5 mb-5 w-80">
        <p className="fs-2 text-white">Here’s how we have helped appliance brands to win in the e-commerce channel:</p>
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

        <Container className="w-80 mt-5 d-flex justify-content-center mb-5 z-0">
          <Link href="/case-studies" className="btn-13 z-0">View All Case Studies</Link>
        </Container>

      </Container>


    </>
  )
}

export default HeroBanner
