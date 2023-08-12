import {Component} from 'react'
import Header from '../Header'
import {v4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

import './index.css'

const appointmentsList = JSON.parse(localStorage.getItem('appointment'))

class Appointments extends Component {
  state = {
    doctorInput: '',
    problemInput: "",
    dateInput: '',
    appointmentList: appointmentsList !== null ? appointmentsList : [],
    filterApplied: false,
  }

  onChangeDoctorInput = event => {
    this.setState({doctorInput: event.target.value})
  }

  onChangeProblemInput = event => {
    this.setState({problemInput: event.target.value})
  }

  onChangeDateInput = event => {
    this.setState({dateInput: event.target.value})
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {doctorInput, dateInput,problemInput} = this.state
    const newAppointment = {
      id: v4(),
      doctorName: doctorInput,
      date: dateInput,
      problem: problemInput,
      isStarred: false,
    }
    localStorage.setItem(
      'appointment',
      appointmentsList !== null
        ? JSON.stringify([...appointmentsList, newAppointment])
        : JSON.stringify([newAppointment]),
    )
    this.setState(prevState => ({
      doctorInput: '',
      problemInput: '',
      dateInput: '',
      appointmentList: [...prevState.appointmentList, newAppointment],
    }))
  }

  toggleIsStarred = id => {
    const storedAppointmentsList = JSON.parse(
      localStorage.getItem('appointment'),
    )
    if (storedAppointmentsList !== null) {
      const updatedAppList = storedAppointmentsList.map(eachApp => {
        if (id === eachApp.id) {
          return {...eachApp, isStarred: !eachApp.isStarred}
        }
        return eachApp
      })
      localStorage.setItem('appointment', JSON.stringify(updatedAppList))
    }
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(eachApp => {
        if (id === eachApp.id) {
          return {...eachApp, isStarred: !eachApp.isStarred}
        }
        return eachApp
      }),
    }))
  }

  onClickStarredBtn = () => {
    this.setState(prevState => ({
      filterApplied: !prevState.filterApplied,
    }))
  }

  getFilteredList = () => {
    const {appointmentList, filterApplied} = this.state
    if (filterApplied) {
      return appointmentList.filter(
        eachTransaction => eachTransaction.isStarred === true,
      )
    }
    return appointmentList
  }

  render() {
    const {doctorInput, dateInput, filterApplied,problemInput} = this.state
    const filteredBg = !filterApplied ? 'star-bg' : ''
    const filteredAppointmentList = this.getFilteredList()
    return (
      <div className="app-bg-container">
        <Header/>
        <div className="card">
          <div className="app-container">
            <div className="app-content-container">
              <h1 className="main-heading">Add Doctor Appointment</h1>
              <form className="form-container" onSubmit={this.onAddAppointment}>
                <label className="label" htmlFor="DoctorInput">
                  Doctor Name
                </label>
                <input
                  type="text"
                  id="DoctorInput"
                  value={doctorInput}
                  className="input"
                  placeholder="Enter Doctor Name"
                  onChange={this.onChangeDoctorInput}
                />
                <label className="label" htmlFor="problemInput">
                  Problem
                </label>
                <textarea
                  type="text"
                  id="problemInput"
                  value={problemInput}
                  className="input"
                  placeholder="Enter Problem"
                  onChange={this.onChangeProblemInput}
                >
                    {problemInput}
                </textarea>
                <label className="label" htmlFor="dateInput">
                  Date
                </label>
                <input
                  type="date"
                  value={dateInput}
                  className="input"
                  id="dateInput"
                  onChange={this.onChangeDateInput}
                  placeholder="dd/mm/yyyy"
                />
                <button className="add-button" type="submit">
                  Add
                </button>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="appointment-image"
            />
          </div>
          <hr className="line" />
          <div className="btm-app-container">
            <h1 className="app-heading">Appointments</h1>
            <button
              className={`starred-btn ${filteredBg}`}
              type="button"
              onClick={this.onClickStarredBtn}
            >
              {filterApplied ? `Show All` : `Starred`}
            </button>
          </div>
          <ul className="app-list-container">
            {filteredAppointmentList.map(eachApp => (
              <AppointmentItem
                key={eachApp.id}
                appDetails={eachApp}
                toggleIsStarred={this.toggleIsStarred}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments