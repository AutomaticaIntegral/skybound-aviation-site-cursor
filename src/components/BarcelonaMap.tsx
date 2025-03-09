
import React, { useEffect, useRef } from 'react';
import mapboxgl, { LngLatLike } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Coordenadas del Aeropuerto de Barcelona El Prat
const BARCELONA_AIRPORT_COORDINATES: LngLatLike = [2.0785, 41.2974];

const BarcelonaMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;
    
    try {
      // Usando Mapbox con estilo libre OSM
      mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: BARCELONA_AIRPORT_COORDINATES,
        zoom: 13,
      });
      
      // Añadir controles de navegación
      map.current.addControl(
        new mapboxgl.NavigationControl(),
        'top-right'
      );
      
      // Añadir un marcador en el Aeropuerto de Barcelona
      new mapboxgl.Marker({ color: '#1EAEDB' })
        .setLngLat(BARCELONA_AIRPORT_COORDINATES)
        .setPopup(
          new mapboxgl.Popup().setHTML(
            "<h3>Aeropuerto de Barcelona-El Prat</h3><p>08820 El Prat de Llobregat, Barcelona</p>"
          )
        )
        .addTo(map.current);
    } catch (error) {
      console.error('Error initializing map:', error);
    }
    
    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, []);

  return (
    <div className="rounded-lg overflow-hidden h-[200px] shadow-lg">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};

export default BarcelonaMap;
