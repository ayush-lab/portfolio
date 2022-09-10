import { React } from 'react';
import ReactLogo from '../../../Assets/Images/react.svg';
import Javascript from '../../../Assets/Images/javascript.svg';
import Redux from '../../../Assets/Images/redux.svg';
import Html from '../../../Assets/Images/html.svg';
import Css from '../../../Assets/Images/css.svg';
import Figma from '../../../Assets/Images/figma.svg';

import styles from './skills.module.css';

export default function Skills() {

    return (
        <div className={styles.main}>
            <div className={styles.heading}> My Skills</div>
            <p className={styles.headingText}>I like to take responsibility to craft good user experiences using my skills</p>

            <div className={styles.logoSection}>
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

            <div className={styles.logoSection}>
                <h4 className={styles.stacks}>Backend Development</h4>
                <div className={styles.logoImages}>
                    <img src={ReactLogo} alt="frontend" />
                    <img src={ReactLogo} alt="frontend" />
                    <img src={ReactLogo} alt="frontend" />
                    <img src={ReactLogo} alt="frontend" />

                </div>
            </div>

            <div className={styles.logoSection}>
                <h4 className={styles.stacks}>Databases</h4>
                <div className={styles.logoImages}>
                    <img src={ReactLogo} alt="frontend" />
                    <img src={ReactLogo} alt="frontend" />
                    <img src={ReactLogo} alt="frontend" />
                    <img src={ReactLogo} alt="frontend" />

                </div>
            </div>

            <div className={styles.logoSection}>
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
