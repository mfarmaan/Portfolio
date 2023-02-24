import React, { useState } from "react";
import Demo from "../img//demo_image-1-300x300.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import SwiperCore, { Pagination, Navigation } from "swiper/core";

// Import Swiper styles
import "swiper/css";

SwiperCore.use([Pagination, Navigation]);

function Blog() {
  const [btnClicked, setBtnclicked] = useState(1);

  const [id, setId] = React.useState([]);

  React.useEffect(() => {
    // getAllUser();
    getUser();
  }, []);

  const getUser = async () => {
    const api_response = await fetch(
      "https://blog.uiux.store/wp-json/wp/v2/posts",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const my_user = await api_response.json();
    setId(my_user);
  };

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
                  onSlideChange={() => console.log("Slide Change")}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  <SwiperSlide>
                    <div className="Post__card pointer">
                      <div className="post_id_slider">
                        <span>01</span>
                      </div>
                      <div className="post_img">
                        <img id="1" className="img-fluid" src={Demo} alt="" />
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
                  <SwiperSlide id="2">
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
                  <SwiperSlide id="3">
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
              <div className="d-flex flex-wrap gap-3">
                {id.map((data, index) => (
                  <button
                    key={index}
                    id={data.id}
                    onClick={() => setBtnclicked(data.id)}
                    type="submit"
                    className={
                      btnClicked === data.id
                        ? "catagory_tabs active "
                        : "catagory_tabs "
                    }
                  >
                    {data.categories}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="row">
            {id.slice(0, 3).map((postItem) => (
              <div key={postItem.id} className=" col-xl-4 col-md-4  mb-4">
                <div className="posts__card">
                  <img src={Demo} alt="" />
                  <div className="post_details">
                    <p>{postItem.id}</p>
                    <h2>{postItem.title.rendered}</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="common-margin bg-gray-section ">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="treaning_section common-margin-heading">
                <h2>Innovation & Tech</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className=" col-xl-6 col-lg-6  mb-4">
              <div className="posts__card h-lg">
                <img src={Demo} alt="" />
              </div>
              <div className="post_details-text text-width  ">
                <p>
                  <span>Creative</span>
                  <span>Creative</span>
                </p>
                <h3>The I tool that helps remote teams collaborate better</h3>
              </div>
            </div>
            <div className=" col-xl-6 col-lg-6  mb-4">
              <div className="row ">
                <div className="col-lg-6 grid-margin ">
                  <div className="posts__card h-m ">
                    <img src={Demo} alt="" />
                  </div>
                  <div className="post_details-text ">
                    <p>
                      <span>Creative</span>
                      <span>Creative</span>
                    </p>
                    <h3>
                      The I tool that helps remote teams collaborate better
                    </h3>
                  </div>
                </div>
                <div className="col-lg-6 grid-margin ">
                  <div className="posts__card  h-m ">
                    <img src={Demo} alt="" />
                  </div>
                  <div className="post_details-text ">
                    <p>
                      <span>Creative</span>
                      <span>Creative</span>
                    </p>
                    <h3>
                      The I tool that helps remote teams collaborate better
                    </h3>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 grid-margin ">
                  <div className="posts__card  h-m ">
                    <img src={Demo} alt="" />
                  </div>
                  <div className="post_details-text ">
                    <p>
                      <span>Creative</span>
                      <span>Creative</span>
                    </p>
                    <h3>
                      The I tool that helps remote teams collaborate better
                    </h3>
                  </div>
                </div>
                <div className="col-lg-6 grid-margin ">
                  <div className="posts__card  h-m ">
                    <img src={Demo} alt="" />
                  </div>
                  <div className="post_details-text ">
                    <p>
                      <span>Creative</span>
                      <span>Creative</span>
                    </p>
                    <h3>
                      The I tool that helps remote teams collaborate better
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
