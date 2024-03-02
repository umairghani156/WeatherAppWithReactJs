import { Col } from "antd";
import Cloud from "../assets/Cloud-emoji.png";
import SunWithCloud from "../assets/sun.png"
import Sun2 from "../assets/sun-2.png"
import Umbrella from "../assets/umb.png"
import { useState } from "react";
const ForecastCard = ({weatherVal, index}) =>{
    console.log("hourly data", weatherVal);
    const [foreCastEmo, setForeCastEmo] = useState()
    const foreCastTime = weatherVal.time.slice(weatherVal.time.lastIndexOf(" ") + 1)
    const temp_c = weatherVal.temp_c;
    const cloudInfo = weatherVal.cloud
    console.log("ddd",cloudInfo);
    const weatherCondition = weatherVal.condition.text;
    console.log(weatherCondition);
    let emoji;
    if (weatherCondition === 'Sunny') {
        emoji = '☀️'; // Sunny
      } else if (weatherCondition === 'Patchy rain nearby') {
        emoji = '🌧️'; // Rainy
      } else if (weatherCondition === 'Partly Cloudy' || 'Cloudy') {
        emoji = '🌩️'; // Cloudy
      } else if (weatherCondition === 'Overcast') {
        emoji = '☁️'; // Snowy
      }else if(weatherCondition === "Light rain shower"){
        emoji = '🌦️ ' // light rain //Light drizzle
      }else if(weatherCondition === "Light drizzle"){
        emoji = '☔ ' // light rain //
      }else if(weatherCondition === "Torrential rain shower"){
        emoji = '⛈️ ' // light rain 
      }else if(weatherCondition === "Moderate or heavy rain in area with thunder"){
        emoji = '🌩️ ' // light rain //
      }else if(weatherCondition === "Fog"){
        emoji = '🌫️ ' // light rain //🌩️
      }else {
        emoji = '☁️'; // Snowy
      }



    return(
        <>
        <Col className="footer-col" lg={2} md={4} sm={5} xs={6} >
                <p>{foreCastTime < "12:00"? foreCastTime + " AM":foreCastTime + "PM"}</p>
                <h1>{emoji}</h1>
                <p>{temp_c} °</p>
            </Col>
        </>
    )
}
export default ForecastCard;