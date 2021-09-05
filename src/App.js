import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Particles from 'react-particles-js';
import About from './Components/About';
import Skills from './Components/Skills';
import Project from './Components/Project';
import { Contact } from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Particles
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#0000e6"
              }
            }
          }
        }}
      />
      <Navbar />
      <Header /><br />
      <About /><br />
      <Skills /><br />
      <Project /><br />
      <Contact/><br />
      <Footer/>
    </>
  );
}

export default App;
