import React from 'react'
import Header from './Common/Header'
import ManageUser from './Admin assets/ManageUser'
import Slider from '../assets/Slider'
import usericon from '../img/users-three-thin.png'
import { useNavigate } from 'react-router-dom'

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
                                <Slider />
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
