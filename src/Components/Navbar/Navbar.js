import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { NavLink } from 'react-router-dom';
import logo from "../../Assets/Images/logo.png";
import { MenuOutlined } from '@ant-design/icons';


export default function Navbar() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {

    // const ScrollToMobile = () => {
    //   mobile_ref.current.scrollIntoView({ behavior: "smooth" });
    // };
    
    
    let handler = (event) => {
      if (!navNode.current.contains(event.target) && !toggler.current.contains(event.target)) {
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

  console.log(open);



  // const toLoginIn = ()=>{
  //   authDispatch({type:LOGINSTATUS,payload:true});
  // }


  // const togglerOff = ()=>{
  //   authDispatch({type:LOGINSTATUS,payload:false});
  // }

  return (
    <div>

      <div className={styles.Nav}>

        <div className={styles.Navbar}>

          <NavLink to="/">
            <div className={styles.NavbarLogo}>
              <img src={logo} alt="Ayush_logo" />
            </div>
          </NavLink>

          <div className={styles.NavbarToggler}>
            <MenuOutlined style={{color:"white"}} ref={toggler} onClick={() => setOpen(prevState => !prevState)} />

            <div ref={navNode} className={open ? styles.NavbarTogglerMenu : styles.none}>
              <div className={styles.TogglerLinks}>


                <NavLink style={{ textDecoration: "none" }} activeClassName="activeClassName" className={styles.TogglerLink} to="/"><li >About</li></NavLink>

                <NavLink style={{ textDecoration: "none" }} activeClassName="activeClassName" className={styles.TogglerLink} to="/"><li >Projects</li></NavLink>

              </div>

            </div>


          </div>

          <div className={styles.NavbarLink}>
            <span>About</span>
            <span>Projects</span>
            <span>Experiences</span>
            <span>Testimonials</span>

          </div>
          {/* 
          <div className={styles.NavbarIcons}>
            <div className={styles.NavbarIconsImg}>
              <img src={cart} alt="profile icon of repairo" />
            </div>

          </div> */}

        </div>
      </div>
    </div>
  );
}