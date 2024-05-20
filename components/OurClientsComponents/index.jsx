import React from 'react'
import Header1 from '../HeaderBlack'
import OurClientsContent from './OurClientsContent'
import OurClientsLogs from './OurClientsLogs'
import { Container } from 'react-bootstrap'

const index = () => {
    return (
        <>

            <Container fluid className='p-0 bg-black'>
                <Header1 />
                <Container className='custom-container'>
                    <OurClientsContent />
                    <OurClientsLogs />
                </Container>
            </Container>
        </>
    )
}

export default index
