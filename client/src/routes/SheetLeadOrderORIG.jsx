import React, { useState } from "react";

import { useNavigate } from 'react-router-dom';

import Blank from "../components/Blank";

import '../styles/ContactForm.scss'


const SheetLeadOrder = () => {

  const navigate = useNavigate();
  const [status, setStatus] = useState("SUBMIT");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("SENDING...");
    const { name, company, phone, email, thickness, width, long, quantity, custom, quantityCustom, date, notes } = e.target.elements;
    let details = {
      name: name.value,
      company: company.value,
      phone: phone.value,
      email: email.value,
      thickness: thickness.value,
      width: width.value,
      long: long.value,
      quantity: quantity.value,
      custom: custom.value,
      quantityCustom: quantityCustom.value,
      date: date.value,
      notes: notes.value,
    };
    let response = await fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("SUBMIT");
    let result = await response.json();
    navigate('/order/thankyou');
    // alert(result.status);


  };


  return (
    <div className="order">
      <h1> Place A Sheet Lead Order</h1>
      <p>Please fill out the form below and we will be in touch</p>
      <form onSubmit={handleSubmit}>
        <section>
          <div>
            <label htmlFor="name">Full Name:</label>
            <input type="text" id="name" required />
          </div>
          <div>
            <label htmlFor="company">Company:</label>
            <input type="text" id="company" />
          </div>
        </section>
        <div>
          <label htmlFor="phone">Phone #:</label>
          <input type="phone" id="phone" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
        </div>
        <fieldset>

        <h2>SELECT A SIZE</h2>

        <div className="dropdown">
          <label htmlFor="thickness">Thickness:</label>
          <select name="thickness" id="thickness">
            <option label=" "></option>
            <option value='1#'>1#/ft² - 1/64" - 0.4mm</option>
            <option value='2#'>2#/ft² - 1/32" - 0.8mm</option>
            <option value='3#'>3#/ft² - 3/64" - 1.2mm</option>
            <option value='4#'>4#/ft² - 1/16" - 1.6mm</option>
            <option value='5#'>5#/ft² - 5/64" - 2.0mm</option>
            <option value='6#'>6#/ft² - 3/32" - 2.4mm</option>
          </select>
        </div>
        <div className="dimensions">
          <div>
            <label htmlFor="width">Width:</label>
            <input type="number" id="width" />
            <label className="unit">inches</label>
          </div>
          <div>
            <label htmlFor="long">Length:</label>
            <input type="number" id="long" />
            <label className="unit">inches</label>
          </div>
          <div>
          <label htmlFor="quantity">Quantity Needed:</label>
          <input type="number" id="quantity" />
          <label className="unit">rolls</label>
        </div>
        </div>
        <h3>- Or Customize Your Size -</h3>
        <div>
          <label htmlFor="custom">Custom Size:
            (thickness x length x width)</label>
          <input id="custom" />
          {/* <label>(thickness x length x width)</label> */}
        </div>

        {/* <p>--------</p> */}
        {/* <hr></hr> */}
        <div className="quantity">
          <label htmlFor="quantity">Quantity Needed:</label>
          <input type="number" id="quantityCustom" />
          <label className="unit">rolls</label>
        </div>
        </fieldset>
{/* <hr></hr> */}
        <div>
          <label htmlFor="date">Date Needed By</label>
          <input type="text" id="date" required />
        </div>
        <div>
          <label htmlFor="notes">Additional Notes:</label>
          <textarea id="notes" required />
        </div>
        <div>
          <button type="submit">{status}</button>
        </div>
      </form>
    </div>
  );
};

export default SheetLeadOrder;

{/* <input class="form-control" placeholder="Mobile Number" name="mobile" id="mobile" autocomplete="mobile tel" value="(778) 316-9350"></input> */}