import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Home from './components/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './pages/contact';
import Devis from './pages/devis';
import Services from './pages/services';
import Service from './pages/service';
import Confirmation from './pages/confirmation';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="App">
    <BrowserRouter >
      <Routes>
      <Route index path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/devis' element={<Devis />} />
        <Route path='/services' element={<Services />} />
        <Route path='/service/:id' element={<Service />} />
        <Route path='/confirmation' element={<Confirmation />} />
      </Routes>
    </BrowserRouter>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

