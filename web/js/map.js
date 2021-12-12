const apiKey = 'pk.eyJ1IjoiYWxmcmVkMjAxNiIsImEiOiJja2RoMHkyd2wwdnZjMnJ0MTJwbnVmeng5In0.E4QbAFjiWLY8k3AFhDtErA';

const mymap = L.map('map').setView([49.838369489540945, 18.15669391739219], 13);

const weather = {};
const key = "82005d27a116c2880c8f0fcb866998a0";

weather.temperature = {
    unit : "celsius"
}
const KELVIN = 273;


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey
}).addTo(mymap);

function change(){
  var lat = document.getElementById("lat").value;
  var long = document.getElementById("long").value;
  mymap.setView([lat,long],13);
  L.circle([lat, long], {
      radius:500,
      color: 'green',
      fillColor: 'red',
      fillOpacity:0.2
  }).addTo(mymap).bindPopup('Area');
  getWeather(lat,long);
}

function getWeather(latitude, longitude){
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

    fetch(api)
        .then(function(response){
            let data = response.json();
            return data;
        })
        .then(function(data){
            weather.temperature.value = Math.floor(data.main.temp - KELVIN);
            weather.description = data.weather[0].description;
            weather.iconId = data.weather[0].icon;
            weather.city = data.name;
            weather.country = data.sys.country;
            var mark = L.marker([latitude,longitude]).addTo(mymap);
            let template = `
            <h3>${weather.city}, ${weather.country}</h3>
            <div style="text-align:center">
                <h6>Temperature: ${weather.temperature.value}</h6>
            </div>
            `
            mark.bindPopup(template);
        })
        .then(function(){
            displayWeather();
        });
}


// Adding a Marker for dormitories

const marker = L.marker([49.838369489540945, 18.15669391739219]).addTo(mymap);

// Add popup message
let template = `
<h3>VSB Dormitories</h3>
<div style="text-align:center">
    <img width="150" height="150"src="./images/image.png"/>
</div>
`
marker.bindPopup(template);

// Adding a circle for the dormitories

const circle = L.circle([49.838369489540945, 18.15669391739219], {
    radius:500,
    color: 'green',
    fillColor: 'red',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('Area')
