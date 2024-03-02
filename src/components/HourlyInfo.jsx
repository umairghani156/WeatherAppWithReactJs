import { Card, Col, Row } from "antd"
import React from "react";

import ForecastCard from "./ForecastCard";
const gridStyle = {
    width: '10%',
    height: "100px",
    textAlign: 'center',
  };
const HourlyInfo = ({getHour}) =>{
   console.log("data",getHour);
    return(
        <div style={{margin:"0"}}>
            <p>Forecast</p>
        <Row className="footer">
            {
                getHour && getHour?.map((weatherVal, ind)=> <ForecastCard key={ind} weatherVal={weatherVal} index={ind}/>)
            }
            
            
        </Row>
        </div>
    
    )
}

export default HourlyInfo;