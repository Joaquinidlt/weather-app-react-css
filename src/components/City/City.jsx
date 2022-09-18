import React from 'react'
import {Link} from 'react-router-dom'
import './City.css'

export default function City({city}){
  let sunrise = new Date(city.amanecer * 1000)
  let sunset = new Date(city.anochecer * 1000)

  return(
    <div className = 'card_container'>
        <div className = 'container'>
          <Link to = '/' className = 'link'><h2 className = 'titulo'>{city.name}</h2></Link>
          <div className = 'info'>
            <div><b>Temperature:</b> {city.temp} ºC</div>
            <div><b>Climate:</b> {city.weather}</div>
            <div><b>Wind:</b> {city.wind} km/h</div>
            <div><b>Clouds:</b> {city.clouds}%</div>
            <div><b>Latitude:</b> {city.latitud}º</div>
            <div><b>Longitude:</b> {city.longitud}º</div>
            <div>
            <b>Sunrise:</b> {`${(sunrise.getHours()<10)? '0' + sunrise.getHours() : sunrise.getHours()}:${(sunrise.getMinutes()<10)? '0' + sunrise.getMinutes() : sunrise.getMinutes()} h`} UTC
            </div>
            <div>
            <b>Sunset:</b> {`${(sunset.getHours()<10)? '0' + sunset.getHours() : sunset.getHours()}:${(sunset.getMinutes()<10)? '0' + sunset.getMinutes() : sunset.getMinutes()} h`} UTC
            </div>
            <div>
              <img
                className = 'iconito'
                src = {`http://openweathermap.org/img/wn/${city.img}@2x.png`}
                width = '120'
                height = '120'
                alt = ''
              />
              <p>{city.icon}</p>
            </div>
          </div>
        </div>
    </div>
  )
}