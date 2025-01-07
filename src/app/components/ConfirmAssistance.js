import React from 'react'
import Image from "next/image";
import IconoCalendar from '../../images/Calendar.svg'

function ConfirmAssistance() {
  return (
    <div className="flex-col p-5 bg-white font-Montserrat text-black flex items-center justify-center">
      <Image
          src={IconoCalendar}
          alt="IconCalendar"
          width={150}
      />
      <p className="text-xl italic p-5 text-center">CONFIRMAR ASISTENCIA</p>
      <p className="text-l text-center">Completar un solo formulario por persona</p>
      <a target="_blank" href="https://forms.gle/ZNURycvWuUR8k9EEA" className="p-2 m-2 border secondaryColor hover:bg-white hover:text-black text-white py-2 px-4 rounded-full">Confirmar Asistencia</a>
    </div>
  )
}

export default ConfirmAssistance