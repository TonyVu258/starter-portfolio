"use client"
import Hero from '../components/Hero/Hero';
import Projects from '@/components/Projects/Projects';
import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import Preloader from '../components/Preloader/Preloader';
import Pace from "./pace"

import { useEffect, useState } from 'react';
import { Layout } from '@/layout/Layout'
import { Section } from '../styles/GlobalComponents';


export default function Home() {
  Pace.on("start", (function () {
    document.querySelector("#preloader").classList.remove("isdone"), document.querySelector(".loading").classList.remove("isdone")
})), Pace.on("done", (function () {
    document.querySelector("#preloader").classList.add("isdone"), document.querySelector(".loading").classList.add("isdone")
})), document.querySelector("body").classList.contains("pace-done") && (document.querySelector("#preloader").classList.add("isdone"), document.querySelector(".loading").classList.add("isdone")), window.addEventListener("load", (function () {
    document.querySelector("#preloader").classList.add("isdone"), document.querySelector(".loading").classList.add("isdone"), document.querySelector(".pace-running.pace-running") && document.querySelector(".pace-running.pace-running").classList.remove("pace-running")
}))

  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate a delay to showcase the preloader
  //   setTimeout(() => {
  //     setLoading(false);
  //   },500); // Adjust the delay time as needed
  // }, []);

  return (
    <>
      {/* {loading ? <Preloader /> : null} */}
      <Preloader />
      <Layout>
        <Section grid='true'>
          <Hero />
          <BgAnimation />
        </Section>
        <Projects />
        <Technologies />
        <Timeline />
        <Acomplishments />
      </Layout>
    </>
  )
}
