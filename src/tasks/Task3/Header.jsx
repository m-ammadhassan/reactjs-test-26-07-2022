import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Header = () => 
{
    const [active, setActive] = useState('Home');

    return(
        <header>
            <nav className='flex'>
                <div className='logo'>
                    <h2><Link to='/'>Task 3</Link></h2>
                </div>
                <div className='navbar'>
                    <Link to='/Home' onClick={() => setActive('Home')} className={active === 'Home'? 'active': ''}>Home</Link>
                    <Link to='/About' onClick={() => setActive('About')} className={active === 'About'? 'active': ''}>About</Link>
                    <Link to='/Profile' onClick={() => setActive('Profile')} className={active === 'Profile'? 'active': ''}>Profile</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;