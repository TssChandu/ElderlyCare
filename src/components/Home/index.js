import {Link} from 'react-router-dom'
import recreationalImage from '../../assets/Social_Recreational_Activities.jpg'
import Header from '../Header'
import './index.css'

const Home = () => (
        <>
            <Header/>
            <div className='home-container'>
                <div className='health-content-container'>
                    <h1 className='Home-heading'>Elderly Health Tips</h1>
                    <img className='home-imgs' src="https://www.doctoriduniya.com/images/healthfeed/0000880.jpeg" alt="health tips"/>
                    <p className='home-para'>No matter your age, it’s important to take care of your body 
                    and prevent illness. But if you’re 65 or older, something as simple as the flu or a 
                    common cold can progress and lead to complications. This includes secondary infections like 
                    pneumonia, bronchitis, an ear infection, or a sinus infection. If you have a chronic condition 
                    such as asthma or diabetes, a respiratory illness can make these worse.Because of this, it’s
                    important to make healthy choices to strengthen your immune system and reduce the likelihood 
                    of illness. 
                    </p> 
                    <Link to ="/health-tips">
                        <button type='button' className='tips-btn' >Get More Details</button>
                    </Link>
                </div>
                <div className='health-content-container'>
                    <h1 className='Home-heading'>Importance of Recreational Activities</h1>
                    <img className='home-imgs' src={recreationalImage} alt="recreationImage"/>
                    <p className='home-para'>Recreation is the key to having a healthy mind, along with a healthy life. 
                    Indulging in physical activities has been observed to not only improve functioning but also mental 
                    health of older adults. Recreational activities for senior citizens help them improve their quality
                    of life, meet new people, and continue to improve their overall well-being. For seniors who recently
                    went through a major procedure, physical recreation especially makes a difference as it becomes a 
                    part of the healing process, allowing for quick recovery of the body and mind.
                    </p> 
                    <Link to ="/recreational-activities">
                        <button type='button' className='tips-btn'>Get More Details</button>
                    </Link>
                </div>
            </div>
        </>
)

    

export default Home