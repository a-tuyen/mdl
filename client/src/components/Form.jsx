import axios from "axios";
import { useState } from "react";


const Form = () => {

    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const onFormSubmit = (evt) => {
        evt.preventDefault();
        console.log('NAME:', name);
        console.log('message:', message);
        
    }

    return (
        <div className="Form">
            <h1> Send us a Message!</h1>
                <form onSubmit={onFormSubmit}>
                    <label>Name</label>
                    <input type='text' required name='name' value={name} onChange={(evt) => setName(evt.target.value)} />
                    <label>Email</label>
                    <input type='text' required />
                    <label>Subject</label>
                    <input type='text' required />
                    <label>Message</label>
                    <input type='text' required name='message' value={message} onChange={(evt) => setMessage(evt.target.value)} />
                    <button type='submit'>Submit</button>
                </form>
                <h1>Email Sent</h1>
        </div>
    );
};

export default Form;