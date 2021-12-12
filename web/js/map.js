const apiKey = 'pk.eyJ1IjoiYWxmcmVkMjAxNiIsImEiOiJja2RoMHkyd2wwdnZjMnJ0MTJwbnVmeng5In0.E4QbAFjiWLY8k3AFhDtErA';

const mymap = L.map('map').setView([49.838369489540945, 18.15669391739219], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey
}).addTo(mymap);

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
