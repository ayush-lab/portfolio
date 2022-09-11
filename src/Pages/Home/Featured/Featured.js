import {React} from 'react';
import Card from '../../../Components/FeaturedCard/Card';
import styles from './Featured.module.css';
import Card1 from '../../../Assets/Images/dev.gif';

export default function Featured() {
    
  return (
     <div className={styles.Featured}>

         <div className={styles.lineBreak}></div>

         <h3>Featured Projects</h3>

         <div className={styles.projects}>
               <Card name={"Saheli"} image={Card1} alt="pro" position="Lead react developer" />
               <Card name={"Saheli"} image={Card1} alt="pro" position="Lead react developer" />
               <Card name={"Saheli"} image={Card1} alt="pro" position="Lead react developer" />
               <Card name={"Saheli"} image={Card1} alt="pro" position="Lead react developer" />

         </div>

     </div>
  );
}

