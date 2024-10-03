
function WeatherDisplay(props){

  const weatherData = props.data;
  console.log(weatherData);
  const country = weatherData.location.country;
  const city = weatherData.location.name;
  const celsiusTemp = weatherData.current.temp_c;
  const condition = weatherData.current.condition.text;
  const weatherIcon = weatherData.current.condition.icon;

  return(
    <div className="weather-display" id='weather-display'>
      <h2>Country: {country}</h2>
      <h3>City: {city}</h3>
      <p>Temp: {celsiusTemp} °C</p>
      <img src={weatherIcon}></img>
      <p>{condition}</p>
    </div>
  )
}

export default WeatherDisplay