import React from 'react'
import Image from "next/image";
import FioreyTomi from "../../images/FioreyTomiBlack.png";


function Hero() {
  return (
    <div className="flex flex-col bg-cover bg-center shadow-lg backgroundImage">
    <div className="p-4 sm:p-8 flex items-center justify-center">
      <Image src={FioreyTomi} alt="logoCasamiento" />
      <a href="#Detalles"><div className="scroll-down"></div></a>
    </div>
  </div>
  )
}

export default Hero