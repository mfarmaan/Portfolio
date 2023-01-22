import React from 'react'

function Button(props) {
    return (
        <div >
            <button onClick={props.onClick} className={`${props.className} Admin__Btn `} >
                {props.btnText}
            </button>
        </div >
    )
}

export default Button
