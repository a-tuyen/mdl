import axios from 'axios';
// import React, {useState} from 'react'
import { useState } from 'react'

import Form from "../components/Form";

const Contact = () => {

    axios.get('http://localhost:5000/contact')
        .then(res => {
            console.log('data has come back');
            console.log('data: ' + res.data);
        })
    return (
        <div className='Contact-us'>
            <h1>Contact Us</h1>
            <Form />
        </div>
    );
};

export default Contact;