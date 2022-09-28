import React, { useState } from "react";

import { useNavigate } from 'react-router-dom';

import Blank from "../components/Blank";

import '../styles/ContactForm.scss'


const SheetLeadOrder = () => {

  return (
    <div className="order">
      <h1> Place A Sheet Lead Order</h1>
      <p>Please fill out the form below and we will be in touch</p>
      <form name="Order-Sheet-Lead" method="post">
        <input type="hidden" name="form-name" value="Order-Sheet-Lead" />
        <section>
          <div>
            <label htmlFor="name">Full Name:</label>
            <input type="text" name="name" required />
          </div>
          <div>
            <label htmlFor="company">Company:</label>
            <input type="text" name="company" />
          </div>
        </section>
        <div>
          <label htmlFor="phone">Phone #:</label>
          <input type="phone" name="phone" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" required />
        </div>
        <fieldset>

        <h2>SELECT A SIZE</h2>

        <div className="dropdown">
          <label htmlFor="thickness">Thickness:</label>
          <select type="text" name="thickness">
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
            <input type="number" name="width-inches" />
            <label className="unit">inches</label>
          </div>
          <div>
            <label htmlFor="length">Length:</label>
            <input type="number" name="length-inches" />
            <label className="unit">inches</label>
          </div>
          <div>
          <label htmlFor="quantity">Quantity Needed:</label>
          <input type="number" name="quantity-rolls" />
          <label className="unit">rolls</label>
        </div>
        </div>
        <h3>- Or Customize Your Size -</h3>
        <div>
          <label htmlFor="custom">Custom Size:
            (thickness x length x width)</label>
            <input type="text" name="custom-size" />
               </div>

        <div className="quantity">
          <label htmlFor="quantity">Quantity Needed:</label>
          <input type="number" name="quantity-custom-rolls" />
          <label className="unit">rolls</label>
        </div>
        </fieldset>

        <div>
          <label htmlFor="date">Date Needed By</label>
          <input type="text" name="date-needed" required />
        </div>
        <div>
          <label htmlFor="notes">Additional Notes:</label>
          <textarea name="notes" required />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SheetLeadOrder;

{/* <input class="form-control" placeholder="Mobile Number" name="mobile" id="mobile" autocomplete="mobile tel" value="(778) 316-9350"></input> */}