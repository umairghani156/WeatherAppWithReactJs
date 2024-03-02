import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import "./weather.css"
import { useState } from 'react';
const TopBar = ({weatherData, setCityName}) => {
    const [currentDateVal, setCurrentDateVal] = useState()
    const currentDate = weatherData?.last_updated.slice(0,weatherData?.last_updated.indexOf(" "));
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
    const date = new Date(currentDate)
    const day = days[date.getDay()]
    const month = months[date.getMonth()]
    const getCurrentDate = date.getDate()
    const todayDate = `${day} ${getCurrentDate} ${month}`
    console.log("Date",day, month, getCurrentDate);
    

    return(
        <div className='searchBar'>
            <div className='appName'>
                <p>WEATHER APP</p>
            </div>
            <div className='weather-search-bar'>
            <div className='input-par'>
            <Input onChange={(e)=> setCityName(e.target.value)} style={{borderRadius:"20px", paddingLeft:"7px"}} size="large" placeholder="Enter City Name" prefix={<SearchOutlined style={{opacity:"0.5"}}/>} />
            </div>
            </div>
            <div className='cityName'>
                <h1>{weatherData?.name}, {weatherData?.country}</h1>
                <p>{todayDate}</p>
            </div>
        </div>
    )
}
export default TopBar;