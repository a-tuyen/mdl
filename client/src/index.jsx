import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.scss';
import App from './App';
import Products from './routes/Products';
import About from './routes/About';
import Contact from './routes/Contact';
import Home from './routes/Home';
import Lead from './routes/Lead';
import SacrificialAnodes from './routes/SacrificialAnodes';
import Cnc from './routes/Cnc';
import Babbitt from './routes/Babbitt';
import LeadAnodes from './routes/LeadAnodes';
import Bricks from './routes/Bricks';
import Flashings from './routes/Flashings';
import PipeTube from './routes/PipeTube';
import SashWeights from './routes/SashWeights';
import SheetLead from './routes/SheetLead';
import SilFos from './routes/SilFos';
import StubsBends from './routes/StubsBends';
import SheetLeadOrder from './routes/SheetLeadOrder'
import Order from './routes/Order'
import OrderSubmission from './components/OrderSubmission';
import ContactSubmission from './components/ContactSubmission';
import ContactForm from './components/ContactForm';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<App />}>
          <Route index element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='products' element={<Products />} >
            <Route
              index
              element={
                <article>
                  <h1>Products</h1>
                  <section className='img-container'>
                    <div className='image-title'>
                      <a href='/products/lead'>
                        <img src='https://user-images.githubusercontent.com/77664153/195461222-1e376680-ed6e-4ff0-8a42-3e9832aaa5f4.png' alt='MDL logo' /></a>
                        <h2><a href='/products/lead'>LEAD</a></h2>
                    </div>
                    <div className='image-title'>
                      <a href='/products/sacrificialanodes'><img src='https://user-images.githubusercontent.com/77664153/180872931-86c62ec8-ea39-4534-bacb-e0a5740202e5.png' alt='Reliance logo' /></a>
                      <h2><a href='/products/sacrificialanodes'>SACRIFICIAL ANODES</a></h2>
                    </div>
                    <div className='image-title'>
                      <a href='/products/cnc'>
                        <img src='https://user-images.githubusercontent.com/77664153/180502025-d02877f3-628c-4f40-9fee-662ed406c23c.png' alt='Maxum CNC logo' />
                      </a>
                      <h2><a href='/products/cnc'>CNC SERVICES</a></h2>
                    </div>
                  </section>
                </article>
              }
            />
            <Route path='lead' element={<Lead />} />
            <Route path='sacrificialanodes' element={<SacrificialAnodes />} />
            <Route path='cnc' element={<Cnc />} />
            <Route path='leadanodes' element={<LeadAnodes />} />
            <Route path='babbitt' element={<Babbitt />} />
            <Route path='bricks' element={<Bricks />} />
            <Route path='flashings' element={<Flashings />} />
            <Route path='pipetube' element={<PipeTube />} />
            <Route path='sashweights' element={<SashWeights />} />
            <Route path='sheetlead' element={<SheetLead />} />
            <Route path='silfos' element={<SilFos />} />
            <Route path='stubsbends' element={<StubsBends />} />
          </Route>
          <Route path='order' element={<Order />} >
            <Route index element={
              <div className='order-page'>
                <h1>Place an order</h1>
                {/* <hr></hr> */}
                <ul className="order-type">
                  <li><h2><a href='/order/sheetlead'><li>- SHEET LEAD ORDER -</li></a></h2></li>
                  <li><a href='/order/other'><h2>- REQUEST A QUOTE -</h2></a></li>
                </ul>
              </div>
            } />
            <Route path='sheetlead' element={<SheetLeadOrder />} />
            <Route path='thankyou' element={<OrderSubmission />} />
          </Route>
          <Route path='contact' element={<Order />} >
            <Route index element={<ContactForm />} />
            <Route path='thankyou' element={<ContactSubmission />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

