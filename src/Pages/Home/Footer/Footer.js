import React, { useEffect } from "react";
import styles from "./Footer.module.css";
import Github from "../../../Assets/Images/github.svg";
import LinkedIn from "../../../Assets/Images/linkedin.svg";
import Instagram from "../../../Assets/Images/instagram.svg";
import { Button } from "antd";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Footer() {

   React.useEffect(() => {
      Aos.init({ duration: 600 });
    }, []);
  
  
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footerSection}>
          <h4 className={styles.heading} data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1500"  >Visit my profiles! </h4>

          <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1500"  className={styles.Links}>
            <div>
              <img src={Github} alt="Github" />
            </div>

            <div>
              <img src={LinkedIn} alt="Linkedin" />
            </div>

            <div>
              <img src={Instagram} alt="insta" />
            </div>

            <div>
              <img src={Github} alt="Github" />
            </div>

            <div>
              <img src={LinkedIn} alt="Linkedin" />
            </div>

            <div>
              <img src={LinkedIn} alt="Linkedin" />
            </div>
          </div>

          <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1500"  className={styles.mailBtn}>
            <Button primary >
              <a href="mailto:ayush1911052@akgec.ac.in">
                Mail me at: <b>ayush1911052@akgec.ac.in</b>
              </a>
            </Button>
          </div>
        </div>
        <div className={styles.name}>
          <span>Designed by Srishti and Developed by Ayush❤️❤️</span>
        </div>
      </div>
    </>
  );
}
