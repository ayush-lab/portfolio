import React from "react";
import styles from "./Testimonials.module.css";
import MadhurSir from "../../../Assets/Images/madhursir.webp";
import ArnavSir from "../../../Assets/Images/arnavsir.webp";
import Mahesh from '../../../Assets/Images/mahesh.webp';
import TestiProfile from "../../../Components/Testi/Testi";
import Aos from "aos";
import "aos/dist/aos.css";
import { Carousel } from "antd";

function Testi() {
  React.useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <>
      <div className={styles.main}>
        <h2
          className={styles.Heading}
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-once="true"
          data-aos-duration="1500"
        >
          {" "}
          Testimonials{" "}
        </h2>
        {/* <h4
          className={styles.subHeading}
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          {" "}
          People that I have worked with have said{" "}
        </h4> */}

        <Carousel className={styles.Carousal}>
        <TestiProfile
            img={Mahesh}
            alt={"maheshProfile"}
            text={
              "During 6-month internship, Ayush made significant contributions to our project, `WIMA Greedy Display`. He worked diligently to enhance the user experience of WIMA. His proactive and collaborative attitude, strong work ethic, and eagerness to learn made him a valuable asset to our team. I highly recommend Ayush for his passion, technical prowess, and dedication to achieving project milestones."
            }
            name={"Mahesh Kumar Vaish"}
            position="DevOps engineer 3 at Amazon"
            tag1={"Amazon"}
            tag2={"Subex"}
            link={"https://www.linkedin.com/in/mahesh-kumar-vaish-68614654/"}
          />

          <TestiProfile
            img={MadhurSir}
            alt={"madhurProfile"}
            text={
              "Ayush is a great team mate to work with, having the desired skills be it in technical or managerial terms. He has a solid foundation of computer science and puts the required amount of hard work and dedication to accomplish a given task. A great team member, learner and visionary."
            }
            name={"Madhur Vashistha"}
            position="Software Engineer at Google"
            tag1={"Google"}
            tag2={"Ex-Amazon"}
            tag3={"SDC"}
            link={"https://www.linkedin.com/in/madhur-vashistha-6217a0181/"}
          />

          <TestiProfile
            img={ArnavSir}
            alt={"arnavProfile"}
            text={
              "Ayush is a great programmer, we worked together at Software Incubator, and he is a hard-working, dedicated, team player, and had a good experience in developing Industrial grade projects."
            }
            name={"Arnav Jain"}
            position="Software Engineer at Amazon"
            tag1={"Amazon"}
            tag2={"Ex-Sony"}
            tag3={"SDC"}
            link={"https://www.linkedin.com/in/arnav-jain-555891194/"}
          />
        </Carousel>
      </div>

      <div class="line">
        <div
          data-aos="zoom-out"
          data-aos-anchor-placement="top-center"
          data-aos-duration="1500"
          data-aos-once="true"
          class="line_break"
        >
          {" "}
        </div>
      </div>
    </>
  );
}

export default Testi;
