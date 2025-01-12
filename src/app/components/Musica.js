import React from 'react'
import Image from "next/image";
import IconoCorazon from '../../images/music.svg'

function Musica() {
  return (
    <div className="bg-sky-300 flex-col p-11 secondaryColor text-white flex items-center justify-center">
      <Image
        src={IconoCorazon}
        alt="IconoCorazon"
        width={70}
      />
      <p className="text-xl italic p-5 text-center">Que canción no puede faltar en nuestra fiesta?</p>
      <a target="_blank" href="https://forms.gle/XRbpLtQqpWsJPBV99" className="p-2 m-2 border secondaryColor hover:bg-white hover:text-black text-white py-2 px-4 rounded-full">Agregala aca</a>
    </div>
  )
}

export default Musica