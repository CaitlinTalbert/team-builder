import React from 'react'; 

export default function Member (props) {
    const { details } = props

    return (
        <div className="form container">
            <h2>{details.membersName}</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
        </div>
    )
}