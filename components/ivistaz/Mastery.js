"use client"
import Link from 'next/link'
import React from 'react';
import { Container } from 'react-bootstrap'

function Mastery({ handleScrollToResults }) {

  return (
    <Container className="w-80 pt-4 mb-5">
      <Container>
        <h1 className="fs-80 fw-bold">Mastery</h1>
      </Container>
      <Container>
        <p className="fs-20 fw-bold custom-text-clr">
          As an agency, we've mastered the intricacies of digital marketing over the years, crafting winning strategies rooted in deep insights. Through ongoing learning and training, we have adeptly navigated the digital landscape. Our commitment is reflected in our meticulous approach to every step, guiding clients to their digital goals with precision and mastery.
        </p>
      </Container>
      <Container>
        <Link className="btn btn-11" href="/mastery">Know More</Link>
      </Container>
    </Container>
  )
}

export default Mastery
