import React,{useState,useEffect} from "react";
import "./weathercard.scss";
import { WeatherInfo } from "./WeatherInfo";

// api.openweathermap.org/data/2.5/weather?q=kathmandu&appid=b7fd688b17349c7d7bdd69ddd18cec94

export const Weathercard = () => {
    const [searchvalue, setSearchValue] = useState("kathmandu");
    const [tempinfo, settempinfo] = useState({});
    const getWeatherInfo= async() => {
       try{
        let api=`https://api.openweathermap.org/data/2.5/weather?q=${searchvalue}&appid=b7fd688b17349c7d7bdd69ddd18cec94`
        let res= await fetch (api);
        let data =await  res.json();
        
        const {main:mood}=data.weather[0];
        const {temp}=data.main;
        const{humidity,pressure}=data.main;
        const{speed}=data.wind;
        const{name}=data;
        const{country,sunset}=data.sys;

        const Info={
            mood,temp,humidity,pressure,speed,name,country,sunset
        }
        settempinfo(Info);
       } 
        catch(error){
            console.log(error)    
        }
    }

    useEffect(() => {
        getWeatherInfo();
    }, [])

  return (
    <div className="weather">
      <h1>Weather App</h1>

      <input type="text" onChange={(e)=>setSearchValue(e.target.value)} value={searchvalue} placeholder="search"/>
      <button onClick={getWeatherInfo} >Search</button>

      <WeatherInfo tempinfo={tempinfo}/>
    </div>
  );
};
