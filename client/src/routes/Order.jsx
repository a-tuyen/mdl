import React, { useState } from "react";

import '../styles/ContactForm.scss'


const Order = () => {

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
        <div className="order">
            <h1> Place An Order</h1>
            <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required />
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
        <label htmlFor="thickness">Thickness:</label>
        <input type="number" id="thickness" required />
      </div>
      <div>
        <label htmlFor="Width">Width:</label>
        <input type="number" id="width" required />
      </div>
      <div>
        <label htmlFor="thickness">Length:</label>
        <input type="number" id="length" required />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" required />
      </div>
      <button type="submit">{status}</button>
    </form>
        </div>
    );
};

export default Order;

