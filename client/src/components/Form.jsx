import axios from "axios";
import React, { useState } from "react";


const Form = () => {
    const [sent, setSent] = useState(false)
    const [text, setText] = useState('')

    const handleSend = async () => {
        setSent(true)
        try {
            await axios.post('http://localhost:3000/', {
                text
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="Form">
            <h1> Send us a Message!</h1>

            {!sent ? (
                <form onSubmit={handleSend}>
                    <label>Name</label>
                    <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
                    <label>Email</label>
                    <input type='text' required />
                    <label>Subject</label>
                    <input type='text' required />
                    <label>Message</label>
                    <input type='text' required />
                    <button type='submit'>Submit</button>
                </form>
            ) : (
                <h1>Email Sent</h1>
            )}
        </div>
    );
};

export default Form;