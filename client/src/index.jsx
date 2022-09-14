import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.scss';
import App from './App';
import Products from './routes/Products';
import About from './routes/About';
import Contact from './routes/Contact';
// import Nav from './components/Nav';
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
                  <h1>PRODUCTS</h1>
                  <section className='img-container'>
                    <div className='image-title'>
                      <a href='/products/lead'>
                        <img src='https://user-images.githubusercontent.com/77664153/179275176-1d25fcfe-6d5e-478d-a1b2-2b461e6da938.png' alt='MDL logo' />
                        <h2><a href='/products/lead'>LEAD</a></h2>
                      </a>
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
              <div>
                <h1>Place an order</h1>
                <div className="order-type">
                  <a href='/order/sheetlead'><h2>SHEET LEAD</h2></a>
                  <a href='/order/other'><h2>OTHER LEAD PRODUCTS</h2></a>
                </div>
              </div>
            } />
            <Route path='sheetlead' element={<SheetLeadOrder />} />
          </Route>
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

