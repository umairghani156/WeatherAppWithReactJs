import { Col, Row } from "antd";
import SunPic from "../assets/sun-3.png"
import Cloud from "../assets/Cloud-emoji.png";
import SunWithCloud from "../assets/sun.png"
import Sun2 from "../assets/sun-2.png"
import Umbrella from "../assets/umb.png"
const WeatherCast = ({weatherData}) => {
  console.log("data", weatherData);
  const weatherCondition = weatherData?.text;
  let emoji;
  switch (weatherCondition) {
    case "Rainy":
      emoji = Umbrella;
      break;
    case "Sunny":
      emoji = Sun2;
      break;
    case "Patchy rain nearby":
      emoji = Umbrella;
      break;
    case "Partly Cloudy":
        emoji = SunWithCloud;
      break;
    case "Overcast":
      emoji = Cloud;
      break;
    case "Moderate or heavy rain in area with thunder":
      emoji = SunPic;
      break;
      case "Light rain shower":
      emoji = Umbrella;
      break;
      case "Light rain":
      emoji = Umbrella;
      break;
      case "Light drizzle":
      emoji = SunWithCloud;
      break;
      case "Patchy light rain with thunder":
      emoji = Umbrella;
      break;
      case "Moderate or heavy rain with thunder":
        emoji = Umbrella;
        break;
      case "Mist":
        emoji = Cloud;
        break;
      case "Cloudy":
      emoji = Cloud;
      break;
    default:
      emoji = SunWithCloud
  }
    
  return (
    <Row >
      <Col lg={12} md={12} sm={24} xs={24}>
        <div className="forecastDeg">
         <img width={"100px"} src={emoji} alt="" />
          <div>
            <p style={{fontSize:"55px", margin:"5px", color:"White"}}>{Math.floor(weatherData?.feelslike_f)}<sup style={{fontSize:"25px"}}>°F | <span style={{opacity:"0.7"}}>°C</span> </sup></p>
            <p style={{fontSize:"18px"}}>{weatherData?.text}</p>
          </div>
        </div>
      </Col>
      <Col lg={12} md={12} sm={24} xs={24} >
        <div className="weather-info">
          <div className="hight-info">
            <div style={{textAlign:"center"}}>
              <p style={{fontSize:"20px", marginBottom:"5px", fontWeight:"600"}}>{weatherData?.humidity}°</p>
              <p style={{margin:"0"}}>Humidity</p>
            </div>
            <div style={{textAlign:"center"}}>
              <p style={{fontSize:"20px", marginBottom:"5px", fontWeight:"600"}}>{weatherData?.feelslike_c}°</p>
              <p style={{margin:"0"}}>°C</p>
            </div>
          </div>
          <div>
            <div style={{textAlign:"center"}}>
              <p style={{fontSize:"20px", marginBottom:"5px", fontWeight:"600"}}>{weatherData?.wind_mph}mph</p>
              <p style={{margin:"0"}}>Wind</p>
            </div>
            
            <div style={{textAlign:"center"}}>
              <p style={{fontSize:"20px", marginBottom:"5px", fontWeight:"600"}}>{weatherData?.cloud < 10? "10%" : weatherData?.cloud + "%"}</p>
              <p style={{margin:"0"}}>{weatherData?.cloud < 40? "Sunny":"Rain"}</p>
            </div>
          </div>
          <div>
          <div style={{textAlign:"center"}}>
              <p style={{fontSize:"20px", marginBottom:"5px", fontWeight:"600"}}>{weatherData?.sunrise}</p>
              <p style={{margin:"0"}}>Sunrise</p>
            </div>
            <div style={{textAlign:"center"}}>
              <p style={{fontSize:"20px", marginBottom:"5px", fontWeight:"600"}}>{weatherData?.sunset}</p>
              <p style={{margin:"0"}}>Sunset</p>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default WeatherCast;
