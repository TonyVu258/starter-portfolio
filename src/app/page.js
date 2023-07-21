"use client"
import Hero from '../components/Hero/Hero';
import Projects from '@/components/Projects/Projects';
import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import Preloader from '../components/Preloader/Preloader';

import { useEffect } from 'react';
import { Layout } from '@/layout/Layout'
import { Section } from '../styles/GlobalComponents';
import { Router } from 'next/router';
import 'pace-js';


export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      Pace.on("start", (function () {
        document.querySelector("#preloader").classList.remove("isdone")
        document.querySelector(".loading").classList.remove("isdone")
      }))

      Pace.on("done", (function () {
        document.querySelector("#preloader").classList.add("isdone")
        document.querySelector(".loading").classList.add("isdone")
        document.querySelector("#done").classList.replace("hideX","showX");
      })) 
    }

    const handleStart = () => {
      Pace.restart();
    };

    Router.events.on('routeChangeStart', handleStart);
  }, []);
  return (
    <>
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
