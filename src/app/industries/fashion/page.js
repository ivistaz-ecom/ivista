'use client'
import React from 'react'
import { Container } from 'react-bootstrap'
import Header from '../../../../components/HeaderBlack'
import HeroBanner from '../../../../components/Fashion/HomeBanner'
import Footer from '../../../../components/Footer'

import FashionComponents from '../../../../components/Fashion'

function page() {
    return (
        // <Container fluid className="bg-black pb-5">
        //     <Header />
        //     <HeroBanner />
        //     <Footer />
        // </Container>
        <>
            <FashionComponents />
        </>
    )
}

export default page
