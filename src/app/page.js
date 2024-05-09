'use client'
import Image from "next/image";
import FioreyTomi from "../images/FioreyTomiBlack.png";
import IconoAnillos from '../images/icono-anillos.svg'
import IconoRegalo from '../images/Regalos.svg'
import IconoDressCode from '../images/DressCode.svg'
import IconoCalendar from '../images/Calendar.svg'
import Img1 from '../images/img1.webp'
import Img2 from '../images/img2.webp'
import Img3 from '../images/img3.webp'
import Img4 from '../images/img4.webp'
import CountUp from 'react-countup';


export default function Home() {
  var hoy = new Date();
  var aniversario = new Date('2012-02-04');
  var diferencia = hoy - aniversario;
  var diferenciaDias = diferencia / (1000 * 60 * 60 * 24);

  return (
    <>
      <div className="h-100 flex flex-col bg-cover bg-fixed bg-center bg-no-repeat shadow-lg backgroundImage">
        <div className="p-4 sm:p-8 flex items-center justify-center">
          <Image src={FioreyTomi} alt="logoCasamiento" />
          <a href="#Detalles"><div className="scroll-down"></div></a>
        </div>
      </div>
      {/* ################################################################################################
      ################################################################################################ */}
      <div id="Detalles" className="flex-col p-24 bg-white font-Montserrat text-black flex items-center justify-center">
        <p>Llegó el dia tan esperado</p>
        <h1 className=" p-2 text-2xl text-center">¡Nos vamos a casar y queremos festejarlo con vos!</h1>
      </div>
      {/* ################################################################################################
      ################################################################################################ */}
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
      {/* ################################################################################################
      ################################################################################################ */}
      <div className="p-11 bg-white font-Montserrat text-black items-center justify-center">
        <h1 className="text-xl italic p-5 text-center">NOSOTROS</h1>
        <div className="countUp flex p-10 items-center justify-center">
          <div className="flex flex-col p-5 m-5 secondaryColor text-white rounded">
            <h1 className="text-xl text-center">Dias juntos</h1>
            <CountUp start={0} end={diferenciaDias} duration={10}></CountUp>
          </div>
          <div className="flex flex-col p-5 m-5 secondaryColor text-white rounded">
            <h1 className="text-xl text-center">Viajes juntos</h1>
            <CountUp start={0} end={34} duration={10}></CountUp>
          </div>
          <div className="flex flex-col p-5 m-5 secondaryColor text-white rounded">
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
              src={Img4}
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
      {/* ################################################################################################
      ################################################################################################ */}
      <div className="bg-sky-300 flex-col p-11 secondaryColor font-Montserrat text-white flex items-center justify-center">
        <Image
          src={IconoRegalo}
          alt="IconoRegalo"
          width={150}
        />
        <p className="text-l text-center">Tu presencia es el mejor regalo!</p>
        <p className="text-l text-center">Pero si querés, podés colaborar con nuestra</p>
        <p className="text-l text-center p-2">Luna de Miel...</p>
        <a target="_blank" href="https://maps.app.goo.gl/qyEwKpHfan6BHgN98" className="p-2 m-2 bg-white border hover:bg-transparent text-[#a6bcc8] hover:text-white py-2 px-4 rounded-full">Ver Datos Bancarios</a>
      </div>
      {/* ################################################################################################
      ################################################################################################ */}
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
      {/* ################################################################################################
      ################################################################################################ */}
      <div className="bg-sky-300 flex-col p-11 secondaryColor font-Montserrat text-white flex items-center justify-center">
        <p className="text-xl italic p-5 text-center">LA FIESTA ES SOLO PARA ADULTOS!</p>
        <p className="text-l text-center">Pensamos en un casamiento de sólo adultos por la dinámica de la fiesta.</p>
        <p className="text-l text-center">Queremos que pases una noche increible con nosotros!</p>
        <p className="text-l text-center p-2">Si no tenés con quién dejar a tus hijos y se te hace realmente imposible, avisanos</p>
      </div>
      {/* ################################################################################################
      ################################################################################################ */}
      <div className="flex-col p-11 bg-white font-Montserrat text-black flex items-center justify-center">
        <Image
            src={IconoCalendar}
            alt="IconCalendar"
            width={150}
        />
        <p className="text-xl italic p-5 text-center">CONFIRMAR ASISTENCIA</p>
        <p className="text-l text-center">Por favor, confirma asistencia en el siguiente formulario!</p>
        <a target="_blank" href="https://forms.gle/ZNURycvWuUR8k9EEA" className="p-2 m-2 border secondaryColor hover:bg-white hover:text-black text-white py-2 px-4 rounded-full">Confirmar Asistencia</a>
      </div>
      {/* ################################################################################################
      ################################################################################################ */}
      <div className="bg-sky-300 flex-col p-11 secondaryColor font-Montserrat text-white flex items-center justify-center">
        <p className="text-xl italic p-5 text-center">GRACIAS POR SER PARTE DE ESTE MOMENTO UNICO!</p>
        <p className="text-l text-center">Esperamos que la pases tan bien como nosotros.</p>
        <p className="text-l text-center p-5">Nos vemos el 15 de Marzo, preparate!!</p>
      </div>
    </>
  );
}
