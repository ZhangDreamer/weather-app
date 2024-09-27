import WeatherDisplay from './WeatherDisplay.jsx';
import {useState} from 'react';

function WeatherInput(){

  const [query, setQuery] = useState('');

  function handleInputChange(event){
    setQuery(event.target.value);
  }

  function submitQuery(){
    
  }


  return(
    <div className="weather-container">
      <WeatherDisplay q={query}/>
      <input type="text" placeholder="Enter a city..." value={query} onChange={handleInputChange}/>
      <button className="submit-button" onClick={submitQuery}>Submit</button>
    </div>
  )

}

export default WeatherInput