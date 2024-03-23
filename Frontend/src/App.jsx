import { useState, useEffect } from 'react'
import './App.css'
import AppointmentForm from './components/AppointmentForm'
import AppointmentList from './components/AppointmentList'


function App() {

  const [appointments, setAppointments] = useState([])

  useEffect(() => {
    fetchAppointments()
  }, [])

  const fetchAppointments = async () => {
    const response = await fetch("/api/v1/getData")
    const data = await response.json();
    setAppointments(data)
  }

  return (
    <>
      <h1>Appointment System</h1>
      <AppointmentForm />
      <AppointmentList appointments={appointments} />
    </>
  )
}

export default App
