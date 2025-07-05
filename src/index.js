import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import './index.css';
import Navbar from './landing_page/Navbar';
import Fotter from './landing_page/Fotter';
import Homepage from'./landing_page/Home/Homepage';
import Signup from './landing_page/Signup/Signup';
import Aboutpage  from './landing_page/About/Aboutpage';
import Productpage from './landing_page/Products/Product_page';

import Pricingpage from './landing_page/Pricing/Pricingpage';
import Supportpage from './landing_page/support/Supportpage';
import Notfound from './landing_page/Notfound';
import Login from './landing_page/login/login'; // 👈 adjust this path as needed


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <Navbar/>
  <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/About" element={<Aboutpage/>}/>
    <Route path="/Products" element={<Productpage/>}/>
    <Route path="/Pricing" element={<Pricingpage/>}/>
    <Route path="/support" element={<Supportpage/>}/>

    <Route path='*' element={<Notfound/>}/>

  </Routes>
   <Fotter/>
  </BrowserRouter>
);


