import React,{Component} from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import L from 'leaflet';
import marker from 'leaflet';

class Defaultmap extends Component {
    constructor(props) {
        super(props);
        this.state ={
            lat : 28.63196,
            lng : 77.22054,
            zoom : 16
        }
    }
render() {
    var map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    var circle = L.circle([51.508, -0.11], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map);
    var polygon = L.polygon([
        [51.509, -0.08],
        [51.503, -0.06],
        [51.51, -0.047]
    ]).addTo(map);
    marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

    }
}
export default Defaultmap