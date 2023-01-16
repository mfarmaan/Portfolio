import React from 'react'
import sliderimg from '../img/card-1.png'
import BlogDemo from '../img/blog-demo.png'
import { useNavigate } from 'react-router-dom';


function Slider() {
    const navigate = useNavigate();

    const navigateToRead = () => {
        navigate('/readingblog')
    }
    return (
        // <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
        //     <div className="carousel-indicators">
        //         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        //         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        //         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        //     </div>
        //     <div className="carousel-inner">
        //         <div className="carousel-item active">
        //             <img src={sliderimg} className="d-block w-100" alt="..." />
        //             <div className="carousel-caption d-none d-md-block">
        //                 <h5>First slide label</h5>
        //                 <p>Some representative placeholder content for the first slide.</p>
        //             </div>
        //         </div>
        //         <div className="carousel-item">
        //             <img src={sliderimg} className="d-block w-100" alt="..." />
        //             <div className="carousel-caption d-none d-md-block">
        //                 <h5>Second slide label</h5>
        //                 <p>Some representative placeholder content for the second slide.</p>
        //             </div>
        //         </div>
        //         <div className="carousel-item">
        //             <img src={sliderimg} className="d-block w-100" alt="..." />
        //             <div className="carousel-caption d-none d-md-block">
        //                 <h5>Third slide label</h5>
        //                 <p>Some representative placeholder content for the third slide.</p>
        //             </div>
        //         </div>
        //     </div>
        //     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        //         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        //         <span className="visually-hidden">Previous</span>
        //     </button>
        //     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        //         <span className="carousel-control-next-icon" aria-hidden="true"></span>
        //         <span className="visually-hidden">Next</span>
        //     </button>
        // </div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
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
                                                <label htmlFor="blog__card-lable" className='blog__card-lable'>Latest Trend</label>
                                                <h1 className='text-white text-start'>The Future of UI/UX: Predictions and Best Practices htmlFor 2023</h1>
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
                                                <label htmlFor="blog__card-lable" className='blog__card-lable'>Latest Trend</label>
                                                <h1 className='text-white text-start'>The Future of UI/UX: Predictions and Best Practices htmlFor 2023</h1>
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
                                                <label htmlFor="blog__card-lable" className='blog__card-lable'>Latest Trend</label>
                                                <h1 className='text-white text-start'>The Future of UI/UX: Predictions and Best Practices htmlFor 2023</h1>
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
    )
}

export default Slider
