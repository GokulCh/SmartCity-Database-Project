import { db } from '../db.js';

class Locations {
  constructor() {
    this.table = 'Locations';
  }

  async createLocation(location) {
    try {
      const [results] = await db.query('INSERT INTO Locations SET ?', location);
      return results.insertId;
    } catch (err) {
      throw new Error('Error creating location: ' + err);
    }
  }

  async getAllLocations() {
    try {
      const [results] = await db.query('SELECT * FROM Locations');
      return results;
    } catch (err) {
      throw new Error('Error fetching locations: ' + err);
    }
  }

  async updateLocation(id, location) {
    try {
      const [results] = await db.query('UPDATE Locations SET ? WHERE id = ?', [location, id]);
      return results.affectedRows;
    } catch (err) {
      throw new Error('Error updating location: ' + err);
    }
  }

  async deleteLocation(id) {
    try {
      const [results] = await db.query('DELETE FROM Locations WHERE id = ?', id);
      return results.affectedRows;
    } catch (err) {
      throw new Error('Error deleting location: ' + err);
    }
  }
}

export { Locations };
