import { useEffect } from "react";
import styles from "./Project.module.css";
import Bytepad from "../../../Assets/Images/Bytepad.png";
import Coursera from "../../../Assets/Images/Coursera.png";
import Repairo from "../../../Assets/Images/Repairo.png";
import Chalkmate from "../../../Assets/Images/chalkmates.svg";
import ProjectTem from "../../../Components/ProjectTemplate/ProjectTem";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Project({Project_ref}) {
  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  return (
    <>
      <div ref={Project_ref} className={styles.ProjectSection}>
        <div className={styles.Project}>
          <ProjectTem
            title="Bytepad"
            smallDesc="lead react developer"
            longDesc="Worked as a lead react developer to develop Bytepad used by 1000+
         college students to access 3000+ question papers.
         Implemented filtering and Searching using Redux,
         Accomplished 65% increase in user base, 55% fast loading with 0.004s Cumulative Layout Shift.
         Dedicated admin-panel, to manage entire docs collection (Lazy
         Loading) Tech used: React, Redux, Spring, AWS."
        
            skill1="react"
            skill2="redux"
            skill3="AWS"
            skill4="ANT DESIGN"
            link="https://bytepad.silive.in/"
            image={Bytepad}
          />
        </div>

        <div className={styles.Project}>
          <ProjectTem
            title="SHELP"
            smallDesc="An e-learning platform to enhance education and
            management delivery."
            longDesc="Implemented JWT and Google SSO O-Auth2 authentication,
            Sockets for real time communication, optimised using
            Redis. Tested express endpoints using Jest. User and teacher panels to upload, categorise, search, rate, chat, track
            progress, bookmark, course payment and more. It has 25+ forks and 65+ stars on gitHub."
            skill1="MERN"
            skill2="Redux"
            skill3="Redis"
            skill4="Sockets"
            skill5="Docker"
            link="https://github.com/ayush-lab/Coursera-Clone"
            image={Coursera}
          />
        </div>

        <div className={styles.Project}>
          <ProjectTem
            title="Chalkmates"
            smallDesc="A platform to build your network. Manage and build your brand. Streamline your teaching process online and invite your students, 
            create courses and build."
            longDesc="Took ownership for developing the marketing website from scratch using React.js(5K Monthly traffic),
            Integrated Three-way-handshake Razorpay Payment gateway.Implemented course monetisation 
            flow,integrated Django backend using GraphQL,managed state using Redux."
            skill1="GraphQL"
            skill2="Redux"
            skill3="React"
            skill4="JavaScript"
            skill5="Material UI"
            link="https://github.com/ayush-lab/Coursera-Clone"
            image={Chalkmate}
          />
        </div>

        <div className={styles.Project}>
          <ProjectTem
            title="Repairo"
            smallDesc=" Electronics repairing company, helping customers with cost effective and quality services "
            longDesc="Single-handedly revamped the entire frontend of website from scratch. Developed Reusable components 
            and used Context API for state management.Developed REST-APIS and integrated Twilio API for SMS automation"
            skill1="REACT.JS"
            skill2="HTML/CSS"
            skill3="REST API"
            image={Repairo}
            link="https://repairo-b2d2c.web.app/"
          />
        </div>
      </div>
    </>
  );
}
