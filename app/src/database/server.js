import express from 'express';
import cors from 'cors';
import * as distinctQueries from './queries/distinctQueries.js';
import { Locations } from './queries/locationsDb.js';
import { Users } from './queries/usersDb.js';
import { Accidents } from './queries/accidentDb.js';
import { EmergencyServices } from './queries/emergencyServicesDb.js';
import { UserAccidents } from './queries/userAccidentsDb.js';

const app = express();
const port = 3001;

app.use(cors()); // Add this line to enable CORS
app.use(express.json());

// Haversine formula to calculate the distance between two points on the Earth
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Radius of the Earth in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in km
};

// API to fetch all query names
app.get('/api/query', (req, res) => {
  const queryNames = Object.keys(distinctQueries);
  res.json({ message: "Valid API's", queryNames });
  console.log(queryNames);
});

// Route to fetch all locations
app.get('/api/locations', async (req, res) => {
  try {
    const locations = getAllLocations();
    res.json(locations);
  } catch (err) {
    console.error('Error fetching locations:', err);
    res.status(500).send('Error fetching locations');
  }
});

// Route to create a new location
app.post('/api/create-location', async (req, res) => {
  const { street, intersection, latitude, longitude } = req.body;

  if (!street || !intersection || !latitude || !longitude) {
    return res.status(400).send('All fields are required');
  }

  try {
    createLocation(street, intersection, latitude, longitude);
    res.status(201).send('Location created');
  } catch (err) {
    console.error('Error creating location:', err);
    res.status(500).send('Error creating location');
  }
});

// Route to update a location by ID
app.put('/api/update-location/:id', async (req, res) => {
  const { id } = req.params;
  const { street, intersection, latitude, longitude } = req.body;

  if (!street || !intersection || !latitude || !longitude) {
    return res.status(400).send('All fields are required');
  }

  try {
    const location = getLocationById(id);
    if (!location) {
      return res.status(404).send('Location not found');
    }

    updateLocation(id, street, intersection, latitude, longitude);
    res.status(200).send('Location updated');
  } catch (err) {
    console.error('Error updating location:', err);
    res.status(500).send('Error updating location');
  }
});

// Route to get location by ID
app.get('/api/locations/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const location = getLocationById(id);
    if (!location) {
      return res.status(404).send('Location not found');
    }
    res.json(location);
  } catch (err) {
    console.error('Error fetching location:', err);
    res.status(500).send('Error fetching location');
  }
});

// Other routes to fetch data for users, accidents, emergency services, etc.
app.get('/api/users', async (req, res) => {
  try {
    const users = await new Users().getAllUsers();
    res.json(users);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).send('Error fetching users');
  }
});

app.get('/api/accidents', async (req, res) => {
  try {
    const accidents = await new Accidents().getAllAccidents();
    res.json(accidents);
  } catch (err) {
    console.error('Error fetching accidents:', err);
    res.status(500).send('Error fetching accidents');
  }
});

app.get('/api/emergency-services', async (req, res) => {
  try {
    const emergencyServices = await new EmergencyServices().getAllEmergencyServices();
    res.json(emergencyServices);
  } catch (err) {
    console.error('Error fetching emergency services:', err);
    res.status(500).send('Error fetching emergency services');
  }
});

app.get('/api/user-accidents', async (req, res) => {
  try {
    const userAccidents = await new UserAccidents().getAllUserAccidents();
    res.json(userAccidents);
  } catch (err) {
    console.error('Error fetching user accidents:', err);
    res.status(500).send('Error fetching user accidents');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
