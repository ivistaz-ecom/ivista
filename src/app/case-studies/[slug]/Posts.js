'use client'
import React, { useEffect, useState } from 'react'

import ConfigData from '../../../../config'
import { Container } from 'react-bootstrap';

const Posts = ({ slug }) => {
    const [data, setData] = useState(null);

    const siteUrl = ConfigData.wpApiUrl;
    const serverUrl = ConfigData.SERVER;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${siteUrl}/posts?_embed&slug=${slug}`);
                const data = await response.json();
                setData(data);
                console.log(data);
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
                            <Container className='pb-5'>
                                <div class="card-body d-flex flex-column justify-content-between">

                                    <h5 class="card-title text-white fs-22 pb-3">
                                        {post.title.rendered}
                                    </h5>
                                    <div className='d-flex flex-column'>
                                        <div>
                                            <p class="card-text text-white para-text" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                                        </div>
                                    </div>
                                </div>
                            </Container>
                        </div>
                    ))
                ) : (
                    <div className='text-white'>Loading...</div>
                )
                }
            </Container>
        </>
    )
}

export default Posts