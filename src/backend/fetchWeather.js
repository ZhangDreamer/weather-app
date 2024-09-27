
function fetchWeather(query){

  const key = import.meta.env.VITE_APP_WEATHER_API_KEY;

  const promise = fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${query}`).then((res) => {
    if(res.ok){
      console.log('Success');
      return res.json();
    } else{
      console.log("Not successful");
      alert('Invalid Request');
    }
  }).catch(error => console.log(error));

  return promise
}

export default fetchWeather