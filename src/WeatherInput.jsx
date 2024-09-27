import WeatherDisplay from './WeatherDisplay.jsx';
import {useState, useEffect} from 'react';

function WeatherInput(){

  const [query, setQuery] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {

    if(isSubmitted){
      const promise = fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${query}`).then((res) => {
        if(res.ok){
          console.log('Success');
          return res.json();
        } else{
          console.log("Not successful");
        }
      }).then((data) => {
        console.log(data);
        setWeatherData(data);
      }).catch(error => console.log(error));
    
    }

  }, [isSubmitted])

  function handleInputChange(event){
    setQuery(event.target.value);
  }

  function submitQuery(){
    setIsSubmitted(true);
  }


  return(
    <div className="weather-container">
      {isSubmitted ? <WeatherDisplay data={weatherData} isSubmitted={isSubmitted}/> : null}
      <input type="text" placeholder="Enter a city..." value={query} onChange={handleInputChange}/>
      <button className="submit-button" onClick={submitQuery}>Submit</button>
    </div>
  )

}

export default WeatherInput