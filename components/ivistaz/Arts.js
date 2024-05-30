"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import ScrollAnimation from '../SharedComponents/ScrollAnimation'

function Arts() {

    return (
        <>

            <ScrollAnimation />
            <Container className="bg-black z-0" fluid>
                <Container className="w-80 py-5 mb-5 ps-4">
                    <Container>
                        <h1 className="fs-80 fw-bold text-white">Art</h1>
                    </Container>
                    <Container>
                        <p className="fs-20 fw-bold text-white-50 timeline-item" >
                            We’ve been crafting and creating art that captivates and resonates with our clients and their audiences. As the digital world continues to evolve, we have kept pace, adapting our strategies to the ever-changing landscape. With personalized solutions and a commitment to live up to client’s expectations, we delivered what was expected of us. Our point of differentiation was the performance-focused model, which earned us a reputation for excellence making us a trusted choice for over 300 brands.
                        </p>
                    </Container>
                    <Container>
                        <Link className="btn btn-12" href="/art">Know More</Link>
                    </Container>
                </Container>
            </Container>

        </>
    )
}

export default Arts
