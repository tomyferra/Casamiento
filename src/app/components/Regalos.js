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
      <p className="text-xl italic p-5 text-center">REGALOS</p>
      <button onClick={handleOpen} className="p-2 m-2 bg-white border text-black hover:bg-transparent py-2 px-4 rounded-full">Ver Datos Bancarios</button>

      <Dialog open={open} handler={handleOpen} className="fixed overflow-auto inset-0 z-50 m-0 max-w-[100%]">
        <div className="grid place-items-center w-screen h-screen bg-black bg-opacity-50 max-w-[100%]">
        <div className="relative rounded-lg text-blue-gray-500 antialiased font-sans text-base font-light leading-relaxed w-full md:w-3/5 lg:w-2/5 2xl:w-1/4 min-w-[80%] md:min-w-[60%] lg:min-w-[40%] 2xl:min-w-[25%] max-w-[100%] md:max-w-[60%] lg:max-w-[40%] 2xl:max-w-[25%] bg-transparent shadow-none">
          <div className=" flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md mx-auto w-full max-w-[24rem]">
          <h1 className="text-2xl text-center font-bold p-2">Datos Bancarios</h1>
          <p className="text-l text-center">Nombre del Titular: Ferrari Tomas</p>
          <p className="text-l text-center">Banco BBVA</p>
          <p className="text-l text-center p-2 pt-3 font-bold">Caja de ahorro en pesos</p>
          <p className="text-l text-center">CBU: 0170099240000062957416</p>
          <p className="text-l text-center">Alias: FERRARI.TOMAS</p>
          <p className="text-l text-center font-bold pt-3 p-2">Caja de ahorro en dolares</p>
          <p className="text-l text-center">CBU: 0170101844000062560146</p>
          <p className="text-l text-center">Alias: FERRARI.TOMAS.USD</p>
          <button onClick={handleOpen} className="p-2 m-2 border secondaryColor hover:bg-white hover:text-black text-white py-2 px-4 rounded-full">Cerrar</button>
          </div>
          </div>
        </div>
      </Dialog>
    </div>
  )
}

export default Regalos