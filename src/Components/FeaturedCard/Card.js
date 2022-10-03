import React from 'react';
import styles from './Card.module.css';
import { ArrowUpOutlined } from '@ant-design/icons';
import Aos from "aos";
import "aos/dist/aos.css";

export default function Card(props) {


  React.useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  return (
    <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1500" data-aos-once="true" className={styles.Card}>

      <div className={styles.image}>
      <div className={styles.CardHover}>
          <div className={styles.CardHoverText}>
              <p> Saheli is for the women empowerment to save women lives from danger</p>
          </div>
      </div>
        <img src={props.image} alt={props.alt} />
      </div>

      <div className={styles.desc}>
        <div className={styles.text}>
          <h4>{props.name}</h4>
          <p>{props.position}</p>
        </div>

        <div className={styles.link}>
          <span> View Project</span>
          <ArrowUpOutlined className={styles.arrow} />
        </div>

      </div>

    

    </div>
  );
}

