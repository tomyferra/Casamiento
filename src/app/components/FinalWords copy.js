import React from 'react'
import IconoCorazon from '../../images/heart.svg'
import Image from "next/image";

function FinalWords() {
  return (
    <div className="flex-col p-11 secondaryColor font-Montserrat text-white flex items-center justify-center">
      <p className="text-xl italic p-5 text-center">Gracias por acompañarnos en este momento tan importante</p>
      <div className="flex">
        <p className="text-xl italic p-5 text-center">Los queremos</p>
        <Image
          src={IconoCorazon}
          alt="IconoCorazon"
          width={30}
        />
      </div>
    </div>
  )
}

export default FinalWords