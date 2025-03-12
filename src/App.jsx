import { useState, useEffect } from 'react'
import './App.css'
import Wind from "./assets/wind.svg"
import Rain from "./assets/rain.svg"
import Droplet from "./assets/droplet.svg"
import Search from "./assets/search.svg"

function App() {
  
  const [dataToday, setDataToday] = useState(null)
  const [dataForecast, setForecast] = useState(null)
  const [locationInput, setInput] = useState("")
  const [searchLocation, setSearch] = useState("")
  const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  useEffect(()=>{
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchLocation? searchLocation : `Breda`}/next7days?unitGroup=metric&include=days%2Ccurrent&key=K9DBXADCCF4V6TWJPWSSWFCBN&contentType=json`)
    .then((response)=>{
      if (!response.ok){
        alert("Oops, something's wrong. Try later with another loaction.");
        throw new Error("Network error")
      };
      return response.json()
    })
    .then((data)=>{
      console.log(data)
      const currentData = {
        ...data.currentConditions, 
        address: data.address
      }
      setDataToday(currentData)
      setForecast(data.days.splice(1,5))
    })
  },[searchLocation])

  console.log(dataToday)
  
  return (
    <>
      <header>
        <img className="github-icon"src="/github-mark.svg" alt="github icon" />
      </header>
      <main>
        <div className='header'>
          <span>Right now in <span className='razzmatazz location'>{dataToday? dataToday.address : ""}</span>, it's <span className='splash description'>{dataToday? dataToday.conditions.toLowerCase() : ""}</span>.</span>
          <div className="cities">
            <button
              onClick={()=>{setSearch("Breda")}}
            >Breda, NL</button>
            <button
              onClick={()=>{setSearch("Adana")}}
            >Adana, Turkey</button>
            <button
              onClick={()=>{setSearch("Qinzhou")}}
            >Qinzhou, China</button>
          </div>
          <div className="search">
            <input type="text" placeholder='Search a city'
                  value={locationInput}
                  onChange={(e)=>{setInput(e.target.value)}}
            /><button onClick={()=>setSearch(locationInput)}><img src={Search} alt="magnifying glass" /></button>
          </div>
        </div>
        <section className="window">
          <div className='primary'>
            {dataToday &&
              <div className="logo item ">
                <img className={`${dataToday.icon}`}src={`src/assets/conditions/${dataToday.icon}.svg`} alt="Weather Icon" />
              </div>}
            <div className='temperature item'>
                <span className='current'>{dataToday? dataToday.temp : ""}</span>
                <span className='range'>{dataForecast? dataForecast[0].tempmax : ""}°C | {dataForecast? dataForecast[0].tempmin : ""}°C</span>
            </div>
            <div className='features item'>
              <div>
                <div className="feature-logo">
                  <img src={Wind} alt="" srcset="" />
                </div>
                <span className='current'>{dataToday? dataToday.windspeed : ""}</span>
                <span>mph</span>
              </div>
              <div>
                <div className="feature-logo">
                  <img src={Rain} alt="" srcset="" />
                </div>                
                <span className='current'>{dataToday? dataToday.precipprob : ""}</span>
                <span>%</span>
              </div>
              <div>
                <div className="feature-logo">
                  <img src={Droplet} alt="" srcset="" />
                </div>               
                <span className='current'>{dataToday? dataToday.humidity : ""}</span>
                <span>%</span>
              </div>
            </div>
          </div>
          <div className="secondary">
              {dataForecast? dataForecast.map((entry)=>(
              <div className="item" key={entry.datetimeeproch}>
                <img src={`src/assets/conditions/${entry.icon}.svg`} alt="icon" />
                <span className="range">{entry.tempmax} / {entry.tempmin}</span>
                <span className="date">{WEEKDAYS[new Date(entry.datetime).getDay()]}</span>
              </div>
              )): <div></div>}             
          </div>
        </section>
      </main>
    </>
  )
}

export default App
