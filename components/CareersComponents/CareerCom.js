import Image from 'next/image'
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

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

    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const [selectedFile, setSelectedFile] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
            if (allowedTypes.includes(file.type)) {
                if (file.size <= 5 * 1024 * 1024) { // 5MB in bytes
                    setSelectedFile(file);
                    setErrorMessage('');
                } else {
                    setSelectedFile(null);
                    setErrorMessage('File size exceeds the maximum limit of 5MB.');
                }
            } else {
                setSelectedFile(null);
                setErrorMessage('Only PDF or Word files are allowed.');
            }
        }
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
            <Container className="w-80 custom-container">
                <Row className='d-flex flex-column'>
                    <Col className='mb-4'>
                        <h1 className="fs-21 text-white fw-bold">CAREERS</h1>
                        <p className="text-white para-text">
                            Discover the exceptional career opportunities at iVista. Join our dynamic team and collaborate with talented professionals and esteemed clients. Engage in innovative projects that make a significant impact, while embracing a professional work culture characterized by positivity and dedication. Unleash your full potential and together, let&apos;s redefine the possibilities in the digital marketing industry.
                        </p>
                    </Col>

                    <Col>
                        <h2 className="fs-21 text-white fw-bold">CURRENT OPENING</h2>
                        <p className="text-white para-text">
                            Designer Position
                        </p>
                        <p className="text-red para-text fw-bolder">
                            We’re Looking for a Designer
                        </p>

                        <Row>
                            <Col lg={9}>
                                <p className="text-white para-text">
                                    If you have a sharp eye for design and can transform concepts into visual stories, we want you. As our designer, you’ll work on a variety of projects, bringing creativity and consistency to the brand’s visual identity. Proficiency in design software and a portfolio showcasing your digital and print media skills are essential. Collaboration is key, as you’ll be part of a team that values innovation and aesthetics.
                                </p>
                            </Col>

                            <Col className='d-flex flex-column justify-content-center align-items-center'>
                                <button type="button" class="btn btn-15">Apply</button>
                            </Col>
                        </Row>
                    </Col>

                    <Col className='mb-4 iv-bg rounded-4 p-4'>

                        <p className="text-white para-text fw-bolder">
                            SEO Specialist Position
                        </p>
                        <p className="text-white para-text fw-bolder">
                            Seeking an SEO Specialist
                        </p>
                        <Row>
                            <Col lg={9}>
                                <p className="text-white para-text">
                                    Our team needs someone who can navigate the complexities of search engines and improve our website’s visibility. As our SEO specialist, you’ll optimize our content for search engines, track and analyze performance metrics, and stay updated with SEO trends and algorithm changes. A blend of technical skills and a strategic mindset is crucial for this role. Your work will directly influence our brand’s reach and success.
                                </p>
                            </Col>
                            <Col className='d-flex flex-column justify-content-center align-items-center'>
                                <button type="button" class="btn btn-15">Apply</button>
                            </Col>
                        </Row>

                        <p className="text-white para-text fw-bolder">
                            Do you have it in you?
                        </p>
                    </Col>
                    <Col className='d-flex flex-column justify-content-center align-items-center'>
                        <button type="button" class="btn btn-15 my-5">Load More</button>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <h1 className="fs-21 text-white fw-bold">GET IN TOUCH</h1>
                        <form class="row g-3 pt-4 mt-3">
                            <div class="mb-3">
                                <label for="formFile" class="form-label">Full Name *</label>
                                <input class="form-control" type="text" id="formFile" />
                            </div>
                            <div class="mb-3">
                                <label for="formFile" class="form-label">Mobile Number *</label>
                                <input class="form-control" type="text" id="formFile" />
                            </div>
                            <div class="mb-3">
                                <label for="formFile" class="form-label">Email *</label>
                                <input class="form-control" type="text" id="formFile" />
                            </div>
                            <div class="mb-3">
                                <label for="formFile" class="form-label w-100">Job Type</label>

                                <select value={selectedOption} onChange={handleChange} className='w-100 p-2 rounded-3'>
                                    <option value="">Job Type</option>
                                    {options.map(option => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                                {/* {selectedOption && (
                                    <p>You selected: {options.find(option => option.value === selectedOption).label}</p>
                                )} */}
                            </div>
                            <div class="mb-3">
                                <label for="formFile" accept=".pdf,.doc,.docx" class="form-label w-100">Attach your CV </label>
                                <input type="file" onChange={handleFileChange} />
                                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                                {selectedFile && (
                                    <div>
                                        {/* <p className="text-white para-text">Selected file: {selectedFile.name}</p> */}
                                        <p className="text-white para-text">Size: {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB</p>
                                    </div>
                                )}
                            </div>
                            <div class="mb-3 text-center">
                                <button type="button" class="btn btn-15">Submit</button>
                            </div>
                        </form>
                    </Col>
                    <Col lg={6} className="d-flex justify-content-center align-items-center">
                        <Container className="iv-bg contact pt-lg-o p-3">
                            <h1 className="contact-head pb-4">iVistaz Ecom Services Pvt Ltd</h1>
                            <p className="contact-text text-center">RELIAABLE PHOENIX TOWERS</p>
                            <p className="contact-text text-center">4th Floor, 16 & 16/1,</p>
                            <p className="contact-text text-center">Museum Road</p>
                            <p className="contact-text text-center">BENGALURU, KA 560025</p>
                            <Container className="text-center pt-5">
                                <Row className="g-0 pb-lg-0 pb-3">
                                    <Col className="d-flex align-items-center justify-content-end">
                                        <p className="footer-text">Follow Us:</p>
                                    </Col>
                                    <Col className="d-flex align-items-center justify-content-start">
                                        <Image src="/images/facebook.svg" width={40} height={40} className="social" alt='' />
                                        <Image src="/images/linkedin.svg" width={43} height={43} className="social" alt='' />
                                        <Image src="/images/instagram.svg" width={44} height={44} className="social" alt='' />
                                        <Image src="/images/twitter.svg" width={44} height={44} className="social" alt='' />
                                    </Col>
                                </Row>
                            </Container>
                        </Container>

                    </Col>
                </Row>
                <p className="para-text text-white">We value your privacy and will handle your information with utmost confidentiality. By submitting this form, you agree to our Privacy Policy.</p>
            </Container >
        </>
    )
}

export default CareerCom