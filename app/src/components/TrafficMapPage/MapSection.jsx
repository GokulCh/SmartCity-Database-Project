import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';

const MapSection = ({ location }) => {
  // Set default location if no location is provided
  const [coordinates, setCoordinates] = useState(location || { lat: 37.54129, lng: -77.434769 });
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (location) {
      setCoordinates(location);
    }
  }, [location]);

  // Create the search control when the map is loaded
  const handleMapLoad = map => {
    const provider = new OpenStreetMapProvider();
    const geoSearchControl = GeoSearchControl({
      provider,
      style: 'bar', // Optional style: 'bar', 'button', or 'input'
      showMarker: true,
      animateZoom: true,
      resultFormat: ({ result }) => {
        const { x, y } = result; // Get coordinates from the result
        setCoordinates({ lat: y, lng: x });
      },
    });

    map.addControl(geoSearchControl);
  };

  // Handle the search bar input change
  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
  };

  // Optionally handle form submission or use search logic to update the map location
  const handleSearchSubmit = async event => {
    event.preventDefault();
    if (searchQuery) {
      const provider = new OpenStreetMapProvider();
      const results = await provider.search(searchQuery);

      if (results.length > 0) {
        const { x, y } = results[0]; // Get the coordinates from the search result
        setCoordinates({ lat: y, lng: x });
      } else {
        alert('Location not found');
      }
    }
  };

  return (
    <section className="map-section">
      {/* Search Bar */}
      <div className="search-bar">
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search location..."
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
        </form>
      </div>

      {/* Map Container */}
      <MapContainer
        center={coordinates}
        zoom={13}
        style={{
          width: '80%', // Limit map width to 80% of the container width
          height: '400px',
          borderRadius: '15px', // Rounded corners
          overflow: 'hidden', // Ensures the map fits within the rounded corners
          background: 'transparent', // Make sure the background is transparent
          margin: '0', // Ensure no margin
        }}
        whenCreated={handleMapLoad} // Load the search control when the map is created
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={coordinates}>
          <Popup>
            <span>
              Location: {coordinates.lat}, {coordinates.lng}
            </span>
          </Popup>
        </Marker>
      </MapContainer>
    </section>
  );
};

export default MapSection;
