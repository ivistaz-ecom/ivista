'use client'
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios'; // Don't forget to import axios

import ConfigData from '../../config';


const CareerForms = () => {

    const siteUrl = ConfigData.apiDomainUrl;

    const [post, setPost] = React.useState(null);
    const [errors, setErrors] = useState({});

    const [yourName, setyourName] = React.useState(null);
    const [yourEmail, setyourEmail] = React.useState(null);
    const [yourSubject, setyourSubject] = React.useState(null);
    const [loading, setLoading] = useState(false);

    const handleTextChange = e => {
        const { name, value } = e.target;
        if (name === 'yourName') {
            setyourName(value)
            console.log(value)
        }
        if (name === 'yourEmail') {
            setyourEmail(value)
            console.log(value)
        }
        if (name === 'yourSubject') {
            setyourSubject(value)
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
        setyourSubject('');
    };



    function createPost() {
        setErrors({});
        axios.post(`https://docs.ivistaz.com/wp-json/contact-form-7/v1/contact-forms/239/feedback`,
            // axios.post(`https://docs.walmartvriddhi.org/wp-json/contact-form-7/v1/contact-forms/239/feedback`,
            {
                'yourName': { yourName },
                'yourEmail': { yourEmail },
                'yourSubject': { yourSubject },
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
            <form className="row z-index-100">
                <div className="mb-3">
                    <label htmlFor="yourName" className="form-label text-black">Full Name *</label>
                    <input
                        type="text"
                        className="form-control"
                        id="yourName"
                        name="yourName"
                        value={yourName}
                        onChange={handleTextChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="yourEmail" className="form-label text-black">Email *</label>
                    <input
                        type="email"
                        className="form-control"
                        id="yourEmail"
                        name="yourEmail"
                        value={yourEmail}
                        onChange={handleTextChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="yourSubject" className="form-label text-black">Subject *</label>
                    <input
                        type="text"
                        className="form-control"
                        id="yourSubject"
                        name="yourSubject"
                        value={yourSubject}
                        onChange={handleTextChange}
                    />
                </div>
                <div className="mb-3 text-center">
                    <button type='submit'
                        className={`btn btn-primary  pb-4 `}
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                    {loading && <h1 class="reg-success mt-4">{post}</h1>}
                </div>
            </form>
        </Container>
    );
};

export default CareerForms;
