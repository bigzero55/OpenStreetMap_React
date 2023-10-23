import { useEffect } from "react";

import L from "leaflet"; // Impor pustaka Leaflet untuk bekerja dengan peta interaktif.
import "leaflet-routing-machine"; // Impor ekstensi Leaflet untuk rute.
import "leaflet-routing-machine/dist/leaflet-routing-machine.css"; // Impor gaya CSS untuk ekstensi rute.
import { useMap } from "react-leaflet"; // Impor fungsi useMap dari pustaka react-leaflet.
import "leaflet-control-geocoder/dist/Control.Geocoder.css"; // Impor gaya CSS geocoder.
import "leaflet-control-geocoder/dist/Control.Geocoder.js"; // Impor pustaka Leaflet-Geocoder.

const RouteMap = () => {
  const map = useMap(); // Dapatkan objek peta saat ini menggunakan useMap dari react-leaflet.

  const markers = [
    {
      position: [19.058569415530922, -98.15194017609723],
      name: "Universitas Teknologi Puebla",
    },
    { position: [19.0428904, -98.200904], name: "Katedral Kota Puebla" },
    { position: [19.0966071, -98.2441535], name: "Taman Frailes" },
    { position: [19.05108, -98.17518], name: "Ku Fort Loreto" },
    {
      position: [19.044151597930146, -98.19182940917058],
      name: "Barrio del Artista",
    },
  ];

  useEffect(() => {
    if (!map) return; // Jika objek peta belum tersedia, jangan lakukan apa-apa dan keluar dari fungsi.

    // Buat kontrol rute dengan titik awal dan tujuan.
    const routingControl = L.Routing.control({
      waypoints: [L.latLng(markers[0].position), L.latLng(markers[1].position)],
      routeWhileDragging: true, // Izinkan pembaruan rute saat digeser.
      language: "es", // Setel bahasa rute ke bahasa Spanyol.
      lineOptions: {
        styles: [
          { color: "red", opacity: 0.8, weight: 4 }, // Tetapkan gaya garis rute.
        ],
      },
      geocoder: L.Control.Geocoder.nominatim(), // Mengkonfigurasi geocoder untuk menggunakan layanan Nominatim dari OpenStreetMap untuk mencari alamat dan nama tempat.
    }).addTo(map); // Tambahkan kontrol rute ke peta.

    // Tentukan penangan acara ketika rute ditemukan.
    routingControl.on("routesfound", (e) => {
      const routes = e.routes;
      console.log(routes);
      if (routes.length > 0) {
        const route = routes[0];
        const { totalDistance, totalTime } = route.summary;
        console.log(`Jarak: ${totalDistance} meter`);
        console.log(`Estimasi waktu: ${totalTime} detik`);
      }
    });

    // Tentukan fungsi pembersihan untuk menghapus kontrol rute ketika komponen di-unmount.
    return () => map.removeControl(routingControl);
  }, [map]);

  return null;
};

export default RouteMap;
