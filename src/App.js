//import components
import Navbar from './component/Navbar/Navbar'
import Home from './component/Home'


//Router 
import { BrowserRouter ,Routes, Route } from'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' Component={Home}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;