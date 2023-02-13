import React from "react";
import { useNavigate } from "react-router-dom";
import BlogDemo from "../img/blog-demo.png";
import Card from "./pages/Card";
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";

function LeftsideBlog() {
  const navigate = useNavigate();

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
    console.log(my_user);
    setId(my_user);
  };

  return (
    <div className="d-flex justify-content-between gap-3 align-items-center text-center flex-wrap">
      <h4 className="blog__h4-section-title">Latest Trend 2033</h4>
      <h6 className="blog__h6-section-seemore">See More</h6>
      {/* <div className="container">
        <div className="row">
          <div className="col-md-12 mb-4">
            <div>
              <Swiper navigation spaceBetween={10} slidesPerView={1}>
                <SwiperSlide>
                  <div onClick={navigateToRead}>
                    <div className="blog__card-div ">
                      <div className="case-study-card1  ">
                        <img
                          className="blog__card-div-img "
                          src={BlogDemo}
                          width="100%"
                          alt=""
                        />
                      </div>
                      <div
                        id="blog__card-lable"
                        className="blog_card-author-details"
                      >
                        <label
                          htmlFor="blog__card-lable"
                          className="blog__card-lable"
                        >
                          Latest Trend
                        </label>
                        <h1 className="text-white text-start">
                          The Future of UI/UX: Predictions and Best Practices
                          htmlFor 2023
                        </h1>
                        <div className="blog__card-date-time">
                          <p className="">By: Author</p>
                          <p className="">Posted by: 20-01-2023</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div onClick={navigateToRead}>
                    <div className="blog__card-div ">
                      <div className="case-study-card1">
                        <img
                          className="blog__card-div-img "
                          src={BlogDemo}
                          width="100%"
                          alt=""
                        />
                      </div>
                      <div
                        id="blog__card-lable"
                        className="blog_card-author-details"
                      >
                        <label
                          htmlFor="blog__card-lable"
                          className="blog__card-lable"
                        >
                          Latest Trend
                        </label>
                        <h1 className="text-white text-start">
                          The Future of UI/UX: Predictions and Best Practices
                          htmlFor 2023
                        </h1>
                        <div className="blog__card-date-time">
                          <p className="">By: Author</p>
                          <p className="">Posted by: 20-01-2023</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div onClick={navigateToRead}>
                    <div className="blog__card-div ">
                      <div className="case-study-card1  ">
                        <img
                          className="blog__card-div-img "
                          src={BlogDemo}
                          width="100%"
                          alt=""
                        />
                      </div>
                      <div
                        id="blog__card-lable"
                        className="blog_card-author-details"
                      >
                        <label
                          htmlFor="blog__card-lable"
                          className="blog__card-lable"
                        >
                          Latest Trend
                        </label>
                        <h1 className="text-white text-start">
                          The Future of UI/UX: Predictions and Best Practices
                          htmlFor 2023
                        </h1>
                        <div className="blog__card-date-time">
                          <p className="">By: Author</p>
                          <p className="">Posted by: 20-01-2023</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container">
        <div className="row">
          {id.map((item) => (
            <div className="col-md-12 col-lg-12 col-xl-6 mb-4">
              <div className="home__card">
                <Card
                  image={BlogDemo}
                  card={() => navigate(`/readingblog?${item.id}`)}
                  lable={item.id}
                  title={item.title.rendered}
                  writer="Muhammad farman"
                  publishdate="20-01-2023"
                  textClass="text-white0 m-0"
                  cardbodycss="px-0 py-0"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LeftsideBlog;
