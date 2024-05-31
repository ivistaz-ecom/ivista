"use client"
import Link from 'next/link'
import React from 'react'
import { Container } from 'react-bootstrap'

function Performance() {
    return (
    
             <Container className="w-80 pt-4 mb-5">
 <Container>
                    <h1 className="fs-80 fw-bold ps-4 red ">Performance</h1>
                </Container>
                <Container>
                    <p className="fs-20 fw-bold red-50 ps-4">
                        Over the years, iVistaz has excelled by partnering with clients to craft unforgettable digital journeys, consistently striving to surpass expectations with every performance.
                    </p>
                </Container>
                <Container className="ms-4 pb-5">
                    <Link className="btn btn-11" href="/performance">Know More</Link>
                </Container>
            </Container>


 
        
    )
}

export default Performance
