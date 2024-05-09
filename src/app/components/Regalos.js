import React from 'react'
import Image from "next/image";
import IconoRegalo from '../../images/Regalos.svg'
import {
  Dialog,
} from "@material-tailwind/react";


function Regalos() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <div className="bg-sky-300 flex-col p-11 secondaryColor font-Montserrat text-white flex items-center justify-center">
      <Image
        src={IconoRegalo}
        alt="IconoRegalo"
        width={150}
      />
      <p className="text-l text-center">Tu presencia es el mejor regalo!</p>
      <p className="text-l text-center p-2">Pero si querés, podés colaborar con nuestra Luna de Miel!</p>
      <button onClick={handleOpen} className="p-2 m-2 bg-white border hover:bg-transparent text-[#a6bcc8] hover:text-white py-2 px-4 rounded-full">Ver Datos Bancarios</button>

      <Dialog open={open} handler={handleOpen} className="fixed overflow-auto inset-0 z-50 m-0">
        <div className="grid place-items-center w-screen h-screen bg-black bg-opacity-50">
        <div className="relative rounded-lg text-blue-gray-500 antialiased font-sans text-base font-light leading-relaxed w-full md:w-3/5 lg:w-2/5 2xl:w-1/4 min-w-[80%] md:min-w-[60%] lg:min-w-[40%] 2xl:min-w-[25%] max-w-[80%] md:max-w-[60%] lg:max-w-[40%] 2xl:max-w-[25%] bg-transparent shadow-none">
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md mx-auto w-full max-w-[24rem]">
          <h1 className="text-xl text-center font-bold">Datos Bancarios</h1>
          <p className="text-l text-center">Nombre del Titular: Tomas Ferrari</p>
          <p className="text-l text-center">CBU: 0170099240000062957416</p>
          <p className="text-l text-center">Alias: ferrari.tomas</p>
          <p className="text-l text-center">DNI: 38258853</p>
          <p className="text-l text-center">Banco BBVA</p>
          <button onClick={handleOpen} className="p-2 m-2 border secondaryColor hover:bg-white hover:text-black text-white py-2 px-4 rounded-full">Cerrar</button>
          </div>
          </div>
        </div>
      </Dialog>
    </div>
  )
}

export default Regalos