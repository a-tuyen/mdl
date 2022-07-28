import axios from 'axios';
import React, {useState} from 'react'

import ContactForm from "../components/ContactForm";

const Contact = () => {

    axios.get('http://localhost:5000/contact')
        .then(res => {
            console.log('data has come back');
            console.log(res.data);
        })
    return (
        <div className='Contact-us'>
            <h1>Contact Us</h1>
            <ContactForm />
        </div>
    );
};

export default Contact;