import React from 'react'
import { MdTouchApp } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

function Backto() {
    const navigate = useNavigate();

    const navigateToBack = () => {
        navigate('../')
    }

    return (
        <div>
            <div onClick={navigateToBack} className="Back__to" style={{
                padding: "15px",
                width: "10%",
                background: "#3e6aff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10px",
                position: "fixed",
                left: "85%",
                top: "80%",
                cursor: "pointer"


            }}>
                <h1 className='Back__to-h1' style={{
                    color: "white",
                    fontSize: "24px"
                }}><MdTouchApp size={30} /> Back To </h1>
            </div>
        </div >
    )
}

export default Backto
