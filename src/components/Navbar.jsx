import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({user}) => {
    return (
        <div className='navbar'>
            <span className='logo'><Link className='link' to="/">Karry App</Link></span>
            {user ? (
            <ul className='list'>
             <li className='listItem'>
                <img src="https://media.istockphoto.com/photos/portrait-of-successful-black-male-modern-day-student-holding-picture-id1311634222?s=612x612" alt="" className='avatar' />
            </li>
            <li className='listItem'>Shankar Doe</li>
            <li className='listItem'>Logout</li>
            </ul>
                ) :(<Link className='link' to ="login">Login</Link>)
            }
        </div>
    );
}

export default Navbar;
