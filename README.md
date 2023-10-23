# OpenStreetMap

##### Apa Itu?

Ini adalah proyek internasional untuk membuat peta dunia gratis. Ini bisa didefinisikan sebagai:

- Peta web gratis.
- Peta dunia gratis yang dibuat oleh komunitas.
- Koleksi alat sumber terbuka untuk memetakan dunia.

Ini adalah peta dunia yang dapat diedit dan gratis yang sedang disusun oleh sukarelawan dan dipublikasikan dengan lisensi konten terbuka.

### Dokumentasi OSM

[OpenStreetMap](https://wiki.openstreetmap.org/)

##### Sumber Daya yang Digunakan

- Pustaka React Leaflet
- Nominatim

# Leaflet

![](https://rosolutions.com.mx/blog/wp-content/uploads/2018/11/leafletjs-card.png)

**Leaflet** adalah perpustakaan JavaScript sumber terbuka untuk peta interaktif yang berisi berbagai fitur untuk membuat peta dan menampilkan berbagai komponen, seperti penggunaan penanda.

# React Leaflet

![](https://react-leaflet.js.org/img/logo-title.svg)

Dalam kasus kami, kami menggunakan react-leaflet, karena ini adalah perpustakaan yang ada untuk react, yang menyediakan komponen-komponen Leaflet untuk React.

Perpustakaan ini bekerja dengan versi-versi berikut:

- "leaflet": "^1.9.3"
- "react": "^18.2.0"

#### Instalasi

Dari CDN, mereka dapat diimpor melalui URL

```
import { MapContainer } from 'https://cdn.esm.sh/react-leaflet/MapContainer'
import { TileLayer } from 'https://cdn.esm.sh/react-leaflet/TileLayer'
import { useMap } from 'https://cdn.esm.sh/react-leaflet/hooks'
```

npm

Untuk menambahkan React Leaflet dan dependensinya, Anda dapat menggunakan:

`npm install react react-dom leaflet`

`npm install react-leaflet`

Setelah itu, cukup impor semua komponen.

```
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
```

#### Konfigurasi

Setelah instalasi, tambahkan kode berikut untuk menunjukkan fungsi yang benar.

```
<MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> kontributor'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      Pop-up CSS3 yang menarik. <br /> Mudah disesuaikan.
    </Popup>
  </Marker>
</MapContainer>
```

#### Hasil

![](https://camo.qiitausercontent.com/466a3c9dd499f3fbf7e86f9f3676984876282afd/68747470733a2f2f71696974612d696d6167652d73746f72652e73332.61702d6e6f727468656173742d312.616d617a6f6e6177732e636f6d2f302f3237373233332f65333163343065342-663232362d373036382d373933372d333039333264373133663036.706e67)

> Gambar referensi untuk kode di atas

# Nominatim

Ini adalah alat yang memungkinkan kita mencari data OpenStreetMap berdasarkan nama dan alamat (geokode).

# Trazado de rutas

Untuk pelacakan rute, kami menggunakan perpustakaan Leaflet tertentu.

## Leaflet Routing Machine

![](https://user-images.githubusercontent.com/7645519/47955002-1a24bf00-dfc4-11e8-9ce5-1435d69137a2.png)

Ini adalah ekstensi untuk Leaflet, perpustakaan sumber terbuka untuk peta interaktif dalam JavaScript. Ekstensi ini menambahkan fungsi perutean dan arah ke peta Leaflet Anda, memungkinkan Anda menghitung dan menampilkan rute antara lokasi berbeda di peta. Leaflet Routing Machine umumnya digunakan untuk membuat aplikasi peta web yang mencakup fitur navigasi dan perutean.

Ini menawarkan beberapa fitur berikut:

- Perutean dari titik awal ke titik tujuan, dengan kemungkinan titik perantara.
- Menambahkan, Mengedit, dan Menghapus titik-titik referensi dengan memasukkan alamat dan menggunakan peta.
- Mendukung beberapa bahasa
- Dapat disesuaikan dengan baik

## Instalasi

Tambahkan yang berikut

```
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.2.0/dist/leaflet.css" />
<link rel="stylesheet" href="https://unpkg.com/leaflet-routing-machine@latest/dist/leaflet-routing-machine.css" />
<script src="https://unpkg.com/leaflet@1.2.0/dist/leaflet.js"></script>
<script src="https://unpkg.com/leaflet-routing-machine@latest/dist/leaflet-routing-machine.js"></script>
```

Anda juga dapat menginstalnya menggunakan npm, hanya dengan menambahkan:

`npm install --save leaflet-routing-machine`
Dan akhirnya, impor ke dalam proyek Anda:

```
import 'leaflet-routing-machine';  // Mengimpor ekstensi Leaflet untuk perutean.
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'; // Mengimpor gaya CSS untuk ekstensi perutean.
```

## Leaflet-control-geocoder

Ini adalah ekstensi untuk Leaflet, perpustakaan peta interaktif dalam JavaScript, yang menyediakan cara mudah untuk menambahkan kontrol pencarian dan geokoding ke peta Leaflet Anda. Ekstensi ini berguna ketika Anda ingin memungkinkan pengguna mencari lokasi, memasukkan alamat atau nama tempat, dan mengonversinya ke koordinat geograf

is dalam aplikasi Anda.

![](https://www.drupal.org/files/issues/2019-09-11/address_search_input_and_geocode_control.jpg)

## Instalasi

Untuk menginstalnya dengan npm:

```
npm install leaflet-control-geocoder

```

Kemudian, impor tambahan ke proyek Anda.

```
import 'leaflet-control-geocoder/dist/Control.Geocoder.css'; // Mengimpor gaya CSS untuk geokoder.
import 'leaflet-control-geocoder/dist/Control.Geocoder.js'; // Mengimpor perpustakaan Leaflet-Geocoder.
```

# Contoh Trazado

Dengan menambahkan semua yang telah ditunjukkan di atas, pelacakan rute harus terlihat mirip dengan ini:

![](https://i.stack.imgur.com/iec9g.jpg)

# React Router

![](https://blog.karenying.com/static/b17f2b049068979741a79588250ad8cb/nav-bar-with-dot.png)

React Router adalah perpustakaan untuk React yang memudahkan navigasi antara halaman dalam aplikasi satu halaman.

## Instalasi

Ini akan diinstal melalui npm dengan perintah berikut.

`npm install react-router-dom`
Dan akhirnya, impor ke dalam proyek Anda:

```
import {BrowserRouter} from 'react-router-dom' // Komponen untuk mengelola navigasi aplikasi.
import {Routes, Route} from 'react-router-dom' // Definisi rute.
import {Link} from 'react-router-dom' // Digunakan untuk membuat tautan untuk navigasi dalam aplikasi.
```

# Referensi

[React-leaflet](https://react-leaflet.js.org/) :fa-leaf:

[Nominatim](https://nominatim.org/) :fa-globe:

[Wiki Openstreetmap](https://wiki.openstreetmap.org/) :fa-globe:

[Leaflet Routing Machine](https://www.liedman.net/leaflet-routing-machine/#about)

[React Router](https://reactrouter.com/en/main)
