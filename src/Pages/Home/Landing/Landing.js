import { React } from 'react';
import styles from './Landing.module.css';
import Ayush from "../../../Assets/Images/heroPic.jpg";
import Typer from '../../../Components/Typer';

function Landing() {



    return (
        <>
            <div className={styles.main}>

                <div className={styles.mainLeft}>
                    <p>Hey 👋🏻, This is Ayush  </p>
                    <p>As a developer,
                        my superpower happens behind the scenes to make a digital product look great, work fast
                        and perform well with a seamless user experience.</p>
                    {/* <p className={styles.Typer}><Typer
                        heading=""
                        dataText={[
                            "I'm a React developer.",
                            'I develop modern frontend apps.',
                            "I'm a competitive programmar.",
                            "I'm a national badminton player."
                            
                        ]}/>
                        </p> */}

                    <div></div>

                </div>


                <div className={styles.mainRight}>

                    <img src={Ayush} alt="ayush photo " />

                </div>

            </div>
        </>
    )
}

export default Landing;