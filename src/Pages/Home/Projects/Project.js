import { React, useEffect } from "react";
import styles from "./Project.module.css";
import Bytepad from "../../../Assets/Images/Bytepad.png";
import Coursera from "../../../Assets/Images/Coursera.png";
import Repairo from "../../../Assets/Images/Repairo.png";
import ProjectTem from "../../../Components/ProjectTemplate/ProjectTem";

export default function Project() {
  return (
    <div className={styles.ProjectSection}>
      <div className={styles.Project}>
        <ProjectTem
          title="Bytepad"
          smallDesc="lead react developer"
          longDesc="Worked as a lead react developer to develop Bytepad used by 1000+
         college students to access 3000+ question papers.
         Implemented filtering and Searching using Redux
         Accomplished 65% in user base with 80% userretention rate.
         Dedicated admin-panel, to manage entire docs collection (Lazy
         Loading)"
          skill1="react"
          skill2="react"
          skill3="react"
          image={Bytepad}
        />
      </div>

      <div className={styles.Project}>
        <ProjectTem
          title="SHELP"
          smallDesc="MERN project"
          longDesc="Worked as a lead react developer to develop Bytepad used by 1000+
                  college students to access 3000+ question papers.
                  Implemented filtering and Searching using Redux
                  Accomplished 65% in user base with 80% userretention rate.
                  Dedicated admin-panel, to manage entire docs collection (Lazy
                  Loading)"
                           skill1="react"
          skill2="react"
          skill3="react"
          image={Coursera}
        />
      </div>

      <div className={styles.Project}>
        <ProjectTem
          title="Repairo"
          smallDesc="lead react developer"
          longDesc="Worked as a lead react developer to develop Bytepad used by 1000+
               college students to access 3000+ question papers.
               Implemented filtering and Searching using Redux
               Accomplished 65% in user base with 80% userretention rate.
               Dedicated admin-panel, to manage entire docs collection (Lazy
               Loading)"
          skill1="react"
          skill2="react"
          skill3="react"
          image={Repairo}
        />
      </div>
    </div>
  );
}
