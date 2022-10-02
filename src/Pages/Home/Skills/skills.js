import React from 'react';
import ReactLogo from '../../../Assets/Images/react.svg';
import Javascript from '../../../Assets/Images/javascript.svg';
import Redux from '../../../Assets/Images/redux.svg';
import Html from '../../../Assets/Images/html.svg';
import Css from '../../../Assets/Images/css.svg';
import Figma from '../../../Assets/Images/figma.svg';
import Aos from "aos";
import "aos/dist/aos.css";
import styles from './skills.module.css';

export default function Skills() {
   
      React.useEffect(() => {
        Aos.init({ duration: 600 });
      }, []);
      
    return (
        <div   className={styles.main}>
            <div className={styles.line_break}></div>
            <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-duration="1500"   className={styles.heading}> My Skills</div>
            <p  data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-duration="1500"   className={styles.headingText}>I like to take responsibility to craft good user experiences using my skills</p>

            <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1500"  className={styles.logoSection}>
                <h4 className={styles.stacks}>Frontend Development</h4>
                <div className={styles.logoImages}>
                    <img src={Javascript} alt="frontend" />
                    <img src={ReactLogo} alt="frontend" />
                    <img src={Redux} alt="frontend" />
                    <img src={Html} alt="frontend" />
                   

                </div>
            </div>

            <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1500"  className={styles.logoSection}>
                <h4 className={styles.stacks}>Backend Development</h4>
                <div className={styles.logoImages}>
                    <img src={ReactLogo} alt="frontend" />
                    <img src={ReactLogo} alt="frontend" />
                    <img src={ReactLogo} alt="frontend" />
                    <img src={ReactLogo} alt="frontend" />

                </div>
            </div>

            <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1500"  className={styles.logoSection}>
                <h4 className={styles.stacks}>Databases</h4>
                <div className={styles.logoImages}>
                    <img src={ReactLogo} alt="frontend" />
                    <img src={ReactLogo} alt="frontend" />
                    <img src={ReactLogo} alt="frontend" />
                    <img src={ReactLogo} alt="frontend" />

                </div>
            </div>

            <div  data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1500"  className={styles.logoSection}>
                <h4 className={styles.stacks}>Other Skills</h4>
                <div className={styles.logoImages}>
                    <img src={ReactLogo} alt="frontend" />
                    <img src={ReactLogo} alt="frontend" />
                    <img src={ReactLogo} alt="frontend" />
                    <img src={ReactLogo} alt="frontend" />

                </div>
            </div>
        </div>
    );
}
