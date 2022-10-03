import React from "react";
import Card from "../../../Components/FeaturedCard/Card";
import styles from "./Experience.module.css";
import SI from "../../../Assets/Images/SI.png";
import AICTE from "../../../Assets/Images/AICTE.png";
import Answer from "../../../Assets/Images/Answer.png";
import Repairo from "../../../Assets/Images/RepairoEx.png";
import Gollaa from "../../../Assets/Images/gollaaEx.png";

import Aos from "aos";
import "aos/dist/aos.css";

export default function Experience({Experience_ref}) {
  React.useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  return (
    <>
      <div ref={Experience_ref} className={styles.Featured}>
        <h3
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          Experiences
        </h3>

        <div className={styles.projects}>
          <Card
            type="ex"
            name={"Software Incubator"}
            image={SI}
            alt="SI logo"
            link="https://silive.in/"
            desc="Working with a team of 45 members for cultivating technical activities in the
            college and maintaining various websites. Organised various workshops and seminars on Competitive Programming,UI/UX and trending technologies"
            position="Ongoing"
          />
          <Card
            type="ex"
            name={"Repairo"}
            image={Repairo}
            link="https://www.repairoindia.com/"
            alt="Repairo logo"
            desc="Worked as a Full stack Intern to develop UI components and make Rest API's. Implemented various functionalities as well as managed states using context API"
            position="May 2022 - Aug 2022"
          />

          <Card
            name={"AICTE"}
            image={AICTE}
            alt="aicte logo"
            type="ex"
            desc=" Worked as a React developer to develop a webapp for All India Council of Technical Education.Application is used by faculties of colleges across the nation."
            position="Sept 2021 Dec 2021"
          />
          <Card
            name={"Gollaa"}
            image={Gollaa}
            alt="pro"
            type="ex"
            position="Aug 2021 - Sept 2021"
            desc="Worked as a Freelancer,Developed complete main website which consists of a landing
             page with animations and transitions along with blog and stories sections ( 11 pages ) using React and Sass."
            link="https://github.com/hrik2001/answer"
          />
          <Card
            name={"Answer bot"}
            image={Answer}
            alt="pro"
            type="ex"
            position="July 2021 - Aug 2021"
            desc="Worked as an Open source mentee in PSOC 2021, designed and developed Discord bot that answers user’s queries using t5 transformers and also comes packed with moderation tools.
            Techstack used Quart, discord.py and Jinja templating engine"
            link="https://github.com/hrik2001/answer"
          />
        </div>
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
