import React from 'react'
import Nav__icon from "../../img/icon__nav.png"
import profie from "../../img/profile.png"
import dashmenu from "../../img/dashboard_customize_FILL0_wght200_GRAD0_opsz48 1.png"
import addpost from "../../img/library_add_FILL0_wght200_GRAD0_opsz48 1.png"
import tags from "../../img/sell_FILL0_wght200_GRAD0_opsz48.png"
import media from '../../img/folder_open_FILL0_wght200_GRAD0_opsz48.png'
import addon from '../../img/share_FILL0_wght200_GRAD0_opsz48.png'
import users from '../../img/supervisor_account_FILL0_wght200_GRAD0_opsz48.png'
function Header() {




    return (
        <div>
            <div className='admin__header'>
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className=" col-6 admin__headers ">
                            <div className="d-flex align-items-center">
                                <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                                    <img src={Nav__icon} alt="" /></a>
                                <h1>Dashboard</h1>
                            </div>
                        </div>
                        <div className="offcanvas offcanvas-start column-gap-1" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasExampleLabel">uiux<span>.store</span></h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <div className='container'>
                                    <div className="row flex-column justify-content-center">
                                        <div className="col-md-12">
                                            <div className='d-flex align-align-items-center menu_tabs addmin__active'>
                                                <img id="one" width={48} src={dashmenu} alt="" /> <h2>Dashboard</h2>
                                            </div>
                                            <div className='d-flex align-align-items-center menu_tabs'>
                                                <img id="one" width={48} src={addpost} alt="" /> <h2>Add Post/Edit</h2>
                                            </div>
                                            <div className='d-flex align-align-items-center menu_tabs'>
                                                <img id="one" width={48} src={tags} alt="" /> <h2>Categories/tags</h2>
                                            </div>
                                            <div className='d-flex align-align-items-center menu_tabs'>
                                                <img id="one" width={48} src={media} alt="" /> <h2>Media library</h2>
                                            </div>
                                            <div className='d-flex align-align-items-center menu_tabs'>
                                                <img id="one" width={48} src={addon} alt="" /> <h2>Integrations Addon</h2>
                                            </div>
                                            <div className='d-flex align-align-items-center menu_tabs'>
                                                <img id="one" width={48} src={users} alt="" /> <h2>Users Role</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" col-3 admin__headers_sec2 ">
                            <div className="d-flex align-items-center">
                                <img src={profie} alt="" />
                                <p>Username</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
