import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
      alt="not found"
      className="not-found-img"
    />
    <h1 className="not-found-heading">Page Not Found</h1>
    <p className="description">
      We are sorry, the page you requested could not be found
    </p>
    <Link to="/"> 
      <button type='button' className='home-btn'>
          Go to Home
      </button>
    </Link>
  </div>
)

export default NotFound