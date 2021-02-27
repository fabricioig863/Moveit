import Head from 'next/head';

import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperiencieBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallegenBox } from "../components/ChallengeBox";


import styles from "../styles/pages/Home.module.css";
import { CountdownProvider } from '../contexts/CountdownContext';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | move.it</title>
      </Head>
    
      <ExperiencieBar />

      <CountdownProvider> 
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallegenBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  )
}
