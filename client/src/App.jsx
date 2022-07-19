import './App.scss';
import Nav from './components/Nav';
import Home from './routes/Home';
import { Outlet } from 'react-router-dom';


const App =() => {
  return (
      <div className="App">
        <Nav/>
        <Home />
      </div>
  );
};

export default App;
