import React from 'react'
import { useState,useEffect } from 'react';
import './weathercard.scss'

import { WiDaySunny } from "weather-icons-react";
import { WiSunset } from "weather-icons-react";
import { WiHumidity } from "weather-icons-react";
import { WiCloudUp } from "weather-icons-react";
import { WiStrongWind } from "weather-icons-react";

export const WeatherInfo = ({tempinfo}) => {
    const [weatherPic, setweatherPic] = useState('WiDaySunny')
    const {
        mood,temp,humidity,pressure,speed,name,country,sunset
    }=tempinfo

    let sec=sunset;
    let date= new Date(sec*1000);
    let timeStr=`${date.getHours()}:${date.getMinutes()}`;

    

    return (
        <div>
            <div className="container">
        <div className="weatherInfo">
          <div className="contents">
            <WiSunset size={50} color="#000" />
            <div className="content-text">
              <p>{timeStr}PM</p>
              <p>Sunset</p>
            </div>
          </div>

          <div className="contents">
            <WiHumidity size={50} color="#000" />
            <div className="content-text">
              <p>{humidity}</p>
              <p>Humidity</p>
            </div>
          </div>

          <div className="contents">
            <WiCloudUp size={50} color="#000" />
            <div className="content-text">
              <p>Pressure</p>
              <p>{pressure}NM</p>
            </div>
          </div>

          <div className="contents">
            <WiStrongWind size={50} color="#000" />
            <div className="content-text">
              <p>Wind</p>
              <p>{speed}</p>
            </div>
          </div>
        </div>

        <div className="weatherMood">
          <div className="temperature">
              <h2>
                  {mood}
              </h2>
            
            <p>{name}, {country}</p>
          </div>

          <div className="weatherIcon">
          <h2>
              {temp}&deg; F
            </h2>
          </div>

          <div className="date">
            <h2>{new Date().toLocaleString()}</h2>
            <p></p>
          </div>
        </div>
      </div>
        </div>
    )
}
