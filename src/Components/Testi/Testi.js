import React  from 'react';
import styles from './Testi.module.css';
import { Tag } from 'antd';
import Aos from "aos";
import "aos/dist/aos.css";
  

export default function TestiProfile(props) {

    React.useEffect(() => {
        Aos.init({ duration: 600 });
      }, []);
    
    return (
        <>
            <div data-aos="fade-up" 
                 data-aos-anchor-placement="top-center" 
                 data-aos-duration="1500" 
                 data-aos-once="true" 
                 className={styles.CarousalSlide}>

                <a href={props.link} target="_blank" rel="noopener noreferrer">
                    <div className={styles.imageIcon}>
                        <img src={props.img} alt={props.alt}></img>
                    </div>
                </a>

                <p className={styles.textCarousal}>{props.text}</p>


                <div className={styles.tags}>
                    <h4 className={styles.name}>{props.name}</h4>
                    <Tag color="red">{props.tag1}</Tag>
                    <Tag color="red">{props.tag2}</Tag>
                    <Tag color="red">{props.tag3}</Tag> 
                </div>
            </div>
        </>
    );
}