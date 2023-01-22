import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IoIosPeople, IoMdBusiness } from 'react-icons/io';
import { FiTrendingUp } from 'react-icons/fi';
import { BiCategoryAlt } from 'react-icons/bi';
import { CgDesignmodo } from 'react-icons/cg';
import { FaAward } from 'react-icons/fa';
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
                            <a className="nav-link active" aria-current="page"><IoIosPeople size={24} /> JOIN US</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-red" ><FiTrendingUp size={24} color="red" /> Trending</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" ><FaAward size={24} /> Weekly UI UX Designs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"><IoMdBusiness size={24} /> Business</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" > <CgDesignmodo size={24} /> Designers</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" ><BiCategoryAlt size={24} /> Categories</a>
                        </li>

                    </ul>

                </div>
            </div>
        </nav >
    )
}

export default Header
