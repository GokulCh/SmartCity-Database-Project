import { db } from '../db.js';

const table = 'Locations';

const createLocation = async location => {
  try {
    const [results] = await db.query('INSERT INTO Locations SET ?', location);
    return results.insertId;
  } catch (err) {
    throw new Error('Error creating location: ' + err);
  }
};

const getAllLocations = async () => {
  try {
    const [results] = await db.query('SELECT * FROM Locations');
    return results;
  } catch (err) {
    throw new Error('Error fetching locations: ' + err);
  }
};

const getLocationById = async id => {
  try {
    console.log('Fetching location for ID:', id); // Debug log
    const [results] = await db.query('SELECT * FROM Locations WHERE location_id = ?', [id]);
    console.log('Results from DB:', results); // Debug log
    return results[0]; // Assuming results are an array and you're returning the first match
  } catch (err) {
    throw new Error('Error fetching location: ' + err);
  }
};

const updateLocation = async (id, location) => {
  try {
    const [results] = await db.query('UPDATE Locations SET ? WHERE location_id = ?', [location, id]);
    return results.affectedRows;
  } catch (err) {
    throw new Error('Error updating location: ' + err);
  }
};

const deleteLocation = async id => {
  try {
    const [results] = await db.query('DELETE FROM Locations WHERE location_id = ?', [id]);
    return results.affectedRows;
  } catch (err) {
    throw new Error('Error deleting location: ' + err);
  }
};

export { createLocation, getAllLocations, getLocationById, updateLocation, deleteLocation };
