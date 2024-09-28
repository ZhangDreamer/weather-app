
function WeatherDisplay(props){

  const weatherData = props.data;
  const country = weatherData.location.country;
  const city = weatherData.location.name;
  const celsiusTemp = weatherData.current.temp_c;
  const weatherIcon = weatherData.current.condition.icon;

  return(
    <div className="weather-display" id='weather-display'>
      <h2>Country: {country}</h2>
      <h3>City: {city}</h3>
      <p>Temp: {celsiusTemp} °C</p>
      <img src={weatherIcon}></img>
    </div>
  )
}

export default WeatherDisplay