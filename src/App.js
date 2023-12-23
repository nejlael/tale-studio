// App.js

import React from 'react';
import Home from './components/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './pages/contact';
import Devis from './pages/devis';
import Services from './pages/services';

const App = () => {
  return (
    <div className="App">

      <BrowserRouter >
        <Routes>
        <Route index path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/devis' element={<Devis />} />
          <Route path='/services' element={<Services />} />
        </Routes>
      </BrowserRouter>
      {/* Le reste de votre application */}
    </div>
  );
};

export default App;
