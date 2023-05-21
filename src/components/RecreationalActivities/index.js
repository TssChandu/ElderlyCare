import ReactPlayer from 'react-player'
import Header from '../Header'
import './index.css'

const RecreationalActivities = () => (
    <div className='bg-container'>
        <Header/>
        <div className='recreation-container'>
            <h1 className='main-heading'>Recreational Activities</h1>
            <ReactPlayer url="https://www.youtube.com/watch?v=DKugJPzZTw8&t=6s" controls width="100%" height="80vh"/>
        </div>
    </div>
)

export default RecreationalActivities