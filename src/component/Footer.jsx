import React from 'react'

function Footer() {
    return (


        <footer className="sectiom-2-margin-top">
            <div className="container-fluid bg-theme-1">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-md-4">
                            <div>
                                <h1 className="lg-head-3 text-white mb-4">Muahmmad Farman</h1>
                                <p className="sm-p-3 text-start">Here you can see a selection of my past work as a UI/UX
                                    designer.
                                    I've
                                    included a variety of
                                    projects, ranging from websites and mobile apps to software and interactive experiences.
                                    I
                                    hope you find my portfolio to be a helpful resource and a good representation of my
                                    skills
                                    and style. Feel free to contact me if you have any questions or want to discuss a
                                    potential
                                    project.</p>
                            </div>
                        </div>
                        <div className="col-md-2 offset-md-1">
                            <div>
                                <h4 className="text-white text-white mb-4">Pages</h4>
                                <div className="d-flex flex-column flex-wrap gap-4 ">
                                    <a className="text-white">Home</a>
                                    <a className="text-white">About</a>
                                    <a className="text-white">Resume</a>
                                    <a className="text-white">Contact</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div>
                                <h4 className="text-white text-white mb-4">Social Media</h4>
                                <div className="d-flex flex-column flex-wrap gap-4 ">
                                    <a className="text-white">Instagram</a>
                                    <a className="text-white">Facebook</a>
                                    <a className="text-white">Behance</a>
                                    <a className="text-white">Linked</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className=" mx-auto section-margin-top opacity-5">
                            <div
                                className="d-flex flex-wrap align-items-center justify-content-between text-white footer-text-rights">
                                <p className="footer-text-rights"> Copyright © 2022. InStep. All rights reserved.</p>
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

    )
}

export default Footer
