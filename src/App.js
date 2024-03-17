import "./App.css";
import Header from "./components/Header";
import "./styles.css";
import MapsBasic from "./components/basicmap";

import "leaflet/dist/leaflet.css";
import {MapContainer, TileLayer} from 'react-leaflet';
import { useState } from 'react'

export default function App() {
  return (
    <div className="App">
      <Header />
    <MapContainer center={[40.798214, -77.859909]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright"
        OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      </MapContainer>
  
  </div>
  );

}
