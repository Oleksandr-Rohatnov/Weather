


export function getCity(city) {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cef83cd5d4c97545246b047882ffad61&units=metric`)
          .then(response => response.json())
}
