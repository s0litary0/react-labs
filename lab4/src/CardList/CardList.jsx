import { useState } from "react";
import "./CardList.css";
import WheatherCard from "../WheatherCard/WheatherCard";
import LoadButton from "../LoadButton/LoadButton";

export default function CardList() {
  const [wheather, setWeather] = useState();
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  }

  const handleClick = () => {
    setSearchValue('');
  }

  const load = () => {
    const url = new URL("http://api.weatherapi.com/v1/forecast.json");
    url.searchParams.set("key", "2a2f3d3e4bdc46fe90e154817250410");
    url.searchParams.set("q", "Almaty");
    url.searchParams.set("days", "14");

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setWeather(data);
        console.log(data);
        // console.log(wheather);
      })
      .catch((err) => console.log(err.message));
  };

  const filterdForecast = wheather?.forecast?.forecastday.filter((day) => {
    if (!searchValue) return true;
    return day.date.includes(searchValue);
  }) || [];

  return (
    <>
      <div className='search'>
        <input
          type="search"
          name="search_input"
          value={searchValue}
          onChange={handleChange}
          placeholder="Enter date"
        />
        <button className='clear-btn' onClick={handleClick}>Clear</button>  
      </div>
      <LoadButton handler={load} />
      <ul className="list">
        {filterdForecast.map((day) => (
            <li key={day["date_epoch"]}>
              <WheatherCard
                date={new Date(day.date)}
                temp={day.hour[11].temp_c}
                condition={day.day.condition.text}
                icon={day.day.condition.icon}
              />
            </li>
          ))}
      </ul>
    </>
  );
}
