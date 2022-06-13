import React from 'react'

import StatuteParagraph from "../../components/molecules/statuteParagraph"
import Footer from "../../components/organisms/footer"
import Nav from "../../components/organisms/nav"

import './statutePage.scss'

const StatutePage = () => {
    return (
        <div className="statutePage">
            <Nav />
            <div className="statutePage__content">
                <h1>Statute</h1>
                <StatuteParagraph />
                <StatuteParagraph />
                <StatuteParagraph />
                <StatuteParagraph />
                <StatuteParagraph />
                <StatuteParagraph />
                <StatuteParagraph />
                <StatuteParagraph />
                <StatuteParagraph />
                <StatuteParagraph />
                <StatuteParagraph />
            </div>
            <Footer />
        </div>
    )
}

export default StatutePage