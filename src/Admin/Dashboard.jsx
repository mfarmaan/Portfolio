import React from 'react'
import { useNavigate } from 'react-router-dom'
import AdminCard from './Admin assets/AdminCard';
import award from '../img/Awards.png'
import { FaUsersCog } from 'react-icons/fa'
import AdminCardRight from './Admin assets/AdminCardRight';




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
            <section id='section_admin'>
                <div className='Admin__dashboard'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <AdminCard
                                    mainHeading="Congratulations Admin"
                                    subHead="You Are got"
                                    totalCounts="1k Views"
                                    tagline="Lets Make A Day"
                                    btnText="Send News Letter"
                                    cardImg={award}
                                    imgWidth="75%"
                                />
                                <div className='d-flex gap-3 pt-3 '>
                                    <AdminCard
                                        mainHeading="Total Users"
                                        totalCounts="500 Active"
                                        cardClass="w-50"
                                        Icon={<FaUsersCog size={"100%"} color="black" />}


                                    />
                                    <AdminCard
                                        mainHeading="Congratulations Admin"
                                        totalCounts="1.3k Posts"
                                        cardClass="w-50"
                                        Icon={<FaUsersCog size={"100%"} color="black" />}

                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className='admin__card-top'>
                                    <AdminCardRight
                                        userCount="100"
                                        valueViews="10k"
                                        heading="Recent Authour"
                                        name="Jone"
                                        postTitle="Lorem ipsum dolor sit ipsum dolor hsgf...."
                                        viewsCount="300"
                                    />


                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className='admin__card-top1'>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Dashboard
