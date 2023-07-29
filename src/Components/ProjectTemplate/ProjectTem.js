import React from "react";
import styles from "./ProjectTem.module.css";

import Label from "../Label/Label";
import { ArrowUpOutlined } from "@ant-design/icons";
import Aos from "aos";
import "aos/dist/aos.css";

export default function ProjectTem(props) {
  React.useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
      data-aos-duration="1500"
      data-aos-once="true"
      className={styles.main}
    >
      <div className={styles.Left}>
        <h4 className={styles.Heading}>{props.title}</h4>

        <span className={styles.subHeading}>{props.smallDesc}</span>
        <p className={styles.Desc}>{props.longDesc}</p>
        <div className={styles.tags}>
          <Label title={props.skill1} />
          <Label title={props.skill2} />
          <Label title={props.skill3} />
          {props.skill4 ? <Label title={props.skill4}/> : null}
          {props.skill5 ? <Label title={props.skill5}/> : null}

        </div>

        <div className={styles.link}>
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <span style={{color:"white"}}> View Project</span>
          </a>
          <ArrowUpOutlined className={styles.arrow} />
        </div>
      </div>

      <div className={styles.Right}>
        <img src={props.image} alt={props.title}/>
      </div>
    </div>
  );
}
