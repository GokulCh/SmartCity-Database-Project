const { db } = require('../db');

class EmergencyServices {
  constructor() {
    this.table = 'Emergency_Services';
  }

  async createEmergencyService(emergencyService) {
    try {
      const [results] = await db.query('INSERT INTO Emergency_Services SET ?', emergencyService);
      return results.insertId;
    } catch (err) {
      throw new Error('Error creating emergency service: ' + err);
    }
  }

  async getAllEmergencyServices() {
    try {
      const [results] = await db.query('SELECT * FROM Emergency_Services');
      return results;
    } catch (err) {
      throw new Error('Error fetching emergency services: ' + err);
    }
  }

  async updateEmergencyService(id, emergencyService) {
    try {
      const [results] = await db.query('UPDATE Emergency_Services SET ? WHERE id = ?', [emergencyService, id]);
      return results.affectedRows;
    } catch (err) {
      throw new Error('Error updating emergency service: ' + err);
    }
  }

  async deleteEmergencyService(id) {
    try {
      const [results] = await db.query('DELETE FROM Emergency_Services WHERE id = ?', id);
      return results.affectedRows;
    } catch (err) {
      throw new Error('Error deleting emergency service: ' + err);
    }
  }
}

export { EmergencyServices };
