// Write your code here
import {Component} from 'react'
import {format} from 'date-fns'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

let result = []
const datePlaceholder = 'dd/mm/yyyy'
class Appointments extends Component {
  state = {appointmentsList: [], title: '', date: ''}

  onClickStarredBtnFilter = () => {
    const {appointmentsList} = this.state
    result = appointmentsList.filter(eachApp => eachApp.isStarred)
    this.setState({
      appointmentsList: [...result],
    })
  }

  onClickUpdateStar = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(eachapp => {
        if (eachapp.id === id) {
          return {...eachapp, isStarred: !eachapp.isStarred}
        }
        return eachapp
      }),
    }))
  }

  onClickAddBtn = () => {
    const {title, date} = this.state
    const newAppointment = {
      id: uuidv4(),
      title,
      date,
      isStarred: false,
    }
    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      title: '',
      date: '',
    }))
  }

  onChangeDate = event => {
    this.setState({
      date: format(new Date(event.target.value), 'dd MMMM yyyy,EEEE'),
    })
  }

  onChangeInput = event => {
    this.setState({
      title: event.target.value,
    })
  }

  render() {
    const {appointmentsList, date, title} = this.state

    return (
      <div className="bg-container">
        <div className="appointments-container">
          <form className="form-image-container">
            <div className="top-container">
              <h1>Add Appointment</h1>
              <label htmlFor="input">TITLE</label>
              <input
                type="text"
                id="input"
                value={title}
                placeholder="Title"
                className="inputelement"
                onChange={this.onChangeInput}
              />
              <label htmlFor="date">DATE</label>
              <input
                type="date"
                id="date"
                value={date}
                placeholder={datePlaceholder}
                className="dateelement"
                onChange={this.onChangeDate}
              />
              <button
                className="addbtn"
                type="button"
                onClick={this.onClickAddBtn}
              >
                Add
              </button>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="appointments-image"
            />
          </form>
          <hr className="horizontal-line" />
          <div className="bottom-container">
            <div className="appointment-heading-container">
              <h1>Appointments</h1>
              <button
                type="button"
                className="starred-button"
                onClick={this.onClickStarredBtnFilter}
              >
                starred
              </button>
            </div>
            <ul className="unordered-list">
              {appointmentsList.map(eachApp => (
                <AppointmentItem
                  app={eachApp}
                  key={eachApp.id}
                  onClickUpdateStar={this.onClickUpdateStar}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Appointments
