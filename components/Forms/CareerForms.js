import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'

const CareerForms = () => {

    const options = [
        { value: 'account_manager', label: 'Account Manager/Client Servicing' },
        { value: 'content_writer', label: 'Content Writer' },
        { value: 'ui_ux_designer', label: 'UI/UX Designer' },
        { value: 'front_end_developer', label: 'Front-End Developer' },
        { value: 'back_end_developer', label: 'Back-End Developer' },
        { value: 'paid_marketing_specialist', label: 'Paid Marketing Specialist' },
        { value: 'seo', label: 'SEO' }
    ];


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



    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };


    return (
        <>
            <Container>
                <form class="row z-index-100">
                    <div class="mb-3">
                        <label for="formFile" class="form-label text-black">Full Name *</label>
                        <input class="form-control" type="text" id="formFile" />
                    </div>
                    <div class="mb-3">
                        <label for="formFile" class="form-label text-black">Mobile Number *</label>
                        <input class="form-control" type="text" id="formFile" />
                    </div>
                    <div class="mb-3">
                        <label for="formFile" class="form-label text-black">Email *</label>
                        <input class="form-control" type="text" id="formFile" />
                    </div>
                    <div class="mb-3">
                        <label for="formFile" class="form-label w-100 text-black">Job Type</label>

                        <select value={selectedOption} onChange={handleChange} className='w-100 p-2 rounded-3'>
                            <option value="">Job Type</option>
                            {options.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="formFile" accept=".pdf,.doc,.docx" class="form-label w-100 text-black">Attach your CV </label>
                        <input type="file" onChange={handleFileChange} />
                        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                        {selectedFile && (
                            <div>
                                {/* <p className="text-black para-text">Selected file: {selectedFile.name}</p> */}
                                <p className="text-black para-text">Size: {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB</p>
                            </div>
                        )}
                    </div>
                    <div class="mb-3 text-center">
                        <button type="button" class="btn btn-15 bg-black text-white">Submit</button>
                    </div>
                </form>
            </Container>
        </>
    )
}

export default CareerForms
