import React from 'react'
import Image from "next/image";
import IconoCorazon from '../../images/heart.svg'
import Img1 from '../../images/img1.webp'
import Img2 from '../../images/img2.webp'
import Img3 from '../../images/img3.webp'
import Img4 from '../../images/img4.webp'
import Img5 from '../../images/img5.webp'
import Img6 from '../../images/img6.webp'
import Img7 from '../../images/img7.webp'
import Img8 from '../../images/img8.webp'


function Nosotros() {

  return (
    <div className="flex-col p-11 bg-white font-Montserrat text-black flex items-center justify-center">
    <Image
      src={IconoCorazon}
      alt="IconoCorazon"
      width={70}
    />
    <h1 className="text-xl italic p-11 text-center">NOSOTROS</h1>

    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
      <div className="flex items-center justify-center">
        <Image
          src={Img1}
          alt={Img1}
          width={350}
          className="rounded hover:scale-110"
        />
      </div>
      <div className="flex items-center justify-center">
        <Image
          src={Img2}
          alt={Img2}
          width={350}
          className="rounded hover:scale-110"
        />
      </div>
      <div className="flex items-center justify-center">
        <Image
          src={Img3}
          alt={Img3}
          width={350}
          className="rounded hover:scale-110"
        />
      </div>
      <div className="flex items-center justify-center">
        <Image
          src={Img4}
          alt={Img4}
          width={350}
          className="rounded hover:scale-110"
        />
      </div>
      <div className="flex items-center justify-center">
        <Image
          src={Img5}
          alt={Img5}
          width={350}
          className="rounded hover:scale-110"
        />
      </div>
      <div className="flex items-center justify-center">
        <Image
          src={Img6}
          alt={Img6}
          width={350}
          className="rounded hover:scale-110"
        />
      </div>
      <div className="flex items-center justify-center">
        <Image
          src={Img7}
          alt={Img7}
          width={350}
          className="rounded hover:scale-110"
        />
      </div>
      <div className="flex items-center justify-center">
        <Image
          src={Img8}
          alt={Img8}
          width={350}
          className="rounded hover:scale-110"
        />
      </div>
    </div>
  </div>
  )
}

export default Nosotros