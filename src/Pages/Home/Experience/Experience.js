import React from "react";
import Card from "../../../Components/FeaturedCard/Card";
import styles from "./Experience.module.css";
import Card1 from "../../../Assets/Images/dev.gif";
import SI from "../../../Assets/Images/SI.png";
import AICTE from "../../../Assets/Images/AICTE.png";
import Answer from "../../../Assets/Images/Answer.png";
import Repairo from "../../../Assets/Images/RepairoEx.png";

import Aos from "aos";
import "aos/dist/aos.css";

export default function Experience() {
  React.useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  return (
    <div className={styles.Featured}>
      <h3
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        data-aos-duration="1500"
      >
        Experiences
      </h3>

      <div className={styles.projects}>
        <Card
          name={"Saheli"}
          image={Repairo}
          alt="pro"
          position="Lead react developer"
        />

        <Card
          name={"Saheli"}
          image={SI}
          alt="pro"
          position="Lead react developer"
        />
        <Card
          name={"Saheli"}
          image={AICTE}
          alt="pro"
          position="Lead react developer"
        />
        <Card
          name={"Saheli"}
          image={Answer}
          alt="pro"
          position="Lead react developer"
        />
      </div>
    </div>
  );
}
