import { Component } from 'react'
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import {Link} from 'react-router-dom'
import './index.css'

class Header extends Component{
    state = {isMenuClicked: false}

    onClosing = () => {
        this.setState(prevState => ({
            isMenuClicked: !prevState.isMenuClicked
        }))
    }

    render(){
        const {isMenuClicked} = this.state
        return(
            <>
            <nav className='nav-container'>
                <div className='logo-container'>
                    <Link to="/" className='link-style'>
                        <img className='elderly-logo' src='https://res.cloudinary.com/dzvngxapf/image/upload/v1684595127/vecteezy_elderly-senior-care-logo_14744468_u7gpen.jpg' alt='elderly care'/>
                        <h1 className='nav-heading'>Elderly Care</h1>
                    </Link>
                </div>
                <Link to = "/health-calculator" className='link-style' >
                    <p className='health-calculator'>Health Calculator</p>
                </Link>
                <button type='button' className='close-btn' onClick={this.onClosing}>
                    <FiMenu size={35} color='#ffffff'/>        
                </button>     
            </nav>
            {isMenuClicked && (
                <ul className='nav-list-container'>
                    <Link to ="/health-tips" className='link-style'> 
                        <li className='nav-list'>Health Tips</li>
                    </Link>
                    <Link to ="/recreational-activities" className='link-style'>
                    <li className='nav-list'>Recreational Activities</li>
                    </Link>
                    <Link to ="/common-problems" className='link-style grow-list'>
                    <li className='nav-list'>Common Problems</li>
                    </Link>
                    <button type='button' className='close-btn' onClick={this.onClosing}>
                       <IoClose size={35} color='#ffffff' />
                    </button>
                </ul>
            )}
            </>
        )
    }
} 

export default Header