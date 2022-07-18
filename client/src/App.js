import './App.scss';
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import { Link } from 'react-router-dom';

const App =() => {
  return (
    <div className="App">
      <Nav/>
      <Link to ='/products'>Products</Link>
      <HomePage/>
    </div>
  );
};

export default App;
