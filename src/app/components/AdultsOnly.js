import React from 'react'

function AdultsOnly() {
  return (
    <div className="bg-sky-300 flex-col p-11 secondaryColor font-Montserrat text-white flex items-center justify-center">
      <p className="text-xl italic p-5 text-center">LA FIESTA ES SOLO PARA ADULTOS!</p>
      <p className="text-l text-center">Pensamos en un casamiento de sólo adultos por la dinámica de la fiesta.</p>
      <p className="text-l text-center">Queremos que pases una noche increible con nosotros!</p>
      {/* <p className="text-l text-center p-2">Si no tenés con quién dejar a tus hijos y se te hace realmente imposible, avisanos</p> */}
    </div>
  )
}

export default AdultsOnly