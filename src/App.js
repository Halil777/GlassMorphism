import { useContext } from 'react';
import './App.css';
import Contacts from './Components/Contacts/Contacts';
import Expeience from './Components/Experience/Expeience';
import Footer from './Components/Footer/Footer';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';
import Services from './Components/Services/Services';
import Testimonials from './Components/Testimonials/Testimonials';
import Works from './Components/Works/Works';
import {themeContext} from './Context'
import CssHover from './cssHover/CssHover';

function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" style={{background: darkMode? 'black' :'', color: darkMode? 'white' : ''}}>
     <Navbar />
     <Intro />
     <Services />
     <Expeience />
     <Works />
     <Portfolio />
     <Testimonials />
     <Contacts />
     <Footer />
    </div>
  );
}

export default App;
