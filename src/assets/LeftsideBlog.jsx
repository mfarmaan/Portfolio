import React from 'react'
import { useNavigate } from 'react-router-dom';
import BlogDemo from '../img/blog-demo.png'

function LeftsideBlog() {
    const navigate = useNavigate();

    const navigateToRead = () => {
        navigate('/readingblog')
    }
    return (
        <div className='d-flex justify-content-between gap-3 align-items-center text-center flex-wrap'>
            <h4 className='blog__h4-section-title'>Latest Trend  2033</h4>
            <h6 className='blog__h6-section-seemore'>See More</h6>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-4">


                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <a onClick={navigateToRead}>
                                        <div className="blog__card-div ">
                                            <div className='case-study-card1 h-50 '>
                                                <img className='blog__card-div-img ' src={BlogDemo} width="100%" alt="" />
                                                <div id='blog__card-lable' className='blog_card-author-details'>
                                                    <label for="blog__card-lable" className='blog__card-lable'>Latest Trend</label>
                                                    <h1 className='text-white text-start'>The Future of UI/UX: Predictions and Best Practices for 2023</h1>
                                                    <div className='blog__card-date-time'>
                                                        <p className=''>By: Author</p>
                                                        <p className=''>Posted by: 20-01-2023</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </a>
                                </div>
                                <div className="carousel-item">
                                    <a onClick={navigateToRead}>
                                        <div className="blog__card-div ">
                                            <div className='case-study-card1 h-50 '>
                                                <img className='blog__card-div-img ' src={BlogDemo} width="100%" alt="" />
                                                <div id='blog__card-lable' className='blog_card-author-details'>
                                                    <label for="blog__card-lable" className='blog__card-lable'>Latest Trend</label>
                                                    <h1 className='text-white text-start'>The Future of UI/UX: Predictions and Best Practices for 2023</h1>
                                                    <div className='blog__card-date-time'>
                                                        <p className=''>By: Author</p>
                                                        <p className=''>Posted by: 20-01-2023</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </a>
                                </div>
                                <div className="carousel-item">
                                    <a onClick={navigateToRead}>
                                        <div className="blog__card-div ">
                                            <div className='case-study-card1 h-50 '>
                                                <img className='blog__card-div-img ' src={BlogDemo} width="100%" alt="" />
                                                <div id='blog__card-lable' className='blog_card-author-details'>
                                                    <label for="blog__card-lable" className='blog__card-lable'>Latest Trend</label>
                                                    <h1 className='text-white text-start'>The Future of UI/UX: Predictions and Best Practices for 2023</h1>
                                                    <div className='blog__card-date-time'>
                                                        <p className=''>By: Author</p>
                                                        <p className=''>Posted by: 20-01-2023</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <a onClick={navigateToRead}>
                            <div className="blog__card-div ">
                                <div className='case-study-card1 h-50 '>
                                    <img className='blog__card-div-img ' src={BlogDemo} width="100%" alt="" />
                                    <div id='blog__card-lable' className='blog_card-author-details'>
                                        <label for="blog__card-lable" className='blog__card-lable'>Latest Trend</label>
                                        <h1 className='text-white text-start'>The Future of UI/UX: Predictions and Best Practices for 2023</h1>
                                        <div className='blog__card-date-time'>
                                            <p className=''>By: Author</p>
                                            <p className=''>Posted by: 20-01-2023</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </a>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default LeftsideBlog
