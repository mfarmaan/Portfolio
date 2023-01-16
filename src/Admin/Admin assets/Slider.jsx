import React from 'react'
import { useNavigate } from 'react-router-dom';


function Slider(props) {
    const navigate = useNavigate();

    const navigateToRead = () => {
        navigate('/readingblog')
    }
    return (

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
                                            <img className='blog__card-div-img ' src={props.img1} width="100%" alt="" />
                                            <div id='blog__card-lable' className='blog_card-author-details'>
                                                <label htmlFor="blog__card-lable" className='blog__card-lable'>{props.lable}</label>
                                                <h1 className='text-white text-start'>{props.title}</h1>
                                                <div className='blog__card-date-time'>
                                                    <p className=''>{props.writer}</p>
                                                    <p className=''>Posted by: {props.date}</p>
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
                                            <img className='blog__card-div-img ' src={props.img2} width="100%" alt="" />
                                            <div id='blog__card-lable' className='blog_card-author-details'>
                                                <label htmlFor="blog__card-lable" className='blog__card-lable'>{props.lable2}</label>
                                                <h1 className='text-white text-start'>{props.title2}</h1>
                                                <div className='blog__card-date-time'>
                                                    <p className=''>{props.writer2}</p>
                                                    <p className=''>{props.date2}</p>
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
                                            <img className='blog__card-div-img ' src={props.img3} width="100%" alt="" />
                                            <div id='blog__card-lable' className='blog_card-author-details'>
                                                <label htmlFor="blog__card-lable" className='blog__card-lable'>{props.lable3}</label>
                                                <h1 className='text-white text-start'>{props.title3}</h1>
                                                <div className='blog__card-date-time'>
                                                    <p className=''>{props.writer3}</p>
                                                    <p className=''>Posted by: {props.date3}</p>
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
