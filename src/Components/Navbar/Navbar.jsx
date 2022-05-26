import React from 'react'
import Toggle from '../Toggle/Toggle'
import { Link } from 'react-scroll'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Sherlock</div>
                <Toggle />
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{ listStyleType: 'none' }}>
                        <Link spy={true} smooth={true} to='Navbar' activeClass='activeClass'>
                            <li>Home</li>
                        </Link>
                        <Link spy={true} smooth={true} to='Services' >
                            <li>Services</li>
                        </Link>
                        <Link spy={true} smooth={true} to='Experience'>
                            <li>Experince</li>
                        </Link>
                        <Link spy={true} smooth={true} to='Portfolio' >
                            <li>Portfolio</li>
                        </Link>
                        <Link spy={true} smooth={true} to='Testimonials' >
                            <li>Testimonials</li>
                        </Link>
                    </ul>
                </div>
                <button className="button n-button">
                    Contact
                </button>
            </div>
        </div>
    )
}

export default Navbar
