import React, { useState } from "react";
import '../styles/ContactForm.scss'

const ContactForm = () => {
  const [status, setStatus] = useState("SUBMIT");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("SENDING...");
    const { name, company, email, message } = e.target.elements;
    let details = {
      name: name.value,
      company: company.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("SUBMIT");
    let result = await response.json();
    alert(result.status);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input placeholder='Name' type="text" id="name" required />
      </div>
      <div>
        <label htmlFor="company">Company:</label>
        <input type="text" id="company" />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" required />
      </div>
      <button type="submit">{status}</button>
    </form>
  );
};

export default ContactForm;