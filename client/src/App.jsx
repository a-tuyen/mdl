import './App.scss';
import NavBar from './components/NavBar';
import Footer from './components/Footer2';
import { Outlet } from 'react-router-dom';
import Favicon from "react-favicon";
import Navigation from './components/Navigation';



const App = () => {
  return (
    <div className="App">
      <Favicon url="https://user-images.githubusercontent.com/77664153/179275176-1d25fcfe-6d5e-478d-a1b2-2b461e6da938.png"></Favicon>
      <Navigation />
      <div className='page-contents'>
      <Outlet />
      </div>
      <Footer />

    </div>
  );
};

export default App;
