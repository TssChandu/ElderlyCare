import ReactPlayer from 'react-player'
import Header from '../Header'
import './index.css'

const RecreationalActivities = () => (
    <div className='bg-container'>
        <Header/>
        <div className='recreation-container'>
            <h1 className='main-heading'>Common Elderly Problems</h1>
            <ReactPlayer url="https://www.youtube.com/watch?v=B0zp1HiFunk" controls width="100%" height="80vh"/>
        </div>
    </div>
)

export default RecreationalActivities