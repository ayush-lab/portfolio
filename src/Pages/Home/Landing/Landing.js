import React from "react";
import styles from "./Landing.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { ArrowUpOutlined } from "@ant-design/icons";
import Ayush from '../../../Assets/Images/ayushBg.svg';
import Github from '../../../Assets/Images/github.svg';
import HackerRank from '../../../Assets/Images/hackerRank.svg';
import LinkedIn from '../../../Assets/Images/linkedin.svg';
import Leetcode from '../../../Assets/Images/leetcode.svg';
import Codeforces from '../../../Assets/Images/codeforces.svg';
import Twitter from '../../../Assets/Images/twitter.svg';
import Gfg from '../../../Assets/Images/gfg.svg';


import { Button } from "antd";

function Landing({Landing_ref}) {
  React.useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  return (
    <div ref={Landing_ref} className={styles.hero}>
      <div className={styles.main}>
        <div
          // data-aos="fade-up"
          // data-aos-anchor-placement="top-center"
          // data-aos-duration="1500"
          className={styles.mainLeft}
        >
          <p>
            This is <b>Ayush, a Frontend engineer with 2+ yrs of exp</b>
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
        <div className={styles.mainRight}> 
          <div className={styles.profileSection}>
              <div className={styles.leftProfile}>
                  <div className={styles.profile}>
                      <a
                        href="https://github.com/ayush-lab"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                          <img src={Github} alt="github"/>
                      </a>
                    </div>
                    <div className={styles.profile}>
                      <a
                        href="https://www.linkedin.com/in/ayushimpulse/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                          <img src={LinkedIn} alt="linkedin"/>
                      </a>
                    </div>
                      
                    <div className={styles.profile}>
                        <a
                          href="https://twitter.com/AyushVrr"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src={Twitter} alt="twitter"/>
                      </a>
                    </div>
              </div>
              <div className={styles.authorPic}>
                  <img src={Ayush} alt="ayushBg"/>
              </div>
              <div className={styles.rightProfile}>
              
                  <div className={styles.profile}>
                    <a
                      href="https://leetcode.com/ayush-lab/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={Leetcode} alt="leetcode"/>
                    </a>
                  </div>
                  {/* <div className={styles.profile}>
                    <img src={Codeforces} alt="codeforces"/>
                  </div> */}
                  <div className={styles.profile}>
                    <a
                      href="https://auth.geeksforgeeks.org/user/ayushverma8750/practice/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                        <img src={Gfg} alt="gfg"/>
                    </a>
                  </div>
                  <div className={styles.profile}>
                    <a
                        href="https://www.hackerrank.com/ayush_verma8750?hr_r=1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={HackerRank} alt="hackerRank"/>
                    </a>
                  </div>
            
              </div>
            </div>
        </div>
      </div>

      {/* <div className="line_break"> </div> */}
    </div>
  );
}

export default Landing;
