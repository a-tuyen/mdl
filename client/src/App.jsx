import './App.scss';
import Nav from './components/Nav';
import Footer from './components/Footer';
import LeadAnodes from './routes/LeadAnodes';
import { Outlet } from 'react-router-dom';
import Favicon from "react-favicon";



const App =() => {
  return (
      <div className="App">
         <Favicon url="https://user-images.githubusercontent.com/77664153/179275176-1d25fcfe-6d5e-478d-a1b2-2b461e6da938.png"></Favicon>
        <Nav/>
        <Outlet />
        <Footer />
        
      </div>
  );
};

export default App;
