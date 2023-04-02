import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"
import Loader from './assets/components/loader'
import Weather from './assets/components/cart/weather'

function App() {

  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temp, setTemp] = useState()
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    if (theme==='dark'){
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])
  
  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? "light" : "dark")
  }

  const success = (pos) => {      
    const crd = {
      lat : pos.coords.latitude,
      lon : pos.coords.longitude
    }
    setCoords(crd)
  }
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  useEffect(() => {
    if (coords) {
      const APIKEY = '1348395b30061144fe14d99896e9c39a'
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKEY}`
      axios.get(URL)
      .then((res) => {
        setWeather(res.data)

        const kelvin = (res.data.main.temp).toFixed(0)
        const celsius = (kelvin - 273.15).toFixed(0)
        const fahrenheit = (celsius * 1.8 + 32).toFixed(0)
        
        const newTemp = {
          kelvin ,    //kelvin : kelvin
          celsius,    //celsius : celsius
          fahrenheit  //fahrenheit : fahrenheit
        }
        setTemp(newTemp)
      })
      .catch((err) => console.log(err));
      
    }

  }, [coords])
  
  return (
    <div className="grid place-content-center min-h-screen bg-cover bg-center p-2" style={{backgroundImage: `url( /bg/${weather?.weather[0].icon.slice(0,2)}d.png)`}}>
    <div className='dark:fixed dark:top-0 dark:left-0 dark:w-screen dark:h-screen dark:bg-gray-700/70 z-0'></div>
        {weather ? (
          <Weather weather={weather} temp={temp} dark={handleThemeSwitch}></Weather>
        ) : (
          <Loader></Loader>
        )}
    </div>
  )
}

export default App
