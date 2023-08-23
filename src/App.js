import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';

import Home from './component/Home/Home'; // Import your components here

function App() {
  return (
    <BrowserRouter >
       
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

     </BrowserRouter>
  );
}

export default App;
