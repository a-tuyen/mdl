import './App.scss';
import Nav from './components/Nav';
import Footer from './components/Footer';
import LeadAnodes from './routes/LeadAnodes';
import { Outlet } from 'react-router-dom';



const App =() => {
  return (
      <div className="App">
        <Nav/>
        <Footer />
      </div>
  );
};

export default App;
