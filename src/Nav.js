import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <>
            <div className='Navbar'>
                <a className='Home' href=''>Home</a>
                <a className='Outlet' href=''>Outlet</a>
                <a className='Transaction' href=''>Transaction</a>
                <a className='Account' href=''>Account</a>

                <a className='Logout' href=''><img></img></a>
            </div>
            </>
        );
    }
}

export default Nav;
