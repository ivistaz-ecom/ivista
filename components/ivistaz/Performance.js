"use client"
import Link from 'next/link'
import React from 'react'
import { Container } from 'react-bootstrap'

function Performance() {
    return (
        <>
            <Container className="mb-5" fluid>
                <Container className="w-80 pt-4 pb-5">
                    <h1 className="fs-80 fw-bold red">Performance</h1>
                </Container>
                <Container className="w-80">
                    <p className="fs-20 fw-bold red-50">
                        Over the years, iVistaz has excelled by partnering with clients to craft unforgettable digital journeys, consistently striving to surpass expectations with every performance.
                    </p>
                </Container>
                <Container className="w-80 pb-5">
                    <Link className="btn btn-11" href="/performance">Know More</Link>
                </Container>
            </Container>

        </>
    )
}

export default Performance
