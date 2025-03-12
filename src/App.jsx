import { useState, useEffect } from 'react'
import './App.css'
import Wind from "./assets/wind.svg"
import Rain from "./assets/rain.svg"
import Droplet from "./assets/droplet.svg"
import Search from "./assets/search.svg"

function App() {
  
  const [dataToday, setDataToday] = useState(null)
  const [dataForecast, setForecast] = useState(null)
  const [location, setLocation] = useState(null)
  const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  useEffect(()=>{
    fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Breda/next7days?unitGroup=metric&include=days%2Ccurrent&key=K9DBXADCCF4V6TWJPWSSWFCBN&contentType=json")
    .then((response)=>{
      if (!response.ok){
        throw new Error("Network error")
      };
      return response.json()
    })
    .then((data)=>{
      console.log(data)
      setLocation(data.address);
      // const [current, ...forecast] = data.days
      setDataToday(data.currentConditions)
      setForecast(data.days.splice(1,5))
    })
  },[])

 

  
  return (
    <>
      <header>
        <img className="github-icon"src="/github-mark.svg" alt="github icon" />
      </header>
      <main>
        <div className='header'>
          <span>right now in <span className='razzmatazz location'>{location || "  "}</span>, it's <span className='splash description'>{dataToday? dataToday.conditions : ""}</span>.</span>
          <div className="cities">
            <button>Breda, NL</button><button>Adana, Turkey</button><button>Qinzhou, China</button>
          </div>
          <div className="search">
            <input type="text" placeholder='Search a city'/><button><img src={Search} alt="magnifying glass" /></button>
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
