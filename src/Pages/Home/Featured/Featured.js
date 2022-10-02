import React from 'react';
import Card from '../../../Components/FeaturedCard/Card';
import styles from './Featured.module.css';
import Card1 from '../../../Assets/Images/dev.gif';
import Saheli from '../../../Assets/Images/saheli.png'
import Birdminton from '../../../Assets/Images/birdminton.png'

import Trello from '../../../Assets/Images/trello.png'
import Gollaa from '../../../Assets/Images/golaa.png'
import Aos from "aos";
import "aos/dist/aos.css";

export default function Featured() {
    
  
  React.useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);


  return (
     <div className={styles.Featured}>

         {/* <div className={styles.lineBreak}></div> */}

         <h3 data-aos="slide-right" data-aos-anchor-placement="top-center" data-aos-duration="1500">Explorations</h3>

         <div className={styles.projects}>
               <Card name={"Saheli"} image={Saheli} alt="pro" position="Lead react developer" />
               <Card name={"Saheli"} image={Birdminton} alt="pro" position="Lead react developer" />
               <Card name={"Saheli"} image={Trello} alt="pro" position="Lead react developer" />
               <Card name={"Saheli"} image={Gollaa} alt="pro" position="Lead react developer" />
               {/* <Card name={"Saheli"} image={Repairo} alt="pro" position="Lead react developer" /> */}
               {/* <Card name={"Saheli"} image={Answer} alt="pro" position="Lead react developer" /> */}


         </div>

     </div>
  );
}

