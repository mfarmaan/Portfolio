import React from 'react'
import Header from './Common/Header'
import ManageUser from './Admin assets/ManageUser'
import Slider from './Admin assets/Slider'
import usericon from '../img/users-three-thin.png'
import { useNavigate } from 'react-router-dom'
import BlogDemo from '../img/blog-demo.png'

function Dashboard() {
    const navigate = useNavigate();

    const navigateTgo = () => {
        navigate('/manageuser')
    }
    return (
        <>
            <Header />
            <div className='praent-div'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <ManageUser
                                number="100+"
                                width="196"
                                src={usericon}
                                navigate={navigateTgo} />
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

                        </div>
                        <div className="col-md-6">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
