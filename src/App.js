import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';

import Home from './component/Home/Home'; 
import PageNotFound from './component/PageNotFound/PageNotFound'; 
import Navbar from './component/Navbar/Navbar';

function App() {
  return (
    <div className='app'>
      <Navbar/>
      <BrowserRouter >
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
