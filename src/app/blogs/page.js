"use client"
import React from 'react';

import BlogComponents from '../../../components/BlogsComponentes/'
import { Container } from 'react-bootstrap';
import Header1 from '../../../components/HeaderBlack';
import Footer from '../../../components/Footer';

function page() {

  return (
    <>
      <Container fluid className='p-0 bg-black'>
        <Header1 />

        <BlogComponents />

        <Footer />
      </Container>
    </>
  )
}

export default page
