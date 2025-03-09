
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Coordenadas de Barcelona
const BARCELONA_COORDINATES = [2.1734, 41.3851];

const BarcelonaMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const [showTokenInput, setShowTokenInput] = useState<boolean>(true);

  const initializeMap = (token: string) => {
    if (!mapContainer.current) return;
    
    try {
      mapboxgl.accessToken = token;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: BARCELONA_COORDINATES,
        zoom: 12,
      });
      
      // Añadir controles de navegación
      map.current.addControl(
        new mapboxgl.NavigationControl(),
        'top-right'
      );
      
      // Añadir un marcador en Barcelona
      new mapboxgl.Marker({ color: '#1EAEDB' })
        .setLngLat(BARCELONA_COORDINATES)
        .setPopup(new mapboxgl.Popup().setHTML("<h3>Olmo Aviation</h3><p>123 Aviation St, Barcelona</p>"))
        .addTo(map.current);
        
      // Guardar el token en localStorage para futuras visitas
      localStorage.setItem('mapboxToken', token);
      setShowTokenInput(false);
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  };

  useEffect(() => {
    // Intentar obtener token del localStorage
    const savedToken = localStorage.getItem('mapboxToken');
    if (savedToken) {
      setMapboxToken(savedToken);
      initializeMap(savedToken);
      setShowTokenInput(false);
    }
    
    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, []);

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken) {
      initializeMap(mapboxToken);
    }
  };

  if (showTokenInput) {
    return (
      <div className="rounded-lg overflow-hidden h-[200px] bg-gray-100 flex flex-col items-center justify-center p-4">
        <p className="text-sm text-charcoal mb-2 text-center">Para ver el mapa, introduce tu token público de Mapbox:</p>
        <form onSubmit={handleTokenSubmit} className="flex w-full max-w-md">
          <input
            type="text"
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
            placeholder="pk.eyJ1Ijoie3VzZXJuYW1lfSIsImEiOi..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-skyblue text-sm"
          />
          <button 
            type="submit" 
            className="bg-skyblue text-white px-3 py-2 rounded-r-md hover:bg-skyblue-dark"
          >
            Cargar Mapa
          </button>
        </form>
        <p className="text-xs text-gray-500 mt-2 text-center">Puedes obtener tu token público en <a href="https://account.mapbox.com/access-tokens/" target="_blank" rel="noopener noreferrer" className="text-skyblue hover:underline">mapbox.com</a></p>
      </div>
    );
  }

  return (
    <div className="rounded-lg overflow-hidden h-[200px] shadow-lg">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};

export default BarcelonaMap;
