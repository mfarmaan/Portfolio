import React from 'react'

const AdminCardRight = (props) => {


    return (
        <div className={props.cardClass ? `${props.cardClass} admin__card` : "admin__card"}  >
            <div className="admin__card_body">
                {props.tagline && (<p>{props.tagline}</p>)}
                <div className='d-flex flex-wrap align-items-center gap-5'>
                    {props.userCount && (<h3 className='text-red'>Recent User: {props.userCount}</h3>)}
                    {props.valueViews && (<h3 className='text-red'>Total Views: {props.valueViews}</h3>)}
                </div>
                <div className='d-flex justify-content-center'>
                    <table className='table table-responsive'>
                        <thead><tr>
                            <th>{props.heading}</th>
                            <th>Recent Posts Views</th>
                            <th>Views</th>
                        </tr></thead>
                        {props.name && (<tbody>
                            <tr>
                                <td>{props.name}</td>
                                <td>{props.postTitle}</td>
                                <td>{props.viewsCount} Views</td>
                            </tr>
                        </tbody>)}
                    </table>
                </div>

            </div>
        </div >
    )
}

export default AdminCardRight
