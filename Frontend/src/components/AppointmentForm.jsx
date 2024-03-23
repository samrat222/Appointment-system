import React, { useState } from 'react'

const AppointmentForm = ({ onSubmit }) => {
    const [date, setDate] = useState('')
    const [user, setUser] = useState('')
    const [type, setType] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ date, user, type });
        setDate('')
        setUser('')
        setType('')
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} />
                <input type="text" placeholder='User' value={user} onChange={(e) => setUser(e.target.value)} />
                <input type="text" value={type} placeholder='type' onChange={(e) => setType(e.target.value)} />
                <button type='Submit'>Submit</button>
            </form>
        </>
    )
}

export default AppointmentForm