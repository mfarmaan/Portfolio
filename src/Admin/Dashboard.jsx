import React from 'react'
// import Header from './Common/Header';
import ManageUser from './Admin assets/ManageUser'
import Slider from './Admin assets/Slider'
import usericon from '../img/users-three-thin.png'
import manageyourpost from '../img/file-icons_postscript.png'
import { useNavigate } from 'react-router-dom'
import BlogDemo from '../img/blog-demo.png'
import Header from './Common/Header'


function Dashboard() {

    const navigate = useNavigate();

    const manageuser = () => {
        navigate('/manageuser')
    }
    const managePost = () => {
        navigate('/managepost')
    }
    const Integrations = () => {
        navigate('/addon')
    }
    return (
        <>

            <div className='praent-div'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <ManageUser
                                title="Manage users"
                                centerTitle="100+"
                                imgwidth="196"
                                src={usericon}
                                navigate={manageuser} />
                        </div>
                        <div className="col-md-8">
                            <div className='recent__post__slider'>
                                {/* slider */}
                                <Slider
                                    img1={BlogDemo}
                                    lable="Latest Trend"
                                    title="The Future of UI/UX: Predictions and Best Practices htmlFor 2023"
                                    writer="By: Author"
                                    date="20-01-2023"
                                    img2={BlogDemo}
                                    lable2="New News"
                                    title2="The Future of UI/UX: Predictions and Best Practices htmlFor 2023"
                                    writer2="By: Author"
                                    date2="20-01-2023"
                                    img3={BlogDemo}
                                    lable3="Latest Trend"
                                    title3="The Future of UI/UX: Predictions and Best Practices htmlFor 2023"
                                    writer3="By: Author"
                                    date3="20-01-2023" />

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <ManageUser
                                title="Manage your posts"
                                centerTitle="Lorem ipsum dolor sit amet consectetur."
                                navigate={managePost}
                                classText="text-center"
                                titleImage={manageyourpost}
                                classTitleImage="53" />
                        </div>
                        <div className="col-md-6">
                            <ManageUser
                                title="Integrations Addon"
                                centerTitle="1000+"
                                navigate={Integrations}
                                classText="text-center"
                                titleImage={manageyourpost}
                                classTitleImage="53"
                                height="380px" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
