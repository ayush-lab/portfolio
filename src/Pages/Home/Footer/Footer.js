import { React, useEffect } from 'react';
import styles from './Footer.module.css';
import Github from '../../../Assets/Images/github.svg';
import LinkedIn from '../../../Assets/Images/linkedin.svg';
import Instagram from '../../../Assets/Images/instagram.svg';


export default function Footer() {


   return (
      <>

         <div className={styles.footer}>

            <div className={styles.Links}>
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

            <div className={styles.name}>
               <p>Developed by Ayush</p>
            </div>


         </div>

      </>
   );
}

