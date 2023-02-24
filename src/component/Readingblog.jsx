import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Giflogo from "../img/lf30_editor_p6rpf9nb.gif";
import Header from "./Header";
import Footer from "./Footer";

function Readingblog() {
  const location = useLocation();

  const postid = location.search.replace(/[^a-zA-Z0-9 ]/g, "");
  const [item, setItem] = useState();
  const [decs, setDecs] = useState();

  useEffect(() => {
    fetch(`https://blog.uiux.store/wp-json/wp/v2/posts/${postid}`)
      .then((response) => response.json())
      .then((data) => setItem(data.title.rendered));
  }, [postid]);
  useEffect(() => {
    fetch(`https://blog.uiux.store/wp-json/wp/v2/posts/${postid}`)
      .then((response) => response.json())
      .then((data) => setDecs(data.content.rendered));
  }, [postid]);
  const newdata = decs;

  return (
    <>
      <Header />
      <div className="blog-margin-top">
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-md-6">
              <div>
                <h2 className="lg-head-bg-title-1 lg-head-title-1 ">
                  Checkout Some <span>Industrial Trend!</span>
                </h2>
                <h3 className="sm-title-1">Tagline</h3>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-end">
                <img src={Giflogo} width="300px" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-start ">
          <div className="col-md-11">
            <h1 className="lg-head-2 fs-3 text-start">
              {item}
              <span className="fs-3"></span>
            </h1>
            <p
              className="Read_me-page"
              dangerouslySetInnerHTML={{ __html: newdata }}
            ></p>
            <div dangerouslySetInnerHTML={{ __html: newdata }}></div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Readingblog;
