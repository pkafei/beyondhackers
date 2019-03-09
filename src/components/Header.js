import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="https://www.beyondhackers.com" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>Portia Burton</strong></h1>
                        <p> developer / dreamer / expat </p>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
