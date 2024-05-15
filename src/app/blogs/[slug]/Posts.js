'use client'
import React, { useState, useEffect } from 'react'

import ConfigData from '../../../../config'
import { Container, Image, Row } from 'react-bootstrap';

const Posts = ({ slug }) => {

    const siteUrl = ConfigData.wpApiUrl;
    const serverUrl = ConfigData.SERVER;
    const [data, setData] = useState(null); // Initialize data state with null initially

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${siteUrl}/blogs?_embed&slug=${slug}`);
                const data = await response.json();
                setData(data);
                // console.log(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [siteUrl, serverUrl]);


    return (
        <>
            <Container fluid className="w-80 custom-container">
                {data ? ( // Check if data is available
                    data.map((post) => (
                        <div class=" d-flex flex-column" key={post.id}>
                            <Image
                                src={post.acf.desktop_banner_image.url}
                                alt={post.title.rendered}
                                className='w-100 img-fluid rounded-5'
                            />

                            <Container className='py-5'>
                                <div class="card-body text-white d-flex flex-column justify-content-between">

                                    <h5 class="card-title fs-22 pb-3">
                                        {post.title.rendered}
                                    </h5>
                                    <div className='d-flex flex-column'>
                                        <div>
                                            <p class="card-text para-text" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                                        </div>
                                    </div>
                                </div>
                            </Container>
                        </div>
                    ))
                ) : (
                    <div className='text-white'>Loading...</div> // Render loading message while data is being fetched
                )}
            </Container>
        </>
    )
}

export default Posts
