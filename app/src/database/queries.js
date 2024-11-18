import { db } from "./db.js";

const getAllAccidents = async () => {
  try {
    const [results] = await db.query("SELECT * FROM Accidents");
    return results;
  } catch (err) {
    throw new Error("Error fetching accidents: " + err);
  }
};

const getAllUsers = async () => {
  try {
    const [results] = await db.query("SELECT * FROM Users");
    return results;
  } catch (err) {
    throw new Error("Error fetching users: " + err);
  }
};

const getAllLocations = async () => {
  try {
    const [results] = await db.query("SELECT * FROM Locations");
    return results;
  } catch (err) {
    throw new Error("Error fetching locations: " + err);
  }
};

const getAllEmergencyServices = async () => {
  try {
    const [results] = await db.query("SELECT * FROM Emergency_Services");
    return results;
  } catch (err) {
    throw new Error("Error fetching emergency services: " + err);
  }
};

const getAllUserAccidents = async () => {
  try {
    const [results] = await db.query("SELECT * FROM User_Accidents");
    return results;
  } catch (err) {
    throw new Error("Error fetching user accidents: " + err);
  }
};

export {
  getAllAccidents,
  getAllUsers,
  getAllLocations,
  getAllEmergencyServices,
  getAllUserAccidents,
};
