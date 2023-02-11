import React from "react";
import BlogDemo from "../img/blog-demo.png";
import { useNavigate } from "react-router-dom";

function Leftsidebloglist() {
  const navigate = useNavigate();

  const navigateToRead = () => {
    navigate("/readingblog");
  };

  return (
    <>
      <div className="d-flex justify-content-between gap-3 align-items-center text-center flex-wrap">
        <h4 className="blog__h4-section-title">Search By : Abcd</h4>
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4">
              <div className="container">
                <div className="row">
                  <div className="col-md-3">
                    <div className="blog_search-card d-flex justify-content-start align-items-start">
                      <img src={BlogDemo} width="100%" alt="" />
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="blog_search-card ">
                      <h1>Learn About UI/UX Trend 2023</h1>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets{" "}
                      </p>
                      <button type="sumbit" onClick={navigateToRead}>
                        Read NOW
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Leftsidebloglist;
