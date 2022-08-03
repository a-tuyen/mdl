import axios from "axios";
import { useState } from "react";


const Form = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
 

    const onFormSubmit = (evt) => {
        evt.preventDefault();
        console.log('NAME:', name);
        console.log('message:', message);
        console.log('email: ', email);
        // return axios.post('http://localhost:3000/contact', {message, name})
        console.log('event ', evt.target.elements)
        
    }

    return (
        <div className="Form">
            <h1> Send us a Message!</h1>
                <form onSubmit={onFormSubmit}>
                    <label>Name</label>
                    <input type='text' required name='name' value={name} onChange={(evt) => setName(evt.target.value)} />
                    <label>Email</label>
                    <input type='text' required name='email' value={email} onChange={(evt) => setEmail(evt.target.value)}/>
                    <label>Message</label>
                    <input type='text' required name='message' value={message} onChange={(evt) => setMessage(evt.target.value)} />
                    <button type='submit'>Submit</button>
                </form>
                <h1>Email Sent</h1>
        </div>
    );
};

export default Form;