"use client";
import Link from 'next/link';
import React from 'react';
import { Container } from 'react-bootstrap';

function Mastery() {
  return (
    <Container className="w-80 mt-4 mb-5">
      <Container className='p-0' id="mastery">
        <h1 className="fs-80 fw-bold ps-5">Mastery</h1>
      </Container>
      <Container className='p-0'>
        <p className="fs-20 fw-bold custom-text-clr ps-5">
          As a performance-marketing agency, we've mastered the intricacies of digital marketing over the years, crafting winning strategies rooted in deep insights. Through ongoing learning and training, we have adeptly navigated the digital landscape. Our commitment is reflected in our meticulous approach to every step, guiding clients to their digital goals with precision and mastery.
        </p>
      </Container>
      <Container className='p-0'>
        <Link className="btn btn-11 ms-4 z-0" href="/mastery">Know More</Link>
      </Container>
    </Container>
  );
}

export default Mastery;
