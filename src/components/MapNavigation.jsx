import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";

function LocationMarker() {

  const [position, setPosition] = useState(null)
  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

const MapNavigation = () => {
  const PositionMengger = [-6.968326823991348, 107.62729336882325]; // Garis lintang dan bujur Negara Bagian Mengger

  const markers = [
    { position: [-6.967708914879933, 107.62773543893485], name: "Real Kost" },
    {
      position: [-6.968649211031864, 107.62717608491147],
      name: "Pondok Izzati",
    },
    {
      position: [-6.968550703904539, 107.62852936076335],
      name: "OYO Socialite",
    },
    {
      position: [-6.968613390259261, 107.6263641193572],
      name: "warung pak agus",
    },
    { position: [-6.9672253332680665, 107.62705880096115], name: "Gelewo" },
  ];



  return (
    <div className=".map-container">
      <MapContainer
        center={PositionMengger}
        zoom={16}
        style={{ height: "92vh", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> kontributor'
        />
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.position}>
            <Popup>{marker.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapNavigation;
