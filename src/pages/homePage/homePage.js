import React from 'react'

import Nav from '../../components/organisms/nav'
import Footer from '../../components/organisms/footer'

import './homePage.scss'

const HomePage = () => {
    return (
        <div className="homePage">
            <Nav />
            <div className="homePage__content">Home</div>
            <Footer />
        </div>
    )
}

export default HomePage
