import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TopBar from "./components/TopBar";
import WeatherCast from "./components/WeatherCast";
import HourlyInfo from "./components/HourlyInfo";
//import GetWeatherAPI from "./components/WeatherAPI";
import Weather_Pic from "./assets/weather-pic.jpg";
import Drizzle from "./assets/mist-pic.jpg";
import Cloud from "./assets/cloudImg-2.jpg";
import Halfcloud from "./assets/weather-pic.jpg";
import Thunder from "./assets/thunder.jpg";
import RainImg from "./assets/thunder.jpg";
import ClearImg from "./assets/clear.jpg";
import OvercastImg from "./assets/overcast.jpg";


function App() {
  const [getHour, setGetHour] = useState();
  const [weatherData, setWeatherData] = useState();
  const [cityName, setCityName] = useState("")
  
  useEffect(() => {
    const api_key = "f7543f73e5bd430b8e7193101240902";
    async function getWeather(getCityName) {
      await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${getCityName ? getCityName : "Karachi"}`
      )
        .then((res) => res.json())
        .then((response) => {
          console.log("data", response);

          const {
            current: {
              condition: { text },
              last_updated,
              cloud,
              feelslike_c,
              feelslike_f,
              humidity,
              wind_mph,
            },
            location: { name, country },
            forecast: {
              forecastday: {
                0: {
                  astro: { sunrise, sunset },
                  hour,
                },
              },
            },
          } = response;
          console.log(text, sunrise, sunset, hour, last_updated, feelslike_c);
          const settingHour = hour.slice(13, 23);
          console.log(settingHour);
          setGetHour([...settingHour]);
          setWeatherData({
            text,
            last_updated,
            feelslike_c,
            feelslike_f,
            humidity,
            wind_mph,
            name,
            country,
            sunrise,
            sunset,
            cloud
          });
        });
    }
    getWeather(cityName);
    console.log("cityName",cityName);
  }, [cityName]);
  const weatherCondition = weatherData?.text;
  console.log("weatherData", weatherData);
  let bgImg;
  switch (weatherCondition) {
    case "Rainy":
      bgImg = RainImg;
      break;
    case "Sunny":
      bgImg = ClearImg;
      break;
    case "Patchy rain nearby":
      bgImg = Drizzle;
      break;
    case "Partly Cloudy":
        bgImg = Halfcloud;
      break;
    case "Overcast":
      bgImg = OvercastImg;
      break;
    case "Moderate or heavy rain in area with thunder":
      bgImg = Thunder;
      break;
      case "Light rain shower":
      bgImg = RainImg;
      break;
      case "Light rain":
      bgImg = RainImg;
      break;
      case "Light drizzle":
      bgImg = Drizzle;
      break;
      case "Patchy light rain with thunder":
      bgImg = Thunder;
      break;
      case "Moderate or heavy rain with thunder":
        bgImg = Thunder;
        break;
      case "Mist":
        bgImg = Halfcloud;
        break;
      case "Cloudy":
      bgImg = Halfcloud;
      break;
    default:
      bgImg = Cloud
  }
    
  return (
    <div className="weatherApp" style={{borderRadius:"15px",padding:"10px 15px", backgroundImage:`url(${bgImg})`, backgroundSize:"cover",backgroundPosition:"center"}}>
      <TopBar weatherData={weatherData} setCityName={setCityName}/>
      <WeatherCast weatherData={weatherData} />
      <HourlyInfo getHour={getHour} />
    </div>
  );
}

export default App;
