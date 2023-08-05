import './App.css';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import EvenetHandling from './components/EvenetHandling';
import StateManagement from './components/StateManagement';
import ToDoList from './components/ToDoList';
import ChatBox from './components/ChatBox';
import ListProduct from './components/ListProduct';

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
            <Route element={ <StateManagement /> } path='state' />
            <Route element={ <ToDoList /> } path='todo' />
            <Route element={ <ChatBox /> } path='chat' />
            <Route element={ <ListProduct /> } path='list' />
  

          </Routes>
       </BrowserRouter>
     
    </div>
  );
}

export default App;
