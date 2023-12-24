// App.js

import React from 'react';
import Home from './components/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './pages/contact';
import Devis from './pages/devis';
import Services from './pages/services';
import Service from './pages/service';
import Confirmation from './pages/confirmation';

const App = () => {
  return (
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
};

export default App;
