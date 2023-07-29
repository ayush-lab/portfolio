import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
// import logo from "../../Assets/Images/logo.png";
import logo from '../../Assets/Images/logoo.webp'
import { MenuOutlined, CloseOutlined} from "@ant-design/icons";

export default function Navbar(props) {
  // const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    let handler = (event) => {
      if (
        !navNode.current.contains(event.target) &&
        !toggler.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  let navNode = React.useRef();
  let toggler = React.useRef();

  return (
    <>
      <div className={styles.Nav}>
        <div className={styles.Navbar}>
          <span  >
            <div  onClick={props.onClickLanding} className={styles.NavbarLogo}>
              <img src={logo} alt="Ayush_logo" />
            </div>
          </span>

          <div className={styles.NavbarToggler}>
            {!open ? 
              <MenuOutlined
                style={{ color: "white" }}
                ref={toggler}
                onClick={() => setOpen((prevState) => !prevState)}
              />
              : 
              <CloseOutlined
                style={{ color: "white" }}
                ref={toggler}
                onClick={() => setOpen((prevState) => !prevState)}
              />
            }
            <div
              ref={navNode}
              className={open ? styles.NavbarTogglerMenu : styles.none}
            >
              <div className={styles.TogglerLinks}>
                <ul>
                  <span
                    onClick={props.onClickProject}
                    className={styles.TogglerLink}
                  >
                    <li>Projects</li>
                  </span>
                  <span
                    onClick={props.onClickExploration}
                    className={styles.TogglerLink}
                  >
                    <li>Exploration</li>
                  </span>
                  <span
                    onClick={props.onClickSkills}
                    className={styles.TogglerLink}
                  >
                    <li>Skills</li>
                  </span>
                  <span
                    onClick={props.onClickExperience}
                    className={styles.TogglerLink}
                  >
                    <li>Experiences</li>
                  </span>
                  <span
                    onClick={props.onClickProfile}
                    className={styles.TogglerLink}
                  >
                    <li>Profiles</li>
                  </span>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.NavbarLink}>
            <span onClick={props.onClickProject}>Projects</span>
            <span onClick={props.onClickExploration}>Exploration</span>
            <span onClick={props.onClickSkills}>Skills</span>
            <span onClick={props.onClickExperience}>Experiences</span>
            {/* <span>Testimonials</span> */}
            <span onClick={props.onClickProfile}>Profiles</span>
          </div>
        </div>
      </div>
    </>
  );
}
