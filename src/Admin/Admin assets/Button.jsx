import React from 'react'

function Button(props) {
    return (
        <div >
            <button className={`${props.className} Admin__Btn `} >
                {props.btnText}
            </button>
        </div >
    )
}

export default Button
