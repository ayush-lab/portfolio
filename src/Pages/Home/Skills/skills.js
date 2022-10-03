import React from "react";
import Javascript from "../../../Assets/Images/js.png";
import ReactLogo from "../../../Assets/Images/reactJs.png";
import Redux from "../../../Assets/Images/redux.png";
import Html from "../../../Assets/Images/html.png";
import Css from "../../../Assets/Images/css.png";
import Figma from "../../../Assets/Images/figma.png";

import Node from "../../../Assets/Images/node.png";
import Express from "../../../Assets/Images/express.png";
import Redis from "../../../Assets/Images/redis.png";
import SQL from "../../../Assets/Images/sql.png";

import Jest from "../../../Assets/Images/jest.png";
import Docker from "../../../Assets/Images/docker.png";
import Postman from "../../../Assets/Images/postman.png";
import Mongo from "../../../Assets/Images/mongo.png";

import Cpp from "../../../Assets/Images/cpp.png";
// import Sass from "../../../Assets/Images/sass.png";
import Git from "../../../Assets/Images/git.png";

import Aos from "aos";
import "aos/dist/aos.css";
import styles from "./skills.module.css";

export default function Skills({Skills_ref}) {
  React.useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  return (
    <>
      <div ref={Skills_ref} className={styles.main}>
        {/* <div className={styles.line_break}></div> */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="1500"
          data-aos-once="true"
          className={styles.heading}
        >
          {" "}
          My Skills
        </div>
        <p
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="1500"
          data-aos-once="true"
          className={styles.headingText}
        >
          I like to take responsibility to craft good user experiences using my
          skills
        </p>

        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="1500"
          data-aos-once="true"
          className={styles.logoSection}
        >
          <h4 className={styles.stacks}>Frontend Development</h4>
          <div className={styles.logoImages}>
            <img src={Javascript} alt="frontend" title="JavaScript"/>
            <img src={ReactLogo} alt="frontend" title="React"/>
            <img src={Redux} alt="frontend" title="Redux"/>
            <img src={Html} alt="frontend"  title="HTML"/>
            <img src={Css} alt="frontend" title="CSS"/>
            <img src={Figma} alt="frontend" title="Figma" />
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="1500"
          data-aos-once="true"
          className={styles.logoSection}
        >
          <h4 className={styles.stacks}>Backend Development</h4>
          <div className={styles.logoImages}>
            <img src={Node} alt="backend techs" title="Node" />
            <img src={Express} alt="backend techs" title="Express"/>
            <img src={Postman} alt="backend techs" title="Postman"/>
            <img src={Docker} alt="backend techs" title="Docker"/>
            <img src={Jest} alt="Other skills techs"title="Jest" />
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="1500"
          data-aos-once="true"
          className={styles.logoSection}
        >
          <h4 className={styles.stacks}>Databases</h4>
          <div className={styles.logoImages}>
            <img src={Mongo} alt="backend techs" title="Mongo Db"/>
            <img src={Redis} alt="Redis logo " title="Redis"/>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="1500"
          data-aos-once="true"
          className={styles.logoSection}
        >
          <h4 className={styles.stacks}>Other skills</h4>
          <div className={styles.logoImages}>
            <img src={Cpp} alt="Other skills techs" title="C++" />
            <img src={Javascript} alt="language" title="JavaScript"/>
            <img src={SQL} alt="language" title="SQL" />
            <img src={Git} alt="git logo" title="Git" />

          </div>
        </div>
      </div>

      <div class="line">
        <div
          data-aos="zoom-out"
          data-aos-anchor-placement="top-center"
          data-aos-duration="1500"
          data-aos-once="true"
          class="line_break"
        >
          {" "}
        </div>
      </div>
    </>
  );
}
