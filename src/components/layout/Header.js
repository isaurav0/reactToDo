import React from 'react';

const Header = () => {
    return (
        <div>
            <h1 style={headerStyle}>To Do List </h1>
        </div>
    );
}

const headerStyle = {
    backgroundColor: 'black',
    textAlign: 'center',
    padding: '20px',
    margin: '0px',
    color: 'white'
}

export default Header;
