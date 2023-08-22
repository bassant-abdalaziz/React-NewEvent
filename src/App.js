//import components
import Navbar from './component/Navbar/Navbar'
import Header from './component/Header/Header';
import About from './component/About/About';
import ItemOverview from './component/Overview/ItemOverview';
import WatchVideo from './component/WatchVideo/WatchVideo';
import Speaker from './component/Speakers/Speaker';
import Programs from './component/OurPrograms/Programs';
import Register from './component/Register/Register';
import Accordion from './component/Accordion/Accordion';
import Venue from './component/Venue/Venue';
import Sponsors from './component/OurSponsors/Sponsors';
import Contact from  './component/Contact/Contact';
import Footer from './component/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About/>
      <ItemOverview/>
      <WatchVideo/>
      <Speaker />
      <Programs/>
      <Register/>
      <Accordion/>
      <Venue/>
      <Sponsors/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;