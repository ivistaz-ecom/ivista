"use client"
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaBars } from "react-icons/fa";
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Header1() {
  const pathname = usePathname()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <style>
        {
          `
        .dropdown-menu.show {
          border: 0pc !important;
          position: absolute;
          inset: auto auto 0px 0px; 
          min-height: 50vh !important;
        }

        .offcanvas-body {
          display: flex !important;
          flex-direction: column !important;
          flex-wrap: wrap !important;
          justify-content: space-between !important;
        }

        @media (max-width:767px){
          .dropdown-menu.show {
          min-height: auto !important;
        }
        }
        `
        }
      </style>

      <Container className="p-0 position-fixed z-index-100" fluid>
        <Container className='w-80'>
          <nav class="navbar bg-color z-index-100">
            <div class="container-fluid p-0">
              <Link class="navbar-brand" href="/ivistaz" className='z-index-100'>
                <Image src="/images/ivista_logo.svg" width={200} height={40} className="img-fluid z-index-100" alt='' />
              </Link>
              <Button
                onClick={handleShow}
                className={(
                  pathname === '/art' ||
                  pathname === '/art/services' ||
                  pathname === '/art/services/digital-marketing' ||
                  pathname === '/art/services/content-development-design' ||
                  pathname === '/art/services/design-development'
                )
                  ? "btn btn-outline-black"
                  : (pathname === '/service/website-design-and-development' ||
                    pathname === '/service/search-engine-optimization' ||
                    pathname === '/service/search-engine-marketing' ||
                    pathname === '/service/organic-social-media' ||
                    pathname === '/service/social-media-marketing' ||
                    pathname === '/service/social-media-marketing' ||
                    pathname === '/service/content-development-b2b-b2c' ||
                    pathname === '/service/design' ||
                    pathname === '/service/videos' ||
                    pathname === '/our-clients'
                  )
                    ? "btn btn-outline-custom" // Change this to your desired class for /design and /about
                    : "btn btn-outline"
                }
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation">
                <FaBars size={27}
                  onClick={handleShow}
                />
              </Button>
            </div>
          </nav>
        </Container>

        <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Row className='d-flex flex-column justify-content-between h-100 z-index-100'>
              <Col>
                <Container className="text-center">
                  <Link class="navbar-brand" href="/ivistaz" className='d-flex flex-column justify-content-center align-items-center'>
                    <Image src="/images/ivista_logo.svg" width="200" height={100} alt='' className='d-lg-none d-flex text-center' />
                  </Link>
                </Container>
                <ul class="navbar-nav text-center flex-grow-1 pe-3">
                  <NavDropdown title="Services" id="navbarScrollingDropdown" className='border-0'>
                    <NavDropdown.Item href="/service/website-design-and-development">
                      Web Design & Development
                    </NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    <NavDropdown.Item href="/service/search-engine-optimization">
                      Search Engine Optimization
                    </NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    <NavDropdown.Item href="/service/search-engine-marketing">
                      Search Engine Marketing
                    </NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    <NavDropdown.Item href="/service/organic-social-media">
                      Social Media - Organic
                    </NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    <NavDropdown.Item href="/service/social-media-marketing">
                      Social Media Marketing
                    </NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    <NavDropdown.Item href="/service/content-development-b2b-b2c">
                      Content Development (B2B & B2C)
                    </NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    <NavDropdown.Item href="/service/design">
                      Design
                    </NavDropdown.Item>
                    {/* <NavDropdown.Divider />
              <NavDropdown.Item href="/service/videos">
                Videos
              </NavDropdown.Item> */}
                  </NavDropdown>
                  <li className="divider-center">
                    <hr class="m-divider" />
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" href="/mastery/solutions">Solutions</Link>
                  </li>
                  <li className="divider-center">
                    <hr class="m-divider" />
                  </li>
                  <NavDropdown title="Industries" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="/industries/appliances">Appliances</NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    <NavDropdown.Item href="/industries/automobiles">Automobiles</NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    <NavDropdown.Item href="/industries/beauty-wellness">Beauty & Wellness</NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    <NavDropdown.Item href="/industries/fashion-accessories">Fashion & Accessories</NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    <NavDropdown.Item href="/industries/hospitality">Hospitality</NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    <NavDropdown.Item href="/industries/jewellery">Jewellery</NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    <NavDropdown.Item href="/industries/ngos">Not-for-Profits/NGOs</NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    <NavDropdown.Item href="/industries/technology-IT">Tech/IT</NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}

                    {/* <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item> */}
                  </NavDropdown>


                  <li className="divider-center">
                    <hr class="m-divider" />
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" href="/case-studies">Case Studies</Link>
                  </li>
                  <li className="divider-center">
                    <hr class="m-divider" />
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" href="/blogs">Blog</Link>
                  </li>
                  <li className="divider-center">
                    <hr class="m-divider" />
                  </li>

                  <NavDropdown title="Company" id="navbarScrollingDropdown" className='custom-nav-company'>
                    <NavDropdown.Item href="/get-in-touch">Team</NavDropdown.Item>
                    <NavDropdown.Item href="/mastery/about-us">About Us</NavDropdown.Item>
                    <NavDropdown.Item href="/careers">Careers</NavDropdown.Item>
                    <NavDropdown.Item href="/map-philosophy">Map Philosophy</NavDropdown.Item>
                  </NavDropdown>
                  {/* <li className="divider-center">
              <hr class="m-divider" />
            </li> */}
                  {/* <li class="nav-item">
              <Link class="nav-link active" aria-current="page" href="/careers">Careers</Link>
            </li> */}

                  <li className="divider-center">
                    <hr class="m-divider" />
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" href="/contact-us">Contact</Link>
                  </li>
                </ul>
              </Col>


            </Row>
          </Offcanvas.Body>

          <Col className='d-flex flex-column justify-content-end z-index-100 pb-2'>
            <div className='d-flex flex-row justify-content-center align-items-center'>
              <div>
                Follow Us:
              </div>
              <div className="d-flex align-items-center justify-content-start">
                <Link href="https://www.linkedin.com/company/ivistawebsolutions/mycompany/" target='_blank'>
                  <Image src="/images/linkedin.svg" width={43} height={43} className="social" alt='' />
                </Link>
                <Link href="https://www.instagram.com/ivistawebsolutions/" target='_blank'>
                  <Image src="/images/instagram.svg" width={44} height={44} className="social" alt='' />
                </Link>
                <Link href="https://www.facebook.com/ivistasolutions/" target='_blank'>
                  <Image src="/images/facebook.svg" width={40} height={40} className="social" alt='' />
                </Link>
                <Link href="https://twitter.com/ivistasolutions?lang=en" target='_blank'>
                  <Image src="/images/twitter.svg" width={44} height={44} className="social" alt='' />
                </Link>
              </div>
            </div>
          </Col>
        </Offcanvas>

      </Container>
    </>
  )
}

export default Header1