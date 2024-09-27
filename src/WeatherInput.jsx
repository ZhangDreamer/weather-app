import WeatherDisplay from './WeatherDisplay.jsx';
import {useState, useEffect} from 'react';
import fetchWeather from './backend/fetchWeather.js';

function WeatherInput(){

  const [query, setQuery] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {

    if(isSubmitted){
      fetchWeather(query).then((data) => {
        setWeatherData(data);
      });
    }

    return () => {
      setIsSubmitted(false);
      setWeatherData(null);
    };

  }, [isSubmitted])

  function handleInputChange(event){
    setQuery(event.target.value);
  }

  function submitQuery(){
    setIsSubmitted(true);
  }


  return(
    <div className="weather-container">
      {weatherData ? <WeatherDisplay data={weatherData} isSubmitted={isSubmitted}/> : null}
      <input type="text" placeholder="Enter a city..." value={query} onChange={handleInputChange}/>
      <button className="submit-button" onClick={submitQuery}>Submit</button>
    </div>
  )

}

export default WeatherInput