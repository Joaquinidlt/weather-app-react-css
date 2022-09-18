import React, {useEffect, useState} from 'react'
import './Clock.css'

const date = new Date()
const semana = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const meses = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']


export default function Clock() {
  const [dateTime, setDateTime] = useState({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
  });
  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setDateTime({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
        dia: date.getDate(),
        year: date.getFullYear()
      })
    }, 1000)
    return () => clearInterval(timer);
  }, [])

    let diaSemana = date.getDay()
    let renderDia = semana[diaSemana]
    let mes = date.getMonth()
    let renderMes = meses[mes]
    let ampm 

        if(dateTime.hours >= 12){
        dateTime.hours = dateTime.hours - 12
        ampm = 'PM'
        }
        else{
            ampm = 'AM'
        }
    
        if(dateTime.hours === 0){
            dateTime.hours = 12
        }
    
        if(dateTime.minutes < 10){dateTime.minutes = `0${dateTime.minutes}`}
        if(dateTime.seconds < 10){dateTime.seconds = `0${dateTime.seconds}`}

  return (
        <div className = 'wrap'>
            <div className = 'widget'>
                <div className = 'fecha'>
                    <p className = 'diaSemana'>{renderDia} {dateTime.dia} of {renderMes} of {dateTime.year}</p>
                    <p className = 'horas'>{dateTime.hours}:{dateTime.minutes}:{dateTime.seconds} {ampm}</p>
                </div>
            </div>     
        </div>
  )
}