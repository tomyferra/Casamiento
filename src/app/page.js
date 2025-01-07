'use client'
import React from "react";
import Intro from './components/intro'
import CeremoniaYFiesta from './components/CeremoniaYFiesta'
import Nosotros from './components/Nosotros'
import Hero from './components/Hero'
import DressCode from './components/DressCode'
import AdultsOnly from './components/AdultsOnly'
import ConfirmAssistance from './components/ConfirmAssistance'
import FinalWords from './components/FinalWords'
import Regalos from "./components/Regalos";

export default function Home() {

  return (
    <>
      <Hero />
      <CeremoniaYFiesta />
      <ConfirmAssistance />
      <Regalos />
      <Nosotros />
      <AdultsOnly />
      <DressCode />
      <FinalWords />
    </>
  );
}
