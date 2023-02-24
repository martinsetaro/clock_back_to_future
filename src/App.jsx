import React, { useState, useEffect} from 'react'
import './style.scss'

const App = () => {

  const [segundos,setSegundos] = useState('')
  const [hora,setHora] = useState('')
  const [anio,setAnio] = useState('')
  const [dia,setDia] = useState('')
  const [mes,setMes] = useState('')
  const [mesPasado,setMesPasado] = useState('')


  const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];





  setInterval(() => {
   const tiempo = new Date();
   let datos = tiempo.getMinutes();
   let datoHora = tiempo.getHours();
   let datoAnio = tiempo.getFullYear();
   let datoDay = tiempo.getDay();
   let meses = month[tiempo.getMonth()];
   let mesespasados = month[tiempo.getMonth()+4];


  if(datos < 10){
    datos = "0" + datos;
    setSegundos(datos)
  }else 
  {
    setSegundos(datos)
  }

  if(datoDay < 10){
    datoDay = "0" + datoDay;
    setDia(datoDay)
  }else 
  {
    setDia(datoDay)
  }

  setHora(datoHora);
  setAnio(datoAnio);
  setDia(datoDay)
  setMes(meses)
  setMesPasado(mesespasados)

}, 1000);

  


  return (

    <div className='container'>
      
      <div className='contenedorReloj'>
        <div className='contenedor_tiempos'>
          <h2 className='futuro'>{mesPasado}</h2>
          <h2 className='futuro'>{dia}</h2>
          <h2 className='futuro'>{anio + 10}</h2>
          <h2 className='futuro hrs'>{hora - 4}</h2>
          <h2 className='futuro'>{segundos}</h2>
        </div>
        <div className='contenedor_tiempos'>
          <h2 className='presente'>{mes}</h2>
          <h2 className='presente'>{dia}</h2>
          <h2 className='presente'>{anio}</h2>
          <h2 className='presente hrs'>{hora}</h2>
          <h2 className='presente'>{segundos}</h2>
        </div>
        <div className='contenedor_tiempos'>
          <h2 className='pasado'>{mes}</h2>
          <h2 className='pasado'>{dia}</h2>
          <h2 className='pasado'>{anio}</h2>
          <h2 className='pasado hrs'>{hora - 5}</h2>
          <h2 className='pasado'>{segundos}</h2>
        </div>

      </div>
    </div>
  )
}

export default App

