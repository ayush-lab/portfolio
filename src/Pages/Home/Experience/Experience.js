import React from 'react';
import Card from '../../../Components/FeaturedCard/Card';
import styles from './Experience.module.css';
import Card1 from '../../../Assets/Images/dev.gif';
import Aos from "aos";
import "aos/dist/aos.css";

export default function Experience() {
    
  
  React.useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  return (
     <div className={styles.Featured}>


         <h3 data-aos="fade-down" data-aos-anchor-placement="top-center" data-aos-duration="1500" >Experiences</h3>

         <div className={styles.projects}>
               <Card name={"Saheli"} image={Card1} alt="pro" position="Lead react developer" />
               <Card name={"Saheli"} image={Card1} alt="pro" position="Lead react developer" />
               <Card name={"Saheli"} image={Card1} alt="pro" position="Lead react developer" />
               <Card name={"Saheli"} image={Card1} alt="pro" position="Lead react developer" />

         </div>

     </div>
  );
}

