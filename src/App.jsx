import './App.css';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <div>
      <h1 className='myclass'>My React App</h1>
      <input type="text" />
      <h2 style={{color:'green',fontSize:30}}>Using Inline CSS</h2>
      <Home />
      <Signup />
      <Login />
    </div>
  );
}

export default App;
