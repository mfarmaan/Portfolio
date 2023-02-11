import React from "react";

function Footer() {
  return (
    <footer className="sectiom-2-margin-top">
      <div className="container-fluid bg-theme-1">
        <div className="container">
          <div className="row ">
            <div className="col-md-4">
              <div>
                <h1 className="lg-head-3 text-white mb-4">UIUX STORE</h1>
                <p className="sm-p-3 text-start">
                  Here you can see a selection of my past work as a UI/UX
                  designer. I've included a variety of projects, ranging from
                  websites and mobile apps to software and interactive
                  experiences. I hope you find my portfolio to be a helpful
                  resource and a good representation of my skills and style.
                  Feel free to contact me if you have any questions or want to
                  discuss a potential project.
                </p>
              </div>
            </div>
            <div className="col-md-2 ">
              <div>
                <h4 className="text-white text-white mb-4">Pages</h4>
                <div className="d-flex flex-column flex-wrap gap-4 ">
                  <p className="text-white">Home</p>
                  <p className="text-white">About</p>
                  <p className="text-white">Resume</p>
                  <p className="text-white">Contact</p>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div>
                <h4 className="text-white text-white mb-4">Social Media</h4>
                <div className="d-flex flex-column flex-wrap gap-4 ">
                  <p className="text-white">Instagram</p>
                  <p className="text-white">Facebook</p>
                  <p className="text-white">Behance</p>
                  <p className="text-white">Linked</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className=" mx-auto section-margin-top opacity-5">
              <div className="d-flex flex-wrap align-items-center justify-content-between text-white footer-text-rights">
                <p className="footer-text-rights">
                  {" "}
                  Copyright © 2022. uiux.store. All rights reserved.
                </p>
                <div className="d-flex flex-wrap align-items-center flex-row gap-4">
                  <p className="footer-text-rights"> Terms & Conditions</p>
                  <p className="footer-text-rights">Privacy Policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
