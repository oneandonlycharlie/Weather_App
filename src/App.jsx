import { useState, useEffect } from 'react'
import './App.css'
import Sun from "../public/sun.svg"
import Wind from "../public/wind.svg"
import Rain from "../public/rain.svg"
import Droplet from "../public/droplet.svg"

function App() {
  

  return (
    <>
      <main>
        <div className='header'>
          <span>right now in <span className='razzmatazz location'>Breda</span>, it's <span className='splash description'>mostly clear</span>.</span>
          <div className="buttons">
            <button>Breda, NL</button><button>Adana, Turkey</button><button>Qinzhou, China</button>
          </div>
        </div>
        <section className="window">
          <div className='primary'>
            <div className="logo item">
              <img src={Sun} alt="" />
            </div>
            <div className='temperature item'>
                <span className='current'>66</span>
                <span className='range'>61 / 69</span>
            </div>
            <div className='features item'>
              <div>
                <div className="feature-logo">
                  <img src={Wind} alt="" srcset="" />
                </div>
                <span className='current'>6</span>
                <span>mph</span>
              </div>
              <div>
                <div className="feature-logo">
                  <img src={Rain} alt="" srcset="" />
                </div>                
                <span className='current'>0</span>
                <span>%</span>
              </div>
              <div>
                <div className="feature-logo">
                  <img src={Droplet} alt="" srcset="" />
                </div>               
                <span className='current'>30</span>
                <span>%</span>
              </div>
            </div>
          </div>
          <div className="secondary">
            <div className="item">
              <box-icon className="logo" name='cloud' ></box-icon>
              <span className="range">58/75</span>
              <span className="date">Tue</span>
            </div>
            <div className="item">
              <box-icon className="logo" name='cloud' ></box-icon>
              <span className="range">58/75</span>
              <span className="date">Tue</span>
            </div>
            <div className="item">
              <box-icon className="logo" name='cloud' ></box-icon>
              <span className="range">58/75</span>
              <span className="date">Tue</span>               
            </div>
            <div className="item">
              <box-icon className="logo"name='cloud' ></box-icon>
              <span className="range">58/75</span>
              <span className="date">Tue</span>                
            </div>
            <div className="item">
              <box-icon className="logo" name='cloud' ></box-icon>
              <span className="range">58/75</span>
              <span className="date">Tue</span>                
            </div>
          </div>
        </section>
      </main>
      <footer>My contacts here</footer>
    </>
  )
}

export default App
