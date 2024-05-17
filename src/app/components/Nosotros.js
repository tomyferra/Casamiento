import React from 'react'
import Image from "next/image";
import CountUp from 'react-countup';
import Img1 from '../../images/img1.webp'
import Img2 from '../../images/img2.webp'
import Img3 from '../../images/img3.webp'
import Img4 from '../../images/img4.webp'
import Img5 from '../../images/img5.webp'


function Nosotros() {
  var hoy = new Date();
  var aniversario = new Date('2012-02-04');
  var diferencia = hoy - aniversario;
  var diferenciaDias = diferencia / (1000 * 60 * 60 * 24);


  return (
    <div className="p-11 bg-white font-Montserrat text-black items-center justify-center">
    <h1 className="text-xl italic p-5 text-center">NOSOTROS</h1>
    <div className="countUp flex flex-col md:flex-row p-10 items-center justify-center">
    <div className="flex flex-col p-5 m-5 max-w-[90%] md:max-w-[30%] secondaryColor text-white rounded">
        <h1 className="text-xl text-center">Dias juntos</h1>
        <CountUp start={0} end={diferenciaDias} duration={10}></CountUp>
      </div>
      <div className="flex flex-col p-5 m-5 max-w-[90%] md:max-w-[30%] secondaryColor text-white rounded">
        <h1 className="text-xl text-center">Viajes juntos</h1>
        <CountUp start={0} end={34} duration={10}></CountUp>
      </div>
      <div className="flex flex-col p-5 m-5 max-w-[90%] md:max-w-[30%] secondaryColor text-white rounded">
      <h1 className="text-xl text-center">Otra Medida?</h1>
        <CountUp start={0} end={57} duration={10}></CountUp>
      </div>
    </div>
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
      <div className="flex items-center justify-center">
        <Image
          src={Img1}
          alt="Img1"
          width={350}
          className="rounded hover:scale-110"
        />
      </div>
      <div className="flex items-center justify-center">
        <Image
          src={Img2}
          alt="Img2"
          width={350}
          className="rounded hover:scale-110"
        />
      </div>
      <div className="flex items-center justify-center">
        <Image
          src={Img3}
          alt="Img3"
          width={350}
          className="rounded hover:scale-110"
        />
      </div>
      <div className="flex items-center justify-center">
        <Image
          src={Img4}
          alt="Img4"
          width={350}
          className="rounded hover:scale-110"
        />
      </div>
      <div className="flex items-center justify-center">
        <Image
          src={Img5}
          alt="Img4"
          width={350}
          className="rounded hover:scale-110"
        />
      </div>
      <div className="flex items-center justify-center">
        <Image
          src={Img2}
          alt="Img2"
          width={350}
          className="rounded hover:scale-110"
        />
      </div>
      <div className="flex items-center justify-center">
        <Image
          src={Img1}
          alt="Img1"
          width={350}
          className="rounded hover:scale-110"
        />
      </div>
      <div className="flex items-center justify-center">
        <Image
          src={Img3}
          alt="Img3"
          width={350}
          className="rounded hover:scale-110"
        />
      </div>
    </div>
  </div>
  )
}

export default Nosotros