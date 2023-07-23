import React from "react";
import Card from "../../../Components/FeaturedCard/Card";
import styles from "./Experience.module.css";
import SI from "../../../Assets/Images/SI.png";
import AICTE from "../../../Assets/Images/AICTE.png";
import Answer from "../../../Assets/Images/Answer.png";
import Repairo from "../../../Assets/Images/RepairoEx.png";
import Gollaa from "../../../Assets/Images/gollaaEx.png";
import Chalkmate from '../../../Assets/Images/chalkmatess.svg';
import Amazon from "../../../Assets/Images/amazon.svg"

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
            name={"Amazon"}
            image={Amazon}
            alt="SI logo"
            link="https://www.chalkmates.com/"
            desc="Developed an internal diagnostic tool that significantly optimized fetching of critical data from three services,
            resulting in 20mins time reduction to display results, impacted 50K+ advertisers.
            • Implemented an automated ticket flow system using Tampermonkey, JavaScript, reducing manual work by an
            average of 20 hours monthly."
            position="Jan 2023 June 2023"
          />

        <Card
            type="ex"
            name={"Wireout"}
            image={Chalkmate}
            alt="wireout logo"
            link="https://www.chalkmates.com/"
            desc="• Developed the main website from scratch (5K Monthly traffic), Implemented course monetisation flow using GraphQL and Redux.
            and Integrated Three-way-handshake Razorpay Payment gateway."
            position="Nov 2022 Jan 2023"
          />

          <Card
            type="ex"
            name={"Software Incubator"}
            image={SI}
            alt="SI logo"
            link="https://silive.in/"
            desc="Working with a team of 45 members for cultivating technical activities in the
            college and maintaining various websites. Organised various workshops and seminars on Competitive Programming,UI/UX and trending technologies"
            position="Nov 2020 Nov 2022"
          />
          <Card
            type="ex"
            name={"Repairo"}
            image={Repairo}
            link="https://repairo-b2d2c.web.app/"
            alt="Repairo logo"
            desc="Worked as a Full stack Intern to develop UI components and make Rest API's. Implemented various functionalities as well as managed states using context API"
            position="May 2022 - Aug 2022"
          />

          <Card
            name={"AICTE"}
            image={AICTE}
            alt="aicte logo"
            link="https://uhv-nerve-center.web.app/Login"
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
            name={"PSOC'21"}
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
