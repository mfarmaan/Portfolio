import React from 'react'

function ManageUser(props) {

    return (
        <div onClick={props.navigate} className='manage__user' style={{ height: props.height }}>
            <div className='show_users'>
                <img width={props.imgwidth} src={props.src} alt="" />
                <h2 className={props.classText}>{props.centerTitle}</h2>
            </div>
            <div className='show__title'>
                <h2 className='d-flex align-items-center justify-content-center gap-3'><img width={props.classTitleImage} src={props.titleImage} alt="" />{props.title}</h2>
            </div>
        </div>
    )
}

export default ManageUser
