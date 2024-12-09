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

app.get('/api/query/:name', async (req, res) => {
  const { name } = req.params;
  const queryFunction = distinctQueries[name];

  if (typeof queryFunction !== 'function') {
    return res.status(400).send('Invalid query name');
  }

  try {
    const results = await queryFunction();
    res.json(results);
  } catch (err) {
    console.error('Error executing query:', err);
    res.status(500).send('Error executing query');
  }
});

app.get('/api/query', (req, res) => {
  const queryNames = Object.keys(distinctQueries);
  res.json({ message: "Valid api's", queryNames });
  console.log(queryNames);
});

// New routes to view data for each entity
app.get('/api/locations', async (req, res) => {
  try {
    const locations = await new Locations().getAllLocations();
    res.json(locations);
  } catch (err) {
    console.error('Error fetching locations:', err);
    res.status(500).send('Error fetching locations');
  }
});

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

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
