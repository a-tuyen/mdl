import './App.scss';
import Nav from './components/Nav';
import Footer from './components/Footer';
import LeadAnodes from './routes/LeadAnodes';
import { Outlet } from 'react-router-dom';
import SideBar from './components/SideBar';


const App =() => {
  return (
      <div className="App">
        <Nav/>
        <Footer />
        <SideBar />
      </div>
  );
};

export default App;
