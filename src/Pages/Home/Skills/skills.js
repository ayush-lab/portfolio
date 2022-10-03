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
import Sass from "../../../Assets/Images/sass.png";

import Aos from "aos";
import "aos/dist/aos.css";
import styles from "./skills.module.css";

export default function Skills() {
  React.useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  return (
    <>
      <div className={styles.main}>
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
            <img src={Javascript} alt="frontend" />
            <img src={ReactLogo} alt="frontend" />
            <img src={Redux} alt="frontend" />
            <img src={Html} alt="frontend" />
            <img src={Css} alt="frontend" />
            <img src={Figma} alt="frontend" />
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
            <img src={Node} alt="backend techs" />
            <img src={Express} alt="backend techs" />
            <img src={Postman} alt="backend techs" />
            <img src={Docker} alt="backend techs" />
            <img src={Jest} alt="Other skills techs" />
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
            <img src={Mongo} alt="backend techs" />
            <img src={Redis} alt="frontend" />
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="1500"
          data-aos-once="true"
          className={styles.logoSection}
        >
          <h4 className={styles.stacks}>Languages</h4>
          <div className={styles.logoImages}>
            <img src={Cpp} alt="Other skills techs" />
            <img src={Javascript} alt="language" />
            <img src={SQL} alt="language" />
          </div>
        </div>
      </div>

      <div class="line">
        <div class="line_break"> </div>
      </div>
    </>
  );
}
