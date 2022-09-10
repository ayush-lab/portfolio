import { React } from 'react';
import styles from './Testi.module.css';
import { Tag } from 'antd';

export default function TestiProfile(props) {

    return (
        <>
            <div className={styles.CarousalSlide}>

                <a href={props.link} target="_blank" rel="noopener noreferrer">
                    <div className={styles.imageIcon}>
                        <img src={props.img} alt={props.alt}></img>
                    </div>
                </a>

                <p className={styles.textCarousal}>{props.text}</p>


                <div className={styles.tags}>
                    <h4 className={styles.name}>{props.name}</h4>
                    <Tag color="blue">{props.tag1}</Tag>
                    <Tag color="blue">{props.tag2}</Tag>
                    <Tag color="blue">{props.tag3}</Tag>
                </div>
            </div>
        </>
    );
}