import React from 'react'
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/')
    }
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand" onClick={navigateToHome}>uiux.<span>store</span></a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Resume/CV</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#casestudy">Case Studies</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact form</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav >
    )
}

export default Header
