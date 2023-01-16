import React from 'react'

function ManageUser(props) {

    return (
        <div onClick={props.navigate} className='manage__user'>
            <div className='show_users'>
                <img width={props.width} src={props.src} alt="" />
                <h2>{props.number}</h2>
            </div>
            <div className='show__title'>
                <h2>Manage users</h2>
            </div>
        </div>
    )
}

export default ManageUser
