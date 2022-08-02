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




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<App />}>
          <Route index element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='products' element={<Products />} >
            {/* <Route index element={<Products />} /> */}
            <Route path='lead' element={<Lead />} />
            <Route path='sacrificialanodes' element={<SacrificialAnodes />} />
            <Route path='cnc' element={<Cnc />} />
            <Route path='leadanodes' element={<LeadAnodes />} />
            <Route path='babbitt' element={<Babbitt/>} />
            <Route path='bricks' element={<Bricks />} />
            <Route path='flashings' element={<Flashings />} />
            <Route path='pipetube' element={<PipeTube />} />
            <Route path='sashweights' element={<SashWeights />} />
            <Route path='sheetlead' element={<SheetLead />} />
            <Route path='silfos' element={<SilFos />} />
            <Route path='stubsbends' element={<StubsBends />} />
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

