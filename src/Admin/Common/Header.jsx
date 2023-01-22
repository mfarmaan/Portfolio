import React, { useState } from 'react'
import Nav__icon from "../../img/icon__nav.png"
import profie from "../../img/profile.png"
import Offcanvas from 'react-bootstrap/Offcanvas';
import dashmenu from "../../img/dashboard_customize_FILL0_wght200_GRAD0_opsz48 1.png"
import addpost from "../../img/library_add_FILL0_wght200_GRAD0_opsz48 1.png"
import tags from "../../img/sell_FILL0_wght200_GRAD0_opsz48.png"
import media from '../../img/folder_open_FILL0_wght200_GRAD0_opsz48.png'
import addon from '../../img/share_FILL0_wght200_GRAD0_opsz48.png'
import users from '../../img/supervisor_account_FILL0_wght200_GRAD0_opsz48.png'
import { useLocation, useNavigate } from 'react-router-dom'
import Search from '../../assets/Search';
import Button from '../Admin assets/Button';


function Header(props) {
    const location = useLocation()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();
    const [activeMenu, setActiveMenu] = useState("/admin");

    const navigateMenu = (path) => {
        path && navigate(path)

        path && setActiveMenu(path)

    }

    return (
        <>
            <div className='admin__header'>
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className=" col-6 admin__headers ">
                            <div className="d-flex align-items-center">
                                <a className='pointer' onClick={handleShow}>
                                    <img src={Nav__icon} alt="" /></a>
                                <h1>Dashboard</h1>
                            </div>
                        </div>
                        <Offcanvas show={show} onHide={handleClose}>
                            <Offcanvas.Header closeButton>
                                <h5 className="offcanvas-title">uiux<span>.store</span></h5>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <div className='container'>
                                    <div className="row flex-column justify-content-center">
                                        <div className="col-md-12">
                                            <div onClick={() => navigateMenu('/admin')} className={`${activeMenu === '/admin' ? "addmin__active" : null} d-flex align-align-items-center menu_tabs`}>
                                                <img id="one" width={48} src={dashmenu} alt="" /> <h2>Dashboard</h2>
                                            </div>
                                            <div onClick={() => navigateMenu('/managepost')} className={`${activeMenu === '/managepost' ? "addmin__active" : null} d-flex align-align-items-center menu_tabs`}>
                                                <img id="one" width={48} src={addpost} alt="" /> <h2>Add Post/Edit</h2>
                                            </div>
                                            <div onClick={() => navigateMenu('/addon')} className={`${activeMenu === '/addon' ? "addmin__active" : null} d-flex align-align-items-center menu_tabs`}>
                                                <img id="one" width={48} src={tags} alt="" /> <h2>Categories/tags</h2>
                                            </div>
                                            <div onClick={() => navigateMenu()} className={`${activeMenu === '/' ? "addmin__active" : null} d-flex align-align-items-center menu_tabs`}>
                                                <img id="one" width={48} src={media} alt="" /> <h2>Media library</h2>
                                            </div>
                                            <div onClick={() => navigateMenu()} className={`${activeMenu === '/' ? "addmin__active" : null} d-flex align-align-items-center menu_tabs`}>
                                                <img id="one" width={48} src={addon} alt="" /> <h2>Integrations Addon</h2>
                                            </div>
                                            <div onClick={() => navigateMenu("/manageuser")} className={`${activeMenu === '/manageuser' ? "addmin__active" : null} d-flex align-align-items-center menu_tabs`}>
                                                <img id="one" width={48} src={users} alt="" /> <h2>Users Role</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </Offcanvas.Body>
                        </Offcanvas>

                        {/* <div className="offcanvas offcanvas-start column-gap-1" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                                    <div className="offcanvas-header">
                                        <h5 className="offcanvas-title" id="offcanvasExampleLabel"></h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div className="offcanvas-body">
                                        <div className='container'>
                                            <div className="row flex-column justify-content-center">
                                                <div className="col-md-12">
                                                    <div onClick={() => navigateMenu('/admin')} className={`${activeMenu === '/admin' ? "addmin__active" : null} d-flex align-align-items-center menu_tabs`}>
                                                        <img id="one" width={48} src={dashmenu} alt="" /> <h2>Dashboard</h2>
                                                    </div>
                                                    <div onClick={() => navigateMenu('/managepost')} className={`${activeMenu === '/managepost' ? "addmin__active" : null} d-flex align-align-items-center menu_tabs`}>
                                                        <img id="one" width={48} src={addpost} alt="" /> <h2>Add Post/Edit</h2>
                                                    </div>
                                                    <div onClick={() => navigateMenu('/addon')} className={`${activeMenu === '/addon' ? "addmin__active" : null} d-flex align-align-items-center menu_tabs`}>
                                                        <img id="one" width={48} src={tags} alt="" /> <h2>Categories/tags</h2>
                                                    </div>
                                                    <div onClick={() => navigateMenu()} className={`${activeMenu === '/' ? "addmin__active" : null} d-flex align-align-items-center menu_tabs`}>
                                                        <img id="one" width={48} src={media} alt="" /> <h2>Media library</h2>
                                                    </div>
                                                    <div onClick={() => navigateMenu()} className={`${activeMenu === '/' ? "addmin__active" : null} d-flex align-align-items-center menu_tabs`}>
                                                        <img id="one" width={48} src={addon} alt="" /> <h2>Integrations Addon</h2>
                                                    </div>
                                                    <div onClick={() => navigateMenu("/manageuser")} className={`${activeMenu === '/manageuser' ? "addmin__active" : null} d-flex align-align-items-center menu_tabs`}>
                                                        <img id="one" width={48} src={users} alt="" /> <h2>Users Role</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                        <div className=" col-3 admin__headers_sec2 ">
                            <div className="d-flex align-items-center">
                                <img src={profie} alt="" />
                                <p>Username</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {
                location.pathname === "/managepost" ? (<div className='button-margin-top'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <Search
                                    btntext=" Search..."
                                    class="abcd" />
                                <p className='my-3'>Total Results: 124</p>
                            </div>
                            <div className="col-md-6">
                                <div className=' d-flex justify-content-end'>
                                    <Button
                                        onClick={() => navigateMenu('/user/editpost')}

                                        btnText="Add New Post"
                                        className="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>) : ""
            }</>


    )
}

export default Header
