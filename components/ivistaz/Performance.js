"use client";
import Link from 'next/link';
import React from 'react';
import { Container } from 'react-bootstrap';

function Performance() {
  return (
    <Container className="w-80 pt-4 mb-5">
      <Container className='p-0' id="perf">
        <h1 className="fs-80 fw-bold ps-5 red">Performance</h1>
      </Container>
      <Container className='p-0'>
        <p className="fs-20 fw-bold red-50 ps-5 custom-performance-text">
          Over the years, iVistaz has excelled by partnering with clients to craft unforgettable digital journeys. As a revenue-driven digital marketing agency, we consistently strive to surpass expectations with every performance.
        </p>
      </Container>
      <Container className="p-0 mb-5">
        <Link className="btn ms-4 btn-11" href="/performance">Know More</Link>
      </Container>
    </Container>
  );
}

export default Performance;
