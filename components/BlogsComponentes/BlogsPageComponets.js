'use client'
import React, { useEffect, useState } from 'react'
import { Col, Row, Container, Image } from 'react-bootstrap'
import Header1 from '../HeaderBlack';
import { FaArrowRight } from 'react-icons/fa';

import ConfigData from '../../config'

const BlogsPageComponets = () => {

    const siteUrl = ConfigData.wpApiUrl;
    const serverUrl = ConfigData.SERVER;
    const [data, setData] = useState(null); // Initialize data state with null initially

    useEffect(() => {
        const fetchData = async () => {
            x
            try {
                const response = await fetch(`${siteUrl}/blogs?_embed&production_mode[]=${serverUrl}`);
                const data = await response.json();
                setData(data);
                // console.log(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [siteUrl, serverUrl]); // Include dependencies in useEffect dependency array

    return (
        <>
            <Container className="bg-black pb-5 custom-container" fluid>
                <Container className="w-80">
                    <h1 className="fs-21 text-white fw-bold">BLOGS</h1>
                    <p className="fw-bold text-white fs-3">Stay Informed with Our Latest Insights</p>
                    <p className="text-white para-text">Explore our blog page to gain valuable insights, industry trends, and expert advice on digital marketing, helping you stay ahead of the curve and make informed decisions for your business.</p>
                </Container>

                <Container className="w-80">
                    <Row className='d-flex flex-lg-row flex-column bg-black'>
                        {data ? ( // Check if data is available
                            data.map((post) => (
                                <div class="iv-cards col-lg-4 d-flex flex-column p-3" key={post.id}>
                                    <Image
                                        src={post.acf.thumbnail_image.url}
                                        alt={post.title.rendered}
                                        className='w-100' height={220}
                                    />
                                    <div class="card-body text-white d-flex flex-column justify-content-between">
                                        <h5 class="card-title">
                                            {post.title.rendered}
                                        </h5>
                                        <div className='d-flex flex-column'>
                                            <div>
                                                <p class="card-text three-line-show" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                                            </div>
                                            <div className='mt-3'>
                                                <a href={`/blogs/${post.slug}`} class="iv-link">Read more <FaArrowRight className="icons" size="25" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className='text-white'>Loading...</div> // Render loading message while data is being fetched
                        )}
                    </Row>
                </Container>

            </Container>
        </>
    )
}

export default BlogsPageComponets
