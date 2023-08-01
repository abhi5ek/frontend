import './App.css';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import EvenetHandling from './components/EvenetHandling';

function App() {
  return (
    <div>
       <BrowserRouter>

       {/* <Link to="/home">Home</Link> 
       <Link to="/signup">Signup</Link> 
       <Link to="/login">Login</Link>   */}

          <Navbar/>

          <Routes>
            <Route element={ <Home /> } path='/' />
            <Route element={ <Home /> } path='Home' />
            <Route element={ <Login /> } path='Login' />
            <Route element={ <Signup /> } path='Signup' />
            <Route element={ <EvenetHandling /> } path='event' />
          </Routes>
       </BrowserRouter>
     
    </div>
  );
}

export default App;
