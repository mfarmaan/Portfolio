import React, { useState } from "react";
import Demo from "../img//demo_image-1-300x300.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import SwiperCore, { Pagination, Navigation } from "swiper/core";

// Import Swiper styles
import "swiper/css";

SwiperCore.use([Pagination, Navigation]);

function Blog() {
  const [btnClicked, setBtnclicked] = useState(0);

  const btnId = [
    {
      id: "1",
      name: "Andriod Dev",
    },
    {
      id: "2",
      name: "Innovation",
    },
    {
      id: "3",
      name: "Design",
    },
    {
      id: "4",
      name: "web",
    },
  ];

  const postdata = [
    {
      catagory: "Creative",
      title: "The I tool that helps remote teams collaborate better",
    },
    {
      catagory: "Inovation",
      title: "The I tool that helps remote teams collaborate better",
    },
    {
      catagory: "Design",
      title: "The I tool that helps remote teams collaborate better",
    },
  ];
  console.log(btnId);
  return (
    <>
      <section className="my-5 top-section common-margin">
        <div className="container top-section">
          <div className="row mobile-reverse">
            <div className="col-md-7">
              <div className="backgroung_post">
                <Swiper
                  className="mySwiper"
                  spaceBetween={30}
                  slidesPerView={2}
                  direction="vertical"
                  // loop={true}
                  speed={1500}
                  autoplay={{
                    delay: 1000,
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
                    <div className="Post__card pointer">
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
                    <div className="Post__card pointer">
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
                    <div className="Post__card pointer">
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

      <section className="bg-gray-section common-margin">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <div className="treaning_section">
                <h2>Trending Topics</h2>
              </div>
            </div>
            <div className="col-4">
              <div className="d-flex treaning_section justify-content-end pointer">
                <p className="m-0">See All Topics</p>
              </div>
            </div>
          </div>
          <div className="row ct-margin">
            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 mb-3 pointer">
              <div className="catagaroy-img ">
                <img src={Demo} alt="" />
                <div className="catagaroy_text">
                  <p>Red Color</p>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 mb-3 pointer">
              <div className="catagaroy-img ">
                <img src={Demo} alt="" />
                <div className="catagaroy_text">
                  <p>Red Color</p>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 mb-3 pointer">
              <div className="catagaroy-img ">
                <img src={Demo} alt="" />
                <div className="catagaroy_text">
                  <p>Red Color</p>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 mb-3 pointer">
              <div className="catagaroy-img ">
                <img src={Demo} alt="" />
                <div className="catagaroy_text">
                  <p>Red Color</p>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 mb-3 pointer">
              <div className="catagaroy-img ">
                <img src={Demo} alt="" />
                <div className="catagaroy_text">
                  <p>Red Color</p>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 mb-3 pointer">
              <div className="catagaroy-img ">
                <img src={Demo} alt="" />
                <div className="catagaroy_text">
                  <p>Red Color</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="common-margin">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="treaning_section common-margin-heading">
                <h2>Innovation & Tech</h2>
              </div>
            </div>
            <div className="col-12 common-margin-heading">
              <div className="d-flex gap-3">
                {btnId.map((data) => (
                  <button
                    id={data.id}
                    onClick={() => setBtnclicked(data.id)}
                    type="submit"
                    className={
                      !btnClicked ? "catagory_tabs " : "catagory_tabs active"
                    }
                  >
                    {data.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="row">
            {postdata.map((postItem) => (
              <div className=" col-xl-4 col-md-4  mb-4">
                <div className="posts__card">
                  <img src={Demo} alt="" />
                  <div className="post_details">
                    <p>{postItem.catagory}</p>
                    <h2>{postItem.title}</h2>
                  </div>
                </div>
              </div>
            ))}
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
