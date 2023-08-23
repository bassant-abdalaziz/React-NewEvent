import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';

import Home from './component/Home/Home'; // Import your components here
import Navbar from './component/Navbar/Navbar';

function App() {
  return (
   <div className='app'>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/'  element={<Home/>} />
    </Routes>
    <Home/>
    </BrowserRouter>
   </div>
  );
}

export default App;
