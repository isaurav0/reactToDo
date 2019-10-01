import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
    return (
        <div  className="headerStyle" style={styles}>
            <h1>To Do List </h1>
            <Link to='/' className='link'> Home </Link> | <Link to='/about' className='link'> About </Link>
        </div>
    );
}

export default Header;
