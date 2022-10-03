import { useRef } from "react";
import NavBar from "../../Components/Navbar/Navbar";
import Landing from "./Landing/Landing";
import Testi from "./Testimonials/Testimonials";
import Skills from "./Skills/skills";
import About from "./AboutMe/About";
import Project from "./Projects/Project";
import Featured from "./Featured/Featured";
import Experience from "./Experience/Experience";
import Footer from "./Footer/Footer";

function Home() {
  let Project_ref = useRef(null);
  let Exploration_ref = useRef(null);
  let Skills_ref = useRef(null);
  let Experience_ref = useRef(null);
  let Profile_ref = useRef(null);

  const ScrollToProject = () => {
    Project_ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const ScrollToExploration = () => {
    Exploration_ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const ScrollToSkills = () => {
   Skills_ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const ScrollToExperience = () => {
   Experience_ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const ScrollToProfile = () => {
   Profile_ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <NavBar
        onClickProject={ScrollToProject}
        onClickExploration={ScrollToExploration}
        onClickSkills={ScrollToSkills}
        onClickExperience={ScrollToExperience}
        onClickProfile={ScrollToProfile}
      />
      <Landing />
      <Project Project_ref={Project_ref} />
      <Featured  Exploration_ref={ Exploration_ref}/>
      <Skills Skills_ref={Skills_ref}/>
      <Experience Experience_ref={Experience_ref}/>
      <Testi />
      <Footer Profile_ref={Profile_ref}/>
    </>
  );
}

export default Home;
