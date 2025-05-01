# Smart City Database Project

## Project Overview

This project aims to improve road safety in urban environments by including accident information in its database. The database will log accidents, including their severity and location. This information will be beneficial to city planners, allowing them to identify high-risk areas and take appropriate measures to enhance safety on those roads. The project also aims to warn drivers of potentially dangerous routes to ensure their safety by providing real-time accident information.

## Deliverables

- [Pitch Video (Deliverable 5)](https://vcu.mediaspace.kaltura.com/media/Deliverable+5+-+Database+Project/1_s76hanm0)
- [Project Deliverable 8](https://github.com/cmsc-vcu/cmsc408-fa2024-proj-blue/tree/main/reports/deliverable_8)
- [Project Deliverable 12](https://github.com/cmsc-vcu/cmsc408-fa2024-proj-blue/tree/main/reports/deliverable_12)

[![Watch the video](https://img.youtube.com/vi/p8UdX2hZVeI/maxresdefault.jpg)](https://www.youtube.com/watch?v=p8UdX2hZVeI)

## Folder Structure

- `.conda/`: Contains configuration files for the Conda environment.
- `.vscode/`: Contains Visual Studio Code settings.
- `app/`: Contains the main application source code.
  - `src/`: Source files for the project.
    - `components/`: React components used in the application.
      - `HomePage/`: Components for the home page.
      - `ManagerPage/`: Components for the manager page.
      - `QueriesPage/`: Components for the queries page.
      - `TrafficMapPage/`: Components for the traffic map page.
    - `database/`: Database-related files and queries.
      - `queries/`: Contains query files for different database operations.
      - `.env`: Environment variables for the database connection.
    - `pages/`: Main pages of the application.
    - `assets/`: Static assets like images and icons.
  - `index.css`: Global CSS styles.
  - `main.jsx`: Entry point for the React application.
  - `App.jsx`: Main application component.
  - `vite.config.js`: Vite configuration file.
  - `tailwind.config.js`: Tailwind CSS configuration file.
- `reports/`: Contains all the deliverable reports.
  - `deliverable_8/`: Contains files related to Project Deliverable 8.
    - `deliver-08.qmd`: The main report file for Deliverable 8.
    - `deliver-08.css`: CSS file for styling the HTML output.
    - `deliver-08.html`: HTML output generated from `deliver-08.qmd`.
  - `deliverable_12/`: Placeholder for the report for Project Deliverable 12.
- `README.md`: This file.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

   ```sh
   git clone https://github.com/cmsc-vcu/cmsc408-fa2024-proj-blue.git
   cd cmsc408-fa2024-proj-blue
   ```

2. **Install the dependencies:**

   ```sh
   cd app
   npm install
   ```

3. **Set up the database:**

   - Ensure you have MySQL installed and running.
   - Create a .env file in the app/src/database/ directory with the following content:

   ```sh
   DB_HOST=your_database_host
   DB_USER=your_database_user
   DB_PASS=your_database_password
   DB_NAME=your_database_name
   ```

## Running the Application

To run the application, follow these steps:

1. **Start the React development server:**

   ```sh
   cd app
   npm run dev
   ```

2. **Open the application in your browser:**

   Navigate to [http://localhost:5173](http://localhost:5173) to view the frontend application.
   Navigate to [http://localhost:3001](http://localhost:3001/) to view the backend application.
