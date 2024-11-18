const db = require('./db');

const getAllAccidents = (db) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM Accidents', (err, results) => {
      if (err) {
        return reject('Error fetching accidents: ' + err);
      }
      resolve(results);
    });
  });
};

const getAllUsers = (db) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM Users', (err, results) => {
      if (err) {
        return reject('Error fetching users: ' + err);
      }
      resolve(results);
    });
  });
};

const getAllLocations = (db) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM Locations', (err, results) => {
      if (err) {
        return reject('Error fetching locations: ' + err);
      }
      resolve(results);
    });
  });
};

const getAllEmergencyServices = (db) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM Emergency_Services', (err, results) => {
      if (err) {
        return reject('Error fetching emergency services: ' + err);
      }
      resolve(results);
    });
  });
};

const getAllUserAccidents = (db) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM User_Accidents', (err, results) => {
      if (err) {
        return reject('Error fetching user accidents: ' + err);
      }
      resolve(results);
    });
  });
};

module.exports = {
  getAllAccidents,
  getAllUsers,
  getAllLocations,
  getAllEmergencyServices,
  getAllUserAccidents,
};
