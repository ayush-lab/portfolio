import { useEffect } from "react";
import styles from "./Project.module.css";
import Bytepad from "../../../Assets/Images/Bytepad.png";
import Coursera from "../../../Assets/Images/Coursera.png";
import Repairo from "../../../Assets/Images/Repairo.png";
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
         Accomplished 65% in user base with 80% user retention rate.
         Dedicated admin-panel, to manage entire docs collection (Lazy
         Loading)"
            skill1="react"
            skill2="redux"
            skill3="Spring"
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
            Redis. Tested express endpoints using Jest. User and teacher panels to upload,categorise,search,rate,chat,track
            progress, bookmark,course payment and more."
            skill1="MERN"
            skill2="Redis"
            skill3="Redux"
            skill4="Sockets"
            skill5="docker"
            link="https://github.com/ayush-lab/Coursera-Clone"
            image={Coursera}
          />
        </div>

        <div className={styles.Project}>
          <ProjectTem
            title="Repairo"
            smallDesc=" Electronics repairing company, helping customers with cost effective and quality services "
            longDesc="Single-handedly revamped the entire frontend of website from scratch. Developed Reusable components 
            and used Context API for state management.Developed REST-APIS and integrated Twilio API for SMS automation"
            skill1="MERN"
            skill2="CSS"
            skill3="REST API"
            image={Repairo}
            link="https://repairo-b2d2c.web.app/"
          />
        </div>
      </div>
    </>
  );
}
