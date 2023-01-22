import React from 'react'
import BlogDemo from '../../img/blog-demo.png'

function Addpost(props) {
    return (
        <>
            <div className='col-md-2'>
                <div className='Addpost__image'>
                    <img src={props.Postimg ? props.Postimg : BlogDemo} alt="" />
                </div>
            </div>
            <div className='col-md-8'>
                <h2>{props.title ? props.title : "User your Title Here"}</h2>
                <p>{props.details ? props.details : "User your Post Details Here"}</p>
            </div>
            <div className='col-md-2'>
                <div className="d-flex flex-wrap flex-column">
                    <button className='admin__addpost-btn mb-3'>{props.buttontext1 ? props.buttontext1 : "Edit This Post"}</button>
                    <button className='admin__delete-btn'>{props.buttontext2 ? props.buttontext2 : "Delete This Post"} </button>
                </div>
            </div>
        </>
    )
}

export default Addpost
