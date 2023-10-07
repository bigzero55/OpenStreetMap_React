import { MapContainer, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import RouteMap from "./RouteMap";

const MapNavigationRoutes = () => {

    const PositionPuebla = [19.0431, -98.1980]; //latitud y longitud del Estado de Puebla

  return (
    <div className=".map-container">
    <MapContainer center={PositionPuebla} zoom={13} style={{ height: '100vh', width: '100%' }} >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <RouteMap/>
    </MapContainer>
  </div>
  )
}

export default MapNavigationRoutes
