import React from 'react'
import Image from "next/image";
import IconoDressCode from '../../images/DressCode.svg'


function DressCode() {
  return (
    <div className="flex-col p-11 bg-white font-Montserrat text-black flex items-center justify-center">
    <Image
      src={IconoDressCode}
      alt="IconoDressCode"
      width={150}
      style={{ filter: 'invert(100%)' }}
    />
    <h1 className=" p-2 text-2xl text-center">DRESS CODE</h1>
    <p className="text-l text-center">Elegante</p>
    <p className="text-l text-center p-2">Ponete lindo/a que las fotos seran increibles!</p>
  </div>
  )
}

export default DressCode