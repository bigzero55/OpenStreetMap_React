import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapNavigation = () => {

    const PositionPuebla = [19.0431, -98.1980]; //latitud y longitud del Estado de Puebla

    const markers = [
        { position: [19.0583869, -98.1545258], name: 'Universidad Tecnológica de Puebla' },
        { position: [19.0428904, -98.200904], name: 'Catedral de la Cd. de Puebla' },
        { position: [19.0966071, -98.2441535], name: 'Fuente de los Frailes' },
        { position: [19.05108, -98.17518], name: 'Fuerte de Loreto' },
    ];
    

  return (
    <div className=".map-container">
    <MapContainer center={PositionPuebla} zoom={13} style={{ height: '100vh', width: '100%' }} >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.position}>
            <Popup>
              {marker.name}
            </Popup>
          </Marker>
        ))}
    </MapContainer>
  </div>
  );
};

export default MapNavigation;
