'use client'
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios'; // Don't forget to import axios
import Link from 'next/link';
// text 
import ConfigData from '../../config';

const CareerForms = () => {
    const siteUrl = ConfigData.apiDomainUrl;

    const [post, setPost] = React.useState(null);
    const [errors, setErrors] = useState({});
    const [yourName, setyourName] = React.useState('');
    const [yourEmail, setyourEmail] = React.useState('');
    const [yourPhone, setyourPhone] = React.useState('');
    const [yourJobType, setyourJobType] = React.useState('');
    const [yourFile, setyourFile] = React.useState(null);
    const [loading, setLoading] = useState(false);

    const options = [
        { value: 'account_manager', label: 'Account Manager' },
        { value: 'inside_sales_executive', label: 'Inside Sales Executive' },
        { value: 'account_executive', label: 'Account Executive' },
        { value: 'ui_ux_designer', label: 'UI/Graphic Designer' },
        // { value: 'account_manager', label: 'Account Manager/Client Servicing' },
        // { value: 'content_writer', label: 'Content Writer' },
        // { value: 'front_end_developer', label: 'Front-End Developer' },
        // { value: 'back_end_developer', label: 'Back-End Developer' },
        // { value: 'paid_marketing_specialist', label: 'Paid Marketing Specialist' },
        // { value: 'seo', label: 'SEO' }
    ];

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
        return !notAllowedDomains.includes(domain);
    };

    // Name Validation
    const nameRegex = /^[a-zA-Z\s]*$/;
    const nameErrors = {
        field: 'yourName',
        message: 'Invalid character in name'
    };

    // Mobile Number validation
    const numRegex = /^[0-9]+$/;
    const numErrors = {
        field: 'yourPhone',
        message: 'Please enter a valid phone number.'
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
                setErrors({});
                setyourName(value);
            }
        }

        if (name === 'yourEmail') {
            if (!emailRegex.test(value)) {
                const fieldErrors = {};
                const { field, message } = customErrors;
                fieldErrors[field] = message;
                setErrors(fieldErrors);
            } else if (!isValidEmail(value)) {
                const fieldErrors = {};
                const { field, message } = customDomainErrors;
                fieldErrors[field] = message;
                setErrors(fieldErrors);
            } else {
                setErrors({});
            }
            setyourEmail(value);
        }

        if (name === 'yourPhone') {
            if (!numRegex.test(value)) {
                const fieldErrors = {};
                const { field, message } = numErrors;
                fieldErrors[field] = message;
                setErrors(fieldErrors);
            } else {
                setErrors({});
                setyourPhone(value);
            }
        }

        if (name === 'yourJobType') {
            if (value === 'Job Type') {
                const fieldErrors = {};
                fieldErrors['yourJobType'] = 'Please select a job type';
                setErrors(fieldErrors);
            } else {
                setErrors({});
                setyourJobType(value);
            }
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
        setyourJobType('');
        setyourFile(null);
    };

    const createPost = () => {
        setErrors({});
        const formData = new FormData();
        formData.append('yourName', yourName);
        formData.append('yourEmail', yourEmail);
        formData.append('yourPhone', yourPhone);
        formData.append('yourJobType', yourJobType);
        if (yourFile) {
            formData.append('yourFile', yourFile);
        }

        axios.post(`https://docs.ivistaz.com/wp-json/contact-form-7/v1/contact-forms/239/feedback`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
            .then((response) => {
                setPost(response.data.message);
                const msg = response.data.status;
                if (msg === 'mail_sent') {
                    setLoading(true);
                    resetForm();
                } else if (msg === 'validation_failed') {
                    const fieldErrors = {};
                    const { invalid_fields } = response.data;
                    invalid_fields.forEach((field) => {
                        fieldErrors[field.field] = field.message;
                    });
                    setErrors(fieldErrors);
                }
            })
            .catch(error => {
                console.error('There was an error submitting the form!', error);
            });
    };


    // const handleFileChange = e => {
    //     setResume(e.target.files[0]);
    // };

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        // Check if a file was selected
        if (!file) {
            const fieldErrors = {};
            fieldErrors['yourFile'] = 'Please select a file.';
            setErrors(fieldErrors);
            setyourFile(null); // Clear the selected file
            return;
        }

        // Check file type (only PDF allowed)
        if (file.type !== 'application/pdf') {
            const fieldErrors = {};
            fieldErrors['yourFile'] = 'Please select a PDF file.';
            setErrors(fieldErrors);
            setyourFile(null); // Clear the selected file
            return;
        }

        // Check file size (max 4MB)
        if (file.size > 4 * 1024 * 1024) {
            const fieldErrors = {};
            fieldErrors['yourFile'] = 'File size exceeds 4MB limit.';
            setErrors(fieldErrors);
            setyourFile(null); // Clear the selected file
        } else {
            setErrors({}); // Clear any previous errors
            setyourFile(file); // Set the selected file
        }
    };


    const handleBeforeInput = (event) => {
        const { name, data } = event.nativeEvent;
        if (name === 'yourPhone' && !/[0-9]/.test(data)) {
            event.preventDefault();
        }
    };
    <select
        value={yourJobType}
        onChange={handleTextChange}
        className={`form-select ${errors && errors.yourJobType ? 'is-invalid' : ''}`}
        name='yourJobType'
    >

    </select>

    return (
        <Container>
            <style>
                {`
                    h1.reg-success.mt-4 {
                        color: green !important;
                        font-size: 22px !important;
                        font-weight: 700 !important;
                    }
                `}
            </style>

            <form className="row p-0 z-index-100">
                {/* Name */}
                <div className="mb-3">
                    <label htmlFor="yourName" className="form-label text-black">Full Name *</label>
                    <input
                        type="text"
                        className={`form-control ${errors && errors.yourName ? 'is-invalid' : ''}`}
                        id="yourName"
                        name="yourName"
                        value={yourName}
                        required
                        onChange={handleTextChange}
                    />
                    {errors && errors.yourName && <div className="invalid-feedback">{errors.yourName}</div>}
                </div>

                {/* Email */}
                <div className="mb-3">
                    <label htmlFor="yourEmail" className="form-label text-black">Email *</label>
                    <input
                        type="email"
                        className={`form-control ${errors && errors.yourEmail ? 'is-invalid' : ''}`}
                        id="yourEmail"
                        name="yourEmail"
                        value={yourEmail}
                        onChange={handleTextChange}
                    />
                    {errors && errors.yourEmail && <div className="invalid-feedback">{errors.yourEmail}</div>}
                </div>

                {/* Mobile */}
                <div className="mb-3">
                    <label htmlFor="yourPhone" className="form-label text-black">Phone <sup className='text-danger'>*</sup></label>
                    <input
                        type="text"
                        className={`form-control ${errors && errors.yourPhone ? 'is-invalid' : ''}`}
                        id="yourPhone"
                        name="yourPhone"
                        maxLength="10"
                        value={yourPhone}
                        onChange={handleTextChange}
                        onBeforeInput={handleBeforeInput}
                    />
                    {errors && errors.yourPhone && <div className="invalid-feedback">{errors.yourPhone}</div>}
                </div>

                {/* Job Type */}
                <div className="mb-3">
                    <label htmlFor="yourJobType" className="form-label text-black">Job Type</label>
                    <select
                        value={yourJobType}
                        onChange={handleTextChange}
                        className={`form-select ${errors && errors.yourEmail ? 'is-invalid' : ''}`}
                        name='yourJobType'
                    >
                        <option value="Job Type">Job Type</option>
                        {options.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    {errors && errors.yourJobType && <div className="invalid-feedback">{errors.yourJobType}</div>}
                </div>

                {/* Add Resume */}
                <div className="mb-3">
                    <label htmlFor="yourFile" className="form-label text-black">Upload Resume</label>
                    <input
                        type="file"
                        className={`form-control ${errors && errors.yourFile ? 'is-invalid' : ''}`}
                        id="yourFile"
                        name="yourFile"
                        placeholder=""
                        onChange={handleFileChange}
                    />
                    {errors && errors.yourFile && <div className="invalid-feedback">{errors.yourFile}</div>}
                </div>
                {/* Privacy policy */}
                <div>
                    <p className="para-text text-black fs-6">We value your privacy and will handle your information with utmost confidentiality. By submitting this form, you agree to our<Link className='' target='_blank' href='/privacy-policy'> Privacy Policy.</Link></p>
                </div>
                {/* Submit Button */}
                <div className="mt-3 text-center">
                    <div class="text-center">
                        <button
                            type="button"
                            class="btn btn-16"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </div>
                    {loading && <h1 class="reg-success mt-4">{post}</h1>}
                </div>
            </form>

        </Container>
    );
};

export default CareerForms;
