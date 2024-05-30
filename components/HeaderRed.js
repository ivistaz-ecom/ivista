"use client"
import React from 'react'
import { Container } from 'react-bootstrap'
import { FaBars } from "react-icons/fa";
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
function Header1() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container className="iv-bg z-index-100" fluid>
      <Container>
        <nav class="navbar bg-color">
          <div class="container-fluid">
            <Link class="navbar-brand" href="/">
              <Image src="/images/ivista_logo.svg" width={200} height={40} className="img-fluid" /></Link>
            <button class="btn btn-outline" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <FaBars size={27} />
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div class="offcanvas-header justify-content-end">
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
                <Container className="text-center"><Link class="navbar-brand" href="/">
                  <Image src="/images/ivista_logo.svg" width="300" height={100} /></Link>
                </Container>
                <ul class="navbar-nav text-center flex-grow-1 pe-3">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Services</a></li>
                  <li className="divider-center">
                    <hr class="m-divider" />
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Solutions</a>
                  </li>
                  <li className="divider-center">
                    <hr class="m-divider" />
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Industries</a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="/industries/automobiles/ ">Automobiles</a></li>
                      <li><hr class="dropdown-divider" /></li>
                      <li><a class="dropdown-item" href="/industries/technology-IT">Tech/IT</a></li>
                      <li><hr class="dropdown-divider" /></li>
                      <li><a class="dropdown-item" href="/industries/hospitality"> Hospitality</a></li>
                      <li><hr class="dropdown-divider" /></li>
                      <li><a class="dropdown-item" href="/industries/appliances">Appliances</a></li>
                      <li><hr class="dropdown-divider" /></li>
                      <li><a class="dropdown-item" href="/industries/ngos">Not-for-Profits/NGOs</a></li>
                      <li><hr class="dropdown-divider" /></li>
                      <li><a class="dropdown-item" href="/industries/jewellery">Jewellery</a></li>
                      <li><hr class="dropdown-divider" /></li>
                      <li><a class="dropdown-item" href="/industries/beauty-wellness">Beauty & Wellness</a></li>
                      <li><hr class="dropdown-divider" /></li>
                      <li><a class="dropdown-item" href="/industries/fashion-accessories">Fashion & Accessories</a></li>
                    </ul>
                  </li>
                  <li className="divider-center">
                    <hr class="m-divider" />
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Case Studies</a>
                  </li>
                  <li className="divider-center">
                    <hr class="m-divider" />
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Blog</a>
                  </li>
                  <li className="divider-center">
                    <hr class="m-divider" />
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">About</a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Team</a></li>
                      <li><hr class="dropdown-divider" /></li>
                      <li><a class="dropdown-item" href="#">Team</a></li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li><a class="dropdown-item" href="#">Team</a></li>
                    </ul>
                  </li>
                  <li className="divider-center">
                    <hr class="m-divider" />
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Contact</a>
                  </li>
                </ul>


              </div>
            </div>
          </div>
        </nav>
      </Container>
    </Container>
  )
}

export default Header1