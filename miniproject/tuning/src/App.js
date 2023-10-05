import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css';
import Homepage from './pages/Homepage';
import Errorpage from './pages/errorpage';
import {Routes,Route,Link} from 'react-router-dom'
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {


  return (
    <>   
    
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/about' element={<About />} />
      <Route path='*' element={<Errorpage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />

  
      

    </Routes>
    
   
    
    
    
     
     
    {/* <Errorpage /> */}
    </>

  );
};

export default App;
