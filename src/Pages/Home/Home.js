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
import BackToTop from "../../Components/BackToTop/backToTop";

function Home() {
  let Landing_ref = useRef(null);
  let Project_ref = useRef(null);
  let Exploration_ref = useRef(null);
  let Skills_ref = useRef(null);
  let Experience_ref = useRef(null);
  let Profile_ref = useRef(null);

  const ScrollToLanding = () => {
   Landing_ref.current.scrollIntoView({ behavior: "smooth" });
  
 };

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
        onClickLanding={ScrollToLanding}

      />
      <Landing Landing_ref={Landing_ref}/>
      <Project Project_ref={Project_ref} />
      <Featured  Exploration_ref={ Exploration_ref}/>
      <Skills Skills_ref={Skills_ref}/>
      <Experience Experience_ref={Experience_ref}/>
      <Testi />
      <Footer onClickLanding={ScrollToLanding} Profile_ref={Profile_ref}/>
      <BackToTop/>
    </>
  );
}

export default Home;
