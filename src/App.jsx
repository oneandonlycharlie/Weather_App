import { useState, useEffect } from 'react'
import './App.css'

function App() {
  

  return (
    <>
      <main>
        <div className='header'>
          <h3>right now in <span className='razzmatazz location'>Breda</span>, it's <span className='splash description'>mostly clear</span>.</h3>
          <div className="buttons">
            <button>Breda, NL</button><button>Adana, Turkey</button><button>Qinzhou, China</button>
          </div>
        </div>
        <section className="window">
          <div className='primary'>
            <box-icon className="logo item" 
              name='sun' 
              type='solid' 
              size="css"
              ></box-icon>
            <div className='temperature item'>
                <span className='current'>66</span>
                <span className='range'>61 / 69</span>
            </div>
            <div className='features item'>
              <div>
                <box-icon className="logo" name='wind' size="css"></box-icon>
                <span className='current'>6</span>
                <span>mph</span>
              </div>
              <div>
                <box-icon className="logo" name='shower' size="css"></box-icon>
                <span className='current'>0</span>
                <span>%</span>
              </div>
              <div>
                <box-icon className="logo" name='droplet' size="css"></box-icon>
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
