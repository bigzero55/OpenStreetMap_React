# OpenStreetMap

##### Recursos utlizados

- Libreria React Leaflet
- Nominatim

# Leaflet 

![](https://rosolutions.com.mx/blog/wp-content/uploads/2018/11/leafletjs-card.png)

**Leaflet** es una librería de JavaScript de código abierto para mapas interactivos que contiene varias funciones para generar un mapa y mostrar diferentes componentes, como el uso de marcadores.

# React Leaflet 

![](https://react-leaflet.js.org/img/logo-title.svg)

En nuestro caso utilizamos react-leaflet, ya que es una librería  existente para react, donde provee a React con componentes para Leaflet. 

####Intalación 

Desde CDN, se pueden importar mediante URL
```
import { MapContainer } from 'https://cdn.esm.sh/react-leaflet/MapContainer'
import { TileLayer } from 'https://cdn.esm.sh/react-leaflet/TileLayer'
import { useMap } from 'https://cdn.esm.sh/react-leaflet/hooks'
```

npm

Para agregar React Leaflet y sus dependencias  se utiliza: 

`npm install react react-dom leaflet`

`npm install react-leaflet`

Despues basta con importar todos los componentes. 
```
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
```
#### Configuración 

Despues de la instalación agregamos el siguiente código que nos muestra un funcionamiento correcto. 

```
<MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
````
#### Resultado

![](https://camo.qiitausercontent.com/466a3c9dd499f3fbf7e86f9f3676984876282afd/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f3237373233332f65333163343065342d663232362d373036382d373933372d3330393332643731336630362e706e67)

> Imagen de referencia al código anterior

# Nominatim 

Es una herrmaienta que nos da la posibilidad de buscar datos de OpenStreetMap por nombre y dirección (geocodificación).

# Referencias
[React-leaflet](https://react-leaflet.js.org/) :fa-leaf:

[Nominatim](https://nominatim.org/) :fa-globe:

