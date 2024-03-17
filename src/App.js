import './App.css';
import Header from './components/Header';
import "./styles.css";
import "leaflet/dist/leaflet.css";
import {MapContainer, TileLayer} from 'react-leaflet';
import { useState } from 'react'

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleOnSubmit = async (e) => {
      e.preventDefault();
      let result = await fetch(
      'http://localhost:5000/register', {
          method: "post",
          body: JSON.stringify({ name, email }),
          headers: {
              'Content-Type': 'application/json'
          }
      })
      result = await result.json();
      console.warn(result);
      if (result) {
          alert("Data saved succesfully");
          setEmail("");
          setName("");
      }}
  return (
    <div className="App">
      <Header />
      <MapContainer center={[40.798214, -77.859909]} zoom={15}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright"
          OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    <MapContainer center={[40.798214, -77.859909]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright"
        OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      </MapContainer>
      <form action="">
                <input type="text" placeholder="name"
                value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="email"
                value={email} onChange={(e) => setEmail(e.target.value)} />
                <button type="submit"
                onClick={handleOnSubmit}>submit</button>
            </form>
  </div>
  );

}

