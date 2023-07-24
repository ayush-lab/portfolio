import React from "react";
import styles from "./Landing.module.css";
// import Ayush from "../../../Assets/Images/hero.svg";
// // import Typer from '../../../Components/Typer';
// import Github from '../../../Assets/Images/github.svg';
// import LinkedIn from '../../../Assets/Images/linkedin.svg';
// import Instagram from '../../../Assets/Images/instagram.svg';
// import Label from '../../../Components/Label/Label';
import Aos from "aos";
import "aos/dist/aos.css";
import { ArrowUpOutlined } from "@ant-design/icons";
import { Button } from "antd";

function Landing({Landing_ref}) {
  React.useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  return (
    <div ref={Landing_ref} className={styles.hero}>
      <div className={styles.main}>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="1500"
          className={styles.mainLeft}
        >
          <p>
            This is <b>Ayush, a <u>frontend engineer</u> with 2+ yrs of exp</b>
          </p>
          <p>
            As a <b>developer</b>, my superpower happens behind the scenes to
            make a digital product look great, work fast and perform well with a
            seamless user experience.&nbsp;&nbsp;
            
          </p>
          <span className={styles.resumeBtn}>
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="https://drive.google.com/file/d/1s3U23yjFRJfDFSF0CKUbOE0w3kZatWPM/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
               
                <Button className={styles.Btn} style={{ background: "inherit", color: "white", font:"inherit" }}>

                  RESUME <ArrowUpOutlined className={styles.arrow} />
                </Button>
              </a>
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="mailto:ayush.verma8750@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
               <Button  className={styles.Btn} style={{ background: "#FFE5AD", color: "black", font:"inherit", marginLeft:"16px" }}>
                HIRE ME <ArrowUpOutlined className={styles.arrow} />
                </Button>

              </a>
              

            </span>
        </div>
      </div>

      {/* <div className="line_break"> </div> */}
    </div>
  );
}

export default Landing;
