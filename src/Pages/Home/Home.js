import {React} from 'react';
import NavBar from '../../Components/Navbar/Navbar';
import Landing from './Landing/Landing';
import Testi from './Testimonials/Testimonials';
import Skills from './Skills/skills';
import About from './AboutMe/About';
import Project from './Projects/Project';
import Featured from './Featured/Featured';
import Experience from './Experience/Experience';

function Home() {
    
  return (
     <>
        <NavBar/>
        <Landing/>
        <Project/>
        <Featured/>
        <Skills/>
        <Experience/>
        <Testi/>
        <About/>

     </>
  );
}

export default Home;