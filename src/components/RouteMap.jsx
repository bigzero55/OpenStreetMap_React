import { useEffect } from 'react';

import L from 'leaflet'; // Importa la librería Leaflet para trabajar con mapas interactivos.
import 'leaflet-routing-machine';  // Importa la extensión de Leaflet para enrutamiento.
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'; // Importa los estilos CSS para la extensión de enrutamiento.
import { useMap } from "react-leaflet"; // Importa la función useMap de la librería react-leaflet.
import 'leaflet-control-geocoder/dist/Control.Geocoder.css'; // Importa los estilos CSS del geocodificador.
import 'leaflet-control-geocoder/dist/Control.Geocoder.js'; // Importa la librería Leaflet-Geocoder.


const RouteMap = () => {

    const map = useMap(); // Obtiene el objeto de mapa actual utilizando useMap de react-leaflet.


    const markers = [
        { position: [19.058569415530922, -98.15194017609723], name: 'Universidad Tecnológica de Puebla' },
        { position: [19.0428904, -98.200904], name: 'Catedral de la Cd. de Puebla' },
        { position: [19.0966071, -98.2441535], name: 'Fuente de los Frailes' },
        { position: [19.05108, -98.17518], name: 'Fuerte de Loreto' },
        { position: [19.044151597930146, -98.19182940917058], name: 'Barrio del Artista' }
    ];
    
    useEffect(() => {

    if (!map) return;// Si el objeto de mapa aún no está disponible, no hagas nada y sale de la función.
    
    // Crea un control de enrutamiento con waypoints (puntos de inicio y destino).
    const routingControl = L.Routing.control({
      waypoints: [
            L.latLng(markers[0].position),
            L.latLng(markers[1].position)
        ],
        routeWhileDragging: true, // Permite la actualización de la ruta mientras se arrastra.
        language: 'es', // Establece el idioma del enrutamiento a español.
        lineOptions: {
            styles: [
                { color: 'red', opacity: 0.8, weight: 4 } // Establece el estilo de la línea de ruta.
            ]
        },
        geocoder: L.Control.Geocoder.nominatim() //configurando el geocodificador para que utilice el servicio Nominatim de OpenStreetMap para buscar direcciones y nombres de lugares.
    }).addTo(map); // Agrega el control de enrutamiento al mapa.
    
    // Se Define un manejador de eventos para cuando se encuentren rutas.
    routingControl.on('routesfound', (e) => {
        const routes = e.routes;
        console.log(routes);
        if (routes.length > 0) {
          const route = routes[0]; 
          const { totalDistance, totalTime } = route.summary;
          console.log(`Distancia: ${totalDistance} metros`);
          console.log(`Tiempo estimado: ${totalTime} segundos`);
        }
    });
        
    // Define una función de limpieza para eliminar el control de enrutamiento cuando el componente se desmonta.
    return () => map.removeControl(routingControl);
       
    }, [map])
   
    return null;
}

export default RouteMap
