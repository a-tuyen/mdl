import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import '../styles/ContactForm.scss';

const ContactForm = () => {

  // const navigate = useNavigate();
  // const [status, setStatus] = useState("SUBMIT");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setStatus("SENDING...");
  //   const { name, company, phone, email, message } = e.target.elements;
  //   let details = {
  //     name: name.value,
  //     company: company.value,
  //     phone: phone.value,
  //     email: email.value,
  //     message: message.value,
  //   };
  //   let response = await fetch("http://localhost:5000/contact", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json;charset=utf-8",
  //     },
  //     body: JSON.stringify(details),
  //   });
  //   setStatus("SUBMIT");
  //   let result = await response.json();
  //   navigate('/contact/thankyou');
  //   // alert(result.status);
  // };
  
  return (
    <form name="contact" method="POST" data-netlify="true" onSubmit="submit">
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name"/>
      </div>
      <div>
        <label htmlFor="company">Company:</label>
        <input type="text" id="company" />
      </div>
      <div>
        <label htmlFor="phone">Phone #:</label>
        <input type="tel" id="phone" required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email"/>
      </div>

      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" required />
      </div>
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;