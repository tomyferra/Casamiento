import React from 'react'
import Image from "next/image";
import FioreyTomi from "../../images/FioreyTomiBlack4.png";
// import FioreyTomi from "../../images/FioreyTomiBlack2.png";
import CountUp from 'react-countup';


function Hero() {

  var hoy = new Date();
  var Fiesta = new Date('2025-03-15');
  var diferencia = Fiesta - hoy;
  var diferenciaDias = diferencia / (1000 * 60 * 60 * 24);

  return (
    <div className="flex flex-col bg-cover bg-center shadow-lg backgroundImage h-screen justify-center items-center">
      <div className="p-4 sm:p-8 flex flex-col items-center justify-center">
        <Image src={FioreyTomi} alt="logoCasamiento" />
        <div className="flex flex-col sm:flex-row p-5 text-black rounded">
          <h1 className="text-2xl text-center p-1">Nos casamos en</h1>
          <CountUp className="text-xl" start={0} end={diferenciaDias} duration={5}></CountUp>
          <h1 className="text-2xl text-center p-1"> días!</h1>
        </div>
        {/* <a href="#Detalles">
          <div className="scroll-down"></div>
        </a> */}
      </div>
    </div>
  )
}

export default Hero