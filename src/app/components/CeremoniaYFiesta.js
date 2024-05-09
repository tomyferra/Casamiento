import React from 'react'
import Image from "next/image";
import IconoAnillos from '../../images/icono-anillos.svg'

function CeremoniaYFiesta() {
  return (
    <div className="flex-col p-11 secondaryColor font-Montserrat text-white flex items-center justify-center">
      <Image
        src={IconoAnillos}
        alt="IconoAnillos"
        width={150}
      />
      <h1 className=" p-2 text-2xl text-center">CEREMONIA Y FIESTA</h1>
      <p className="text-l text-center">15 de Marzo de 2025 a las 17:00 horas</p>
      <p className="text-l text-center">Espacio Mendoza, El Molino</p>
      <p className="text-l text-center p-2">¡Te esperamos!</p>
      <a target="_blank" href="https://maps.app.goo.gl/qyEwKpHfan6BHgN98" className="p-2 m-2 border bg-white hover:bg-transparent hover:text-black text-black py-2 px-4 rounded-full">COMO LLEGAR</a>
    </div>
  )
}

export default CeremoniaYFiesta