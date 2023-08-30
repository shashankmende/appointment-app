// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {app, onClickUpdateStar} = props
  const {id, title, date, isStarred} = app
  console.log(app)
  const isStarImage = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickStarImg = () => {
    onClickUpdateStar(id)
  }

  return (
    <li className="list-item">
      <div className="heading-date-container">
        <p>{title}</p>
        <p>Date:{date}</p>
      </div>
      <button
        type="button"
        data-testid="star"
        className="star-button"
        onClick={onClickStarImg}
      >
        <img src={isStarImage} alt="star" />
      </button>
    </li>
  )
}
export default AppointmentItem
