import React, { useState } from 'react'
import Button from "../../components/atoms/button"

import Footer from "../../components/organisms/footer"
import Nav from "../../components/organisms/nav"

import './contactPage.scss'

const ContactPage = () => {
    const [contactDetails, setContactDetails] = useState({
        name: '',
        email: '',
        title: '',
        message: ''
    })
    
    const handleChange = e => {
        setContactDetails({
            ...contactDetails,
            [e.target.name]: e.target.value
        })
    }
    
    return (
        <div className="contactPage">
            <Nav />
            <div className="contactPage__content">
                <h2>Contact</h2>
                <form 
                    className="contactPage--form"
                >
                    <div className="boxInput">
                        <label htmlFor="">Name:</label>
                        <input 
                            type="text" 
                            name="name"
                            autoComplete="off"
                            required
                            value={contactDetails.name}
                            onChange={handleChange}    
                        />
                    </div>
                    <div className="boxInput">
                        <label htmlFor="">Email:</label>
                        <input 
                            type="email" 
                            name="email"
                            autoComplete="off"
                            required
                            value={contactDetails.email}
                            onChange={handleChange}    
                        />
                    </div>
                    <div className="boxInput">
                        <label htmlFor="">Title:</label>
                        <input 
                            type="text" 
                            name="title"
                            autoComplete="off"
                            required
                            value={contactDetails.title}
                            onChange={handleChange}    
                        />
                    </div>
                    <div className="boxInput">
                        <label htmlFor="">Message:</label>
                        <textarea 
                            maxLength='1000'
                            name="message"
                            value={contactDetails.message}
                            onChange={handleChange}    
                        />
                    </div>
                    <Button>Send message</Button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default ContactPage