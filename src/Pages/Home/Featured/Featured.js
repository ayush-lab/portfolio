import React from "react";
import Card from "../../../Components/FeaturedCard/Card";
import styles from "./Featured.module.css";
import Saheli from "../../../Assets/Images/saheli.png";
import Birdminton from "../../../Assets/Images/birdminton.png";

import Trello from "../../../Assets/Images/trello.png";
import Gollaa from "../../../Assets/Images/golaa.png";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Featured({Exploration_ref}) {
  React.useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  return (
    <>
      <div ref={Exploration_ref} className={styles.Featured}>
        {/* <div className={styles.lineBreak}></div> */}

        <h3
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-once="true"
          data-aos-duration="1500"
        >
          Explorations
        </h3>

        <div className={styles.projects}>
          <Card
            name={"Saheli"}
            image={Saheli}
            alt="Saheli"
            desc="Woman can look for fellow women in her vicinity via applying filters like distance and age, see basic details about them and also details on where they are headed and
            their mode of transportation, all in a real time lucid map using React-leaflet and react hook, useInterval for long polling."
            position="Hackathon"
            link={"https://github.com/ImpulseInc/saheli"}
          />
          <Card
            name={"Birdminton"}
            image={Birdminton}
            desc="It is a small multiplayer badminton game, a fierce fight between birds and pigs. Whomever scores 5 eggs first will win the match!"
            link={"https://github.com/ayush-lab/Badminton-Game"}
            alt="Birdminton"
            position="HTML Canvas | JS"
          />
          <Card
            name={"Trello"}
            image={Trello}
            alt="Trello"
            desc="It is a fully responsive Trello Clone which followed the kanban's workflow"
            link={"https://github.com/ayush-lab/TrelloClone"}
            position="React"
          />
          <Card
            name={"Gollaa"}
            image={Gollaa}
            alt="pro"
            desc="A Freelancing project, Developed complete main website which consists of a landing page with animations and transitions along with blog
             and stories sections ( 11 pages ) using React and Sass."
            link="https://gollaa.web.app/home"
            position="Freelancing"
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
