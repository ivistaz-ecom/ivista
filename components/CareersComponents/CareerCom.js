import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { CloseButton, Col, Container, Row } from 'react-bootstrap'
import ConfigData from '../../config';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import CareerForms from '../Forms/CareerForms';

const CareerCom = () => {

    const options = [
        { value: 'account_manager', label: 'Account Manager/Client Servicing' },
        { value: 'content_writer', label: 'Content Writer' },
        { value: 'ui_ux_designer', label: 'UI/UX Designer' },
        { value: 'front_end_developer', label: 'Front-End Developer' },
        { value: 'back_end_developer', label: 'Back-End Developer' },
        { value: 'paid_marketing_specialist', label: 'Paid Marketing Specialist' },
        { value: 'seo', label: 'SEO' }
    ];

    const categoryId = 25;

    const [data, setData] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [visibleItems, setVisibleItems] = useState(4);

    const siteUrl = ConfigData.wpApiUrl;
    const serverUrl = ConfigData.SERVER;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${siteUrl}/careers?categories=${categoryId}&_embed&production_mode[]=${serverUrl}`);
                const data = await response.json();
                setData(data);
                // console.log(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [siteUrl, serverUrl]); // Include dependencies in useEffect dependency array

    const handleLoadMore = () => {
        setVisibleItems((prevCount) => prevCount + 3);
    };

    const handleShowModal = (item) => {
        setSelectedItem(item);
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
        setSelectedItem(null);
    };
    return (
        <>
            <style>
                {`
                input[type="file"] {
                    color: white;
                }
            `}
            </style>
            <Container className="w-80 custom-container bg-white text-black">
                <Row className='d-flex flex-column'>
                    <Col className='mb-4 text-black'>
                        <h1 className="fs-21 text-black fw-bold">CAREERS</h1>
                        <p className="text-black para-text">
                            Discover the exceptional career opportunities at iVista. Join our dynamic team and collaborate with talented professionals and esteemed clients. Engage in innovative projects that make a significant impact, while embracing a professional work culture characterized by positivity and dedication. Unleash your full potential and together, let&apos;s redefine the possibilities in the digital marketing industry.
                        </p>
                    </Col>

                    <Col>
                        <h2 className="fs-21 text-black fw-bold">CURRENT OPENING</h2>
                    </Col>
                </Row>

                <Col className='z-3'>
                    {data ? (
                        data.length > 0 ? ( // Check if data is available and not empty
                            data.slice(0, visibleItems).map((item) => (
                                <>
                                    <Row className='border-0 custom-career d-flex flex-lg-row flex-column mt-3 shadow-lg' key={item.id}>
                                        <Col className='list-group-1 border-0' lg={10}>
                                            <div className="d-flex justify-content-between align-items-center border-0">
                                                <div className="ms-2 me-auto">
                                                    <p className="fw-bold fs-3 m-3 text-black" dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
                                                    <p className="case-text m-3 text-black two-line-show" dangerouslySetInnerHTML={{ __html: item.content.rendered }} />
                                                </div>
                                                {/* <div>
                                                    <FaArrowRight size={30} className="case-icon text-white" onClick={() => handleShowModal(item)} />
                                                </div> */}
                                            </div>
                                        </Col>
                                        <Col className='d-flex flex-column justify-content-center align-items-center'>
                                            <button type="button" class="btn btn-15 bg-black text-white z-0" onClick={() => handleShowModal(item)} >Apply</button>
                                        </Col>
                                    </Row>
                                </>
                            ))
                        ) : (
                            <div className='text-black'>
                                <span>Currently No Openings</span>
                            </div>
                        )
                    ) : (
                        <div className='text-white'>
                            <div className="spinner-border text-danger" role="status"></div>
                            <span className="text-black">Loading...</span>
                        </div>
                    )}
                </Col>

                <Col className='text-center'>
                    {data.length > visibleItems && (
                        // <Button className="bg-red-btn cursor-pointer" >Load More</Button>
                        <button type="button" class="btn btn-15 my-5" onClick={handleLoadMore}>Load More</button>
                    )}
                </Col>
                <Row>
                    <Col lg={6}>

                    </Col>

                    <Col>
                        {isOpen && (
                            <div className='position-fixed top-0 start-0 end-0 bottom-0 z-index-100 d-flex flex-column justify-content-center align-items-center bg-black bg-opacity-75'>
                                <span className='position-absolute top-0 bottom-0 end-0 start-0 z-3' onClick={handleCloseModal}></span>
                                <div className='position-relative p-5 bg-white h-80vh w-50 rounded-3 overflow-auto z-index-100'>
                                    <div className='position-absolute end-0 p-4 pe-5 top-0' onClick={handleCloseModal}>
                                        <div className='position-fixed'>
                                            <CloseButton />
                                        </div>
                                    </div>
                                    <div className='text-black'>
                                        {selectedItem && (
                                            <>
                                                <CareerForms className="z-index-100" />
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </Col>
                </Row>
                <p className="para-text text-black mt-3">We value your privacy and will handle your information with utmost confidentiality. By submitting this form, you agree to our Privacy Policy.</p>
            </Container >
        </>
    )
}

export default CareerCom