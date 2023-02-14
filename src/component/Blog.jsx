import React from "react";
import Demo from "../img//demo_image-1-300x300.jpg";
import LeftsideBlog from "../assets/LeftsideBlog";
import Rightsidewiget from "../assets/Rightsidewiget";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import SwiperCore, { Pagination, Navigation } from "swiper/core";

// Import Swiper styles
import "swiper/css";

SwiperCore.use([Pagination, Navigation]);

function Blog() {
  return (
    <>
      <section className="my-5 top-section">
        <div className="container">
          <div className="row mobile-reverse">
            <div className="col-md-7">
              <div className="backgroung_post">
                <Swiper
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  className="mySwiper"
                  spaceBetween={30}
                  slidesPerView={2}
                  direction="vertical"
                  // loop={true}
                  speed={500}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    // when window width is <= 499px
                    1200: {
                      slidesPerView: 3,
                      spaceBetweenSlides: 20,
                    },
                    // when window width is <= 999px
                    1360: {
                      slidesPerView: 3,
                      spaceBetweenSlides: 5,
                    },
                    990: {
                      slidesPerView: 2,
                      spaceBetweenSlides: 5,
                    },
                  }}
                  centeredSlides={true}
                  modules={[Autoplay]}
                >
                  <SwiperSlide>
                    <div className="Post__card">
                      <div className="post_id_slider">
                        <span>01</span>
                      </div>
                      <div className="post_img">
                        <img className="img-fluid" src={Demo} alt="" />
                      </div>
                      <div className="post_texts">
                        <div className="post_tags">
                          <p className="post-tags-lable">Creative </p>
                          <p className="post-tags-lable">Creative </p>
                        </div>
                        <div className="post_title">
                          <h1 className="post_title_h1">
                            The I tool that helps remote teams collaborate
                            better
                          </h1>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="Post__card">
                      <div className="post_id_slider">
                        <span>01</span>
                      </div>
                      <div className="post_img">
                        <img className="img-fluid" src={Demo} alt="" />
                      </div>
                      <div className="post_texts">
                        <div className="post_tags">
                          <p className="post-tags-lable">Creative </p>
                          <p className="post-tags-lable">Creative </p>
                        </div>
                        <div className="post_title">
                          <h1 className="post_title_h1">
                            The I tool that helps remote teams collaborate
                            better
                          </h1>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="Post__card">
                      <div className="post_id_slider">
                        <span>01</span>
                      </div>
                      <div className="post_img">
                        <img className="img-fluid" src={Demo} alt="" />
                      </div>
                      <div className="post_texts">
                        <div className="post_tags">
                          <p className="post-tags-lable">Creative </p>
                          <p className="post-tags-lable">Creative </p>
                        </div>
                        <div className="post_title">
                          <h1 className="post_title_h1">
                            The I tool that helps remote teams collaborate
                            better
                          </h1>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                {/* <div className="swiper">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="Post__card">
                        <div className="post_id_slider">
                          <span>01</span>
                        </div>
                        <div className="post_img">
                          <img
                            className="img-fluid"
                            src="./img/demo_image-1-300x300.jpg"
                            alt=""
                          />
                        </div>
                        <div className="post_texts">
                          <div className="post_tags">
                            <p className="post-tags-lable">Creative </p>
                            <p className="post-tags-lable">Creative </p>
                          </div>
                          <div className="post_title">
                            <h1 className="post_title_h1">
                              The I tool that helps remote teams collaborate
                              better
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="Post__card">
                        <div className="post_id_slider">
                          <span>01</span>
                        </div>
                        <div className="post_img">
                          <img
                            className="img-fluid"
                            src="./img/demo_image-1-300x300.jpg"
                            alt=""
                          />
                        </div>
                        <div className="post_texts">
                          <div className="post_tags">
                            <p className="post-tags-lable">Creative </p>
                            <p className="post-tags-lable">Creative </p>
                          </div>
                          <div className="post_title">
                            <h1 className="post_title_h1">
                              The I tool that helps remote teams collaborate
                              better
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="Post__card">
                        <div className="post_id_slider">
                          <span>01</span>
                        </div>
                        <div className="post_img">
                          <img
                            className="img-fluid"
                            src="./img/demo_image-1-300x300.jpg"
                            alt=""
                          />
                        </div>
                        <div className="post_texts">
                          <div className="post_tags">
                            <p className="post-tags-lable">Creative </p>
                            <p className="post-tags-lable">Creative </p>
                          </div>
                          <div className="post_title">
                            <h1 className="post_title_h1">
                              The I tool that helps remote teams collaborate
                              better
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="right_imge p-0">
              <img src={Demo} className="img-fluid" alt="" />
            </div>
            <div className="col-md-5">
              <div className="right_imge_card">
                <img src={Demo} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div classNameName="blog-margin-top">
        <div classNameName="container">
          <div classNameName="row align-items-center">
            <div classNameName="col-md-6">
              <h3 classNameName="sm-title-1">BLOG</h3>
              <h2 classNameName="lg-head-bg-title-1 lg-head-title-1">
                Checkout Some <span>Industrial Trend!</span>
              </h2>
            </div>
            <div classNameName="col-md-6">
              <div classNameName="d-flex justify-content-end">
                <img src={Giflogo} width="300px" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div classNameName="container">
        <div classNameName="row align-items-start">

          <div classNameName="col-md-8">
            <LeftsideBlog />
          </div>

          <div classNameName="col-md-4">
            <Rightsidewiget />
          </div>
         
        </div>
      </div> */}
    </>
  );
}

export default Blog;
