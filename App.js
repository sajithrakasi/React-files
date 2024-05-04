import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Route,Routes/Home';
import About from './Components/Route,Routes/About';
import Service from './Components/Route,Routes/Service';
import Navbar from './Components/Route,Routes/Navbar'
import Products from './Components/Route,Routes/Products';
import Users from './Components/Route,Routes/Users';
import Profile from './Components/Route,Routes/Profile';
import NewProduct from './Components/Route,Routes/NewProduct';
import OfferProduct from './Components/Route,Routes/OfferProduct';
import Login from './Components/Route,Routes/Login';
import Signup from './Components/Route,Routes/Signup';
import RequiredAuth from './Components/Route,Routes/RequiredAuth';
import UserDetails from './Components/Route,Routes/UserDetails';
import AuthProvider from './Components/Route,Routes/Auth'
import Contact from './Components/Route,Routes/Contact';

function App() {
  return (
    <div className="App">
     <AuthProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/About' element={<About/>}/> 
        <Route path='/Service' element={<Service/>}/> 
        <Route path='/Users' element={<Users/>}/> 
       <Route path='/Products' element={<Products/>}>
         
        <Route path='NewProduct' element={<NewProduct/>}/>
        <Route path='OfferProduct' element={<OfferProduct/>}/>
      </Route>
      <Route path='/Users' element={<Users/>}>
         <Route path=':userId' element={<UserDetails/>}/>
      </Route>

      <Route path='/Login' element={<Login/>}/>
      <Route path='/Profile' element={<RequiredAuth><Profile/></RequiredAuth>}/> 

      <Route path='/Signup' element={<Signup/>}/>
      
      <Route path='/Contact' element={<Contact/>}></Route>
      </Routes>      
     </AuthProvider>

    </div>
  );
}

export default App;
