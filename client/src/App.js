import './App.scss';
import Nav from './components/Nav';
import HomePage from './pages/HomePage';

const App =() => {
  return (
    <div className="App">
      <Nav/>
      <HomePage/>
    </div>
  );
};

export default App;
