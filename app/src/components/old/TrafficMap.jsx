import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polygon, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Custom icon for markers
const accidentIcon = new L.Icon({
  iconUrl: '/path/to/accident-icon.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const TrafficMap = () => {
  // State to manage map data
  const [accidents, setAccidents] = useState([]);
  const [trafficHotspots, setTrafficHotspots] = useState([]);
  const [route, setRoute] = useState(null);

  // Simulated data (in real app, this would come from your backend)
  useEffect(() => {
    // Mock data - replace with actual API calls
    setAccidents([
      {
        id: 1,
        position: [37.5407, -77.436],
        severity: 'high',
        description: 'Multi-vehicle collision',
      },
      {
        id: 2,
        position: [37.5497, -77.453],
        severity: 'medium',
        description: 'Fender bender',
      },
    ]);

    setTrafficHotspots([
      {
        coordinates: [
          [37.5407, -77.436],
          [37.5497, -77.453],
          [37.5547, -77.448],
        ],
        color: 'red',
        fillColor: 'red',
        fillOpacity: 0.3,
      },
    ]);
  }, []);

  // Function to generate route
  const generateRoute = (start, end) => {
    // In a real app, use routing service like OpenRouteService or Mapbox
    const simulatedRoute = [
      [37.5407, -77.436],
      [37.5497, -77.453],
      [37.5547, -77.458],
    ];
    setRoute(simulatedRoute);
  };

  // Color coding based on accident severity
  const getSeverityColor = severity => {
    switch (severity) {
      case 'high':
        return 'red';
      case 'medium':
        return 'orange';
      case 'low':
        return 'yellow';
      default:
        return 'green';
    }
  };

  return (
    <div className="w-full h-[600px]">
      <MapContainer center={[37.5407, -77.436]} zoom={12} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Render Accidents */}
        {accidents.map(accident => (
          <Marker key={accident.id} position={accident.position} icon={accidentIcon}>
            <Popup>
              <div>
                <h3>Accident Details</h3>
                <p>Severity: {accident.severity}</p>
                <p>{accident.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}

        {/* Render Traffic Hotspots */}
        {trafficHotspots.map((hotspot, index) => (
          <Polygon
            key={index}
            positions={hotspot.coordinates}
            color={hotspot.color}
            fillColor={hotspot.fillColor}
            fillOpacity={hotspot.fillOpacity}
          />
        ))}

        {/* Render Route */}
        {route && <Polyline positions={route} color="blue" weight={5} opacity={0.7} />}
      </MapContainer>

      {/* Optional Controls */}
      <div className="mt-4 flex space-x-2">
        <button onClick={() => generateRoute()} className="bg-blue-500 text-white px-4 py-2 rounded">
          Generate Route
        </button>
      </div>
    </div>
  );
};

export default TrafficMap;
