//import components
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import About from '../About/About';
import ItemOverview from '../Overview/ItemOverview';
import WatchVideo from '../WatchVideo/WatchVideo';
import Speaker from '../Speakers/Speaker';
import Programs from '../OurPrograms/Programs';
import Register from '../Register/Register';
import Accordion from '../Accordion/Accordion';
import Venue from '../Venue/Venue';
import Sponsors from '../OurSponsors/Sponsors';
import Contact from  '../Contact/Contact';
import Footer from '../Footer/Footer';

const  Home = ()=> {
  return (
    <div >
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

export default Home;