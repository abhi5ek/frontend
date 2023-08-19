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
import Amazon from './components/Amazon';
import Blog from './components/Blog';
import ManageUser from './components/ManageUser';
import ManageProduct from './components/ManageProduct';
import AddProduct from './components/AddProduct';

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
            <Route element={ <Amazon /> } path='amazon' />
            <Route element={ <Blog /> } path='blog' />
            <Route element={ <ManageUser /> } path='manageuser' />
            <Route element={ <ManageProduct /> } path='manageproduct' />
            <Route element={ <AddProduct /> } path='addproduct' />
  

          </Routes>
       </BrowserRouter>
     
    </div>
  );
}

export default App;
