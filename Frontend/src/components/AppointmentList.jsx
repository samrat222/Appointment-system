import React from 'react'

const AppointmentList = ({ appointments }) => {

    return (
        <>
            <h2>Appointement</h2>
            <ul>
                {
                    appointments.map((appointment) => (
                        <li key={appointment._id}>
                            <p>Date: {appointment.date}</p>
                            <p>User: {appointment.user}</p>
                            <p>Type: {appointment.type}</p>
                        </li>
                    ))}
            </ul>
        </>
    )
}

export default AppointmentList