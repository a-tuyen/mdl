import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import './index.scss';
import App from './App';
import Products from './routes/Products';
import About from './routes/About';
import Contact from './routes/Contact';
// import Nav from './components/Nav';
import Home from './routes/Home';
import Lead from './routes/Lead';
import Anodes from './routes/Anodes';
import Cnc from './routes/Cnc';
import Blank from './components/Blank';
import Babbitt from './routes/Babbitt';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<App />}>
          <Route index element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='products' element={<Products />} >
            <Route index element={<Products />} />
            <Route path='lead' element={<Lead />} >
              <Route path='Babbitt' element={<Babbitt/>} />
            </Route>
            <Route path='anodes' element={<Anodes />} />
            <Route path='cnc' element={<Cnc />} />
          </Route>
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

