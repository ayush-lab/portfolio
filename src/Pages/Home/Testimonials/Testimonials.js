import { React } from 'react';
import styles from './Testimonials.module.css';
import MadhurSir from '../../../Assets/Images/madhursir.jpg';
import ArnavSir from '../../../Assets/Images/arnavsir.jpg';
import TestiProfile from '../../../Components/Testi/Testi';

import { Carousel } from 'antd';
function Testi() {
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };


    return (
        <>
            <div className={styles.main}>

                <h2 className={styles.Heading}> Testimonials </h2>
                <h4 className={styles.subHeading}> People that I have worked with have said </h4>

                <Carousel effect="fade"  className={styles.Carousal}>

                    <TestiProfile img={MadhurSir} alt={"madhurProfile"} text={"Ayush is a great team mate to work with, having the desired skills be it in technical or managerial terms. He has a solid foundation of computer science and puts the required amount of hard work and dedication to accomplish a given task. A great team member, learner and visionary."} 
                                  name={"Madhur Vashistha"} tag1={"Google"} tag2={"Ex-Amazon"} tag3={"SDC"}
                                  link={"https://www.linkedin.com/in/madhur-vashistha-6217a0181/" } />

                    <TestiProfile img={ArnavSir} alt={"arnavProfile"} text={"Ayush is a great programmer, we worked together at Software Incubator, and he is a hard-working, dedicated, team player, and had a good experience in developing Industrial grade projects."} 
                                  name={"Arnav Jain"} tag1={"Amazon"} tag2={"Ex-Sony"} tag3={"SDC"} 
                                  link={"https://www.linkedin.com/in/arnav-jain-555891194/"}/>

                    <div>
                        <h3 >3</h3>
                    </div>
                    <div>
                        <h3 >4</h3>
                    </div>
                </Carousel>
            </div>
        </>
    )
}

export default Testi;
