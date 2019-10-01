import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div  style={headerStyle}>
            <h1>To Do List </h1>
            <Link to='/' style={linkStyle}> Home </Link> | <Link to='/about' style={linkStyle}> About </Link>
        </div>
    );
}

const headerStyle = {
    backgroundColor: 'black',
    textAlign: 'center',
    padding: '30px',
    margin: '0px',
    color: 'white'
}

const linkStyle = {
    textDecoration: 'none'
}


export default Header;
