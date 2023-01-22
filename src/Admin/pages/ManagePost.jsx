import React from 'react'
import Search from '../../assets/Search'
import Addpost from '../Admin assets/Addpost'
import Button from '../Admin assets/Button'
import Header from '../Common/Header'

function ManagePost() {

    return (
        <>


            <div className="my-5">
                <div className="container">
                    <div className="row">
                        <Addpost
                            title="Creating a User-Friendly E-Commerce Website: The Zebra.com Case Study"
                            details="Here you can see a selection of my past work as a UI/UX designer. I've included a variety of projects, ranging from websites and mobile apps to software and interactive experiences. I hope you find my portfolio to be a helpfHere you can see a selection of my past work as a UI/UX designer. "
                        />
                    </div>
                </div>
            </div>
            <div className="my-5">
                <div className="container">
                    <div className="row">
                        <Addpost
                            title="Creating a User-Friendly E-Commerce Website: The Zebra.com Case Study"
                            details="Here you can see a selection of my past work as a UI/UX designer. I've included a variety of projects, ranging from websites and mobile apps to software and interactive experiences. I hope you find my portfolio to be a helpfHere you can see a selection of my past work as a UI/UX designer. "
                        />
                    </div>
                </div>
            </div>

        </>
    )
}

export default ManagePost
