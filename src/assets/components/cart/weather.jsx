import React, { useState } from 'react'
import Dark from '../dark'

const Weather = ({weather, temp, dark}) => {

    const URL = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    const buttonTemp = [temp.kelvin, temp.celsius, temp.fahrenheit]
    const [buttonTempIndex, setButtonTempIndex] = useState(0)

    function changeTemp(){   
        setButtonTempIndex((buttonTempIndex + 1) % buttonTemp.length)
    }

    return (
    <div className="text-center z-50 dark:text-white">
      <Dark dark={dark}></Dark>
      <h1 className='pb-10 pt-6 font-bold text-3xl'>{weather.name} {weather.sys.country}</h1>
      <div className='container max-w-xl grid grid-cols-1 sm:grid-cols-3'>
        <section className='sm:col-span-2 grid grid-cols-2 container max-w-sm bg-slate-300/70 m-auto rounded-2xl items-center justify-items-center p-8 dark:bg-slate-950/50'>
            <h2 className='text-center py-2 col-start-1 col-end-3 font-semibold text-xl'>{weather.weather[0].description}</h2>
            <p className='text-5xl '>{buttonTemp[buttonTempIndex]}{ buttonTempIndex === 0 ? `°K` : ( buttonTempIndex === 1 ? `°C`: `°F` )}</p>
            <div className=''>
                <img src={URL} alt="" />
            </div>
        </section>
        <section className='max-w-sm grid grid-cols-3 sm:grid-cols-1 bg-slate-300/70 sm:mx-8 my-5 rounded-2xl text-xs dark:bg-slate-950/50'>
            <div className='px-5 py-5 grid grid-cols-2 m-auto gap-2'>
                <div className='my-auto'>
                    <img src="/icons/wind.png" alt="" />
                </div>
                <p className='my-auto'>{weather.wind.speed} m/s</p>
            </div>
            <div className='px-5 py-5 grid grid-cols-2 gap-2'>
                <div className='my-auto'>
                    <img src="/icons/humidity.png" alt="" />
                </div>
                <p className='my-auto'>{weather.main.humidity} %</p>
            </div>
            <div className='px-5 py-5 grid grid-cols-2 m-auto gap-2'>
                <div className='my-auto'>
                    <img src="/icons/pressure.png" alt="" />
                </div>
                <p className='my-auto'>{weather.main.pressure} hPa</p>
            </div>
        </section>
      </div>
      <button className='bg-white/90 rounded-2xl px-5 py-2 dark:bg-blue-800/70 font-semibold' onClick={changeTemp}>Cambiar a { buttonTempIndex === 0 ? `°C` : ( buttonTempIndex === 1 ? `°F`: `°K` )}</button>
    </div>
  )
}

export default Weather
