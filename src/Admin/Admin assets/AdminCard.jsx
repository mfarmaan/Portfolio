import React from 'react';

function AdminCard(props) {
    return (
        <div className={`${props.cardClass} admin__card`} >
            <div className="admin__card_body">
                <p>{props.mainHeading}</p>
                {props.subHead && (<p>{props.subHead}</p>)}
                {props.Icon && (<div className='icon__section'>
                    {props.Icon}
                </div>)}

                {props.totalCounts && (<h3>{props.totalCounts}</h3>)}
                {props.tagline && (<p>{props.tagline}</p>)}

                {props.btnText && (<button className='Admin__Btn'>{props.btnText}</button>)}

            </div>
            {props.cardImg && (<div className="admin__card_body-right">
                <img src={props.cardImg} alt="" width={props.imgWidth} />
            </div>
            )}
        </div>
    )
}

export default AdminCard
