'use client'
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios'; // Don't forget to import axios

import ConfigData from '../../config';


const ContactForm = () => {
    const siteUrl = ConfigData.apiDomainUrl;

    const [post, setPost] = React.useState(null);
    const [errors, setErrors] = useState({});

    const [yourName, setyourName] = React.useState(null);
    const [yourEmail, setyourEmail] = React.useState(null);
    const [yourPhone, setyourPhone] = React.useState(null);
    const [yourCompany, setyourCompany] = React.useState(null);
    const [yourMessage, setyourMessage] = React.useState(null);
    const [loading, setLoading] = useState(false);

    const [submitted, setSubmitted] = useState(false);


    // Email Validation
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const customErrors = {
        field: 'yourEmail',
        message: 'Please enter a valid email address.'
    };
    const customDomainErrors = {
        field: 'yourEmail',
        message: 'This email domain is not allowed.'
    };
    const notAllowedDomains = ['test.com', 'sample.com', 'example.com', 'testing.com', 'gmail.co', 'gmail.c', 'gmail.'];

    const isValidEmail = (email) => {
        const [, domain] = email.split('@');
        return notAllowedDomains.includes(domain);
    };
    // Email validaion end

    // Name Validation
    const nameRegex = /^[a-zA-Z\s]*$/;
    const nameErrors = {
        field: 'yourName',
        message: 'Invalid character in name'
    };

    const numRegex = /^[0-9]*$/;
    const numErrors = {
        field: 'yourPhone',
        message: 'Invalid phone number'
    };

    const handleTextChange = e => {
        const { name, value } = e.target;

        if (name === 'yourName') {
            if (!nameRegex.test(value)) {
                const fieldErrors = {};
                const { field, message } = nameErrors;
                fieldErrors[field] = message;
                setErrors(fieldErrors);
            } else {
                // Name format is valid, clear any previous errors
                setErrors({});
                // Update the name state
                setyourName(value);
                console.log(value);
            }
        }

        if (name === 'yourEmail') {
            if (!emailRegex.test(value)) {
                const fieldErrors = {};
                const { field, message } = customErrors;
                fieldErrors[field] = message;
                setErrors(fieldErrors);
            } else if (isValidEmail(value)) {
                const fieldErrors = {};
                const { field, message } = customDomainErrors;
                fieldErrors[field] = message;
                setErrors(fieldErrors);
            } else {
                // Email format and domain are valid, clear any previous errors
                setErrors({});
            }
            // Always update the email state
            setyourEmail(value);
        }

        if (name === 'yourPhone') {
            if (!numRegex.test(value)) {
                const fieldErrors = {};
                const { field, message } = numErrors;
                fieldErrors[field] = message;
                setErrors(fieldErrors);
            } else {
                // Phone number format is valid, clear any previous errors
                setErrors({});
                setyourPhone(value);
                console.log(value)
            }
        }

        if (name === 'yourCompany') {
            setyourCompany(value)
            console.log(value);
        }
        if (name === 'yourMessage') {
            setyourMessage(value)
            console.log(value)
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        createPost();
    };

    const resetForm = () => {
        setyourName('');
        setyourEmail('');
        setyourPhone('');
        setyourCompany('');
        setyourMessage('');
    };

    function createPost() {
        setErrors({});
        axios.post(`https://docs.ivistaz.com/wp-json/contact-form-7/v1/contact-forms/271/feedback`,
            // axios.post(`https://docs.walmartvriddhi.org/wp-json/contact-form-7/v1/contact-forms/239/feedback`,
            {
                'yourName': { yourName },
                'yourEmail': { yourEmail },
                'yourPhone': { yourPhone },
                'yourCompany': { yourCompany },
                'yourMessage': { yourMessage },
            }, {
            headers: {
                "Content-Type": 'multipart/form-data',
            }
        })

            .then((response) => {
                setPost(response.data.message);
                const msg = response.data.status;
                if (msg == 'mail_sent') {
                    setLoading(true);
                    console.log(msg)
                    resetForm();

                    document.getElementById("yourEmail").value = "";
                    document.getElementById("yourName").value = "";
                    document.getElementById("yourPhone").value = "";
                    document.getElementById("yourCompany").value = "";
                    document.getElementById("yourMessage").value = "";
                }
                else if (msg == 'validation_failed') {
                    const fieldErrors = {};
                    const { status, invalid_fields } = response.data;
                    invalid_fields.forEach((field) => {
                        fieldErrors[field.field] = field.message;
                    });
                    setErrors(fieldErrors);
                    console.log(fieldErrors);
                }
                console.log(response.data)
            });
    }

    return (
        <Container>

            <style>
                {
                    `
                h1.reg-success.mt-4 {
                    color: green !important;
                    font-size: 22px !important;
                    font-weight: 700 !important;
                }
                `
                }
            </style>

            {!submitted ? (
                <form className="row p-0 z-index-100">
                    {/* Name */}
                    <div className="mb-3">
                        <label htmlFor="yourName" className="form-label text-white">Full Name <sup className='text-danger'>*</sup></label>
                        <input
                            type="text"
                            className={`form-control ${errors && errors.yourName ? 'is-invalid' : ''}`}
                            required
                            id="yourName"
                            name="yourName"
                            value={yourName}

                            onChange={handleTextChange}
                        />
                        {errors && errors.yourName && <div className="invalid-feedback">{errors.yourName}</div>}
                    </div>

                    {/* Email */}
                    <div className="mb-3">
                        <label htmlFor="yourEmail" className="form-label text-white">Email <sup className='text-danger'>*</sup></label>
                        <input
                            type="email"
                            className={`form-control ${errors && errors.yourEmail ? 'is-invalid' : ''}`}
                            required
                            id="yourEmail"
                            name="yourEmail"
                            value={yourEmail}
                            onChange={handleTextChange}
                        />
                        {errors && errors.yourEmail && <div className="invalid-feedback">{errors.yourEmail}</div>}
                    </div>

                    {/*  Mobile */}
                    <div className="mb-3">
                        <label htmlFor="yourPhone" className="form-label text-white">Phone <sup className='text-danger'>*</sup></label>
                        <input
                            type="text"
                            className={`form-control ${errors && errors.yourPhone ? 'is-invalid' : ''}`}
                            required
                            id="yourPhone"
                            name="yourPhone"
                            value={yourPhone}
                            onChange={handleTextChange}
                        />
                        {errors && errors.yourPhone && <div className="invalid-feedback">{errors.yourPhone}</div>}
                    </div>

                    {/* Your Company */}
                    <div className="mb-3">
                        <label htmlFor="yourCompany" className="form-label text-white">Company <sup className='text-danger'>*</sup></label>
                        <input
                            type="text"
                            className={`form-control ${errors && errors.yourCompany ? 'is-invalid' : ''}`}
                            required
                            id="yourCompany"
                            name="yourCompany"
                            value={yourCompany}
                            onChange={handleTextChange}
                        />
                        {errors && errors.yourCompany && <div className="invalid-feedback">{errors.yourCompany}</div>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="yourMessage" className="form-label text-white">Message</label>
                        <textarea
                            type="text"
                            className="form-control"
                            id="yourMessage"
                            name="yourMessage"
                            value={yourMessage}
                            onChange={handleTextChange}
                            rows="5"
                        />
                        {errors && errors.yourMessage && <div className="invalid-feedback">{errors.yourMessage}</div>}
                    </div>

                    {/* Submit Button */}
                    <div className="mt-3 text-center">
                        <div class="text-center">
                            <button
                                type="button"
                                class="btn btn-15"
                                onClick={handleSubmit}
                            >
                                Submit
                            </button>
                        </div>
                        {loading && <h1 class="reg-success mt-4">{post}</h1>}
                    </div>
                </form>
            ) : (
                <div>
                    <p>Thank you for your submission!</p>
                </div>
            )}
        </Container>
    );
};
export default ContactForm;
