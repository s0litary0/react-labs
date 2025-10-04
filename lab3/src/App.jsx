import { useState } from 'react';
import './App.css'
import WheatherCard from './WheatherCard/WheatherCard';
import LoadButton from './LoadButton/LoadButton';

function App() {
  const [wheather, setWeather] = useState();
  
  const load = () => {
    const url = new URL("http://api.weatherapi.com/v1/forecast.json");
    url.searchParams.set('key', '2a2f3d3e4bdc46fe90e154817250410');
    url.searchParams.set('q', 'Almaty');
    url.searchParams.set('days', '14');

    fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      setWeather(data);
      console.log(data);
      // console.log(wheather);
    })
    .catch(err => console.log(err.message))
  }

  return (
    <>
      <LoadButton handler={load}/>
      <ul className='list'>
      {wheather && wheather.forecast.forecastday.map((day) => (
        <li key={day['date_epoch']}>
          <WheatherCard 
          date={new Date(day.date)} 
          temp={day.hour[11].temp_c} 
          condition={day.day.condition.text}/>
        </li>
      ))}
      </ul>
    </>
  )
}

export default App
