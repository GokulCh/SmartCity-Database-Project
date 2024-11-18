import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { db } from "./db.js";
import * as queries from "./queries.js";

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Route to get all accidents
app.get("/api/accidents", async (req, res) => {
  try {
    const results = await queries.getAllAccidents(db);
    res.json(results);
  } catch (err) {
    console.error("Error fetching accidents:", err);
    res.status(500).send("Error fetching accidents");
  }
});

// Route to get all users
app.get("/api/users", async (req, res) => {
  try {
    const results = await queries.getAllUsers(db);
    res.json(results);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).send("Error fetching users");
  }
});

// Route to get all locations
app.get("/api/locations", async (req, res) => {
  try {
    const results = await queries.getAllLocations(db);
    res.json(results);
  } catch (err) {
    console.error("Error fetching locations:", err);
    res.status(500).send("Error fetching locations");
  }
});

// Route to get all emergency services
app.get("/api/emergency_services", async (req, res) => {
  try {
    const results = await queries.getAllEmergencyServices(db);
    res.json(results);
  } catch (err) {
    console.error("Error fetching emergency services:", err);
    res.status(500).send("Error fetching emergency services");
  }
});

// Route to get all user accidents
app.get("/api/user_accidents", async (req, res) => {
  try {
    const results = await queries.getAllUserAccidents(db);
    res.json(results);
  } catch (err) {
    console.error("Error fetching user accidents:", err);
    res.status(500).send("Error fetching user accidents");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
