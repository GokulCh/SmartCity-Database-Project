# my-ddl.sql

SET FOREIGN_KEY_CHECKS=0;
DROP TABLE IF EXISTS locations;
DROP TABLE IF EXISTS accidents;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS ermergencyservices;
DROP TABLE IF EXISTS useraccidents;
SET FOREIGN_KEY_CHECKS=1;

CREATE TABLE locations (
    id                  int NOT NULL,
    street              varchar(255) NOT NULL,
    intersection        varchar(255) NOT NULL,
    latitude            FLOAT NOT NULL,
    longitude           FLOAT NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO locations (id, street, intersection, latitude, longitude) VALUES
(1, 'Main St', 'Main St & 1st Ave', 40.712776, -74.005974),
(2, 'Elm St', 'Elm St & 2nd Ave', 34.052235, -118.243683),
(3, 'Broadway', 'Broadway & 3rd St', 41.878113, -87.629799),
(4, 'Pine St', 'Pine St & 4th Ave', 29.760427, -95.369804),
(5, 'Cedar St', 'Cedar St & 5th Ave', 39.739236, -104.990251),
(6, 'Oak St', 'Oak St & 6th Ave', 25.761680, -80.191790),
(7, 'Maple St', 'Maple St & 7th Ave', 37.774929, -122.419416),
(8, 'Ash St', 'Ash St & 8th Ave', 32.715736, -117.161087),
(9, 'Willow St', 'Willow St & 9th Ave', 36.169941, -115.139832),
(10, 'Birch St', 'Birch St & 10th Ave', 33.448376, -112.074036);

CREATE TABLE accidents (
    id                  INT NOT NULL,
    date_time           DATETIME NOT NULL,
    severity            VARCHAR(255) NOT NULL,
    description         VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (location_id) REFERENCES locations (id)
        ON delete cascade
        ON update cascade
);

INSERT INTO accidents (id, date_time, severity, description) VALUES
(1, '2024-12-01 14:30:00', 'Moderate', 'Rear-end collision at Main St'),
(2, '2024-12-02 08:15:00', 'Severe', 'Head-on collision at Elm St'),
(3, '2024-12-03 18:45:00', 'Minor', 'Bicycle accident at Broadway'),
(4, '2024-12-04 21:10:00', 'Moderate', 'Hit-and-run at Pine St'),
(5, '2024-12-05 07:50:00', 'Severe', 'Multiple car pile-up at Cedar St'),
(6, '2024-12-06 12:30:00', 'Minor', 'Pedestrian incident at Oak St'),
(7, '2024-12-07 16:20:00', 'Moderate', 'Truck collision at Maple St'),
(8, '2024-12-08 22:15:00', 'Severe', 'Motorcycle accident at Ash St'),
(9, '2024-12-09 09:40:00', 'Minor', 'Parking lot scrape at Willow St'),
(10, '2024-12-10 13:35:00', 'Severe', 'Bus accident at Birch St');


CREATE TABLE users (
    id                  INT NOT NULL,
    name                VARCHAR(255) NOT NULL,
    user_role           VARCHAR(255) NOT NULL,
    contact_info        VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO users (id, name, user_role, contact_info) VALUES
(1, 'John Doe', 'Driver', 'john.doe@example.com'),
(2, 'Jane Smith', 'City Official', 'jane.smith@example.com'),
(3, 'Mike Brown', 'Responder', 'mike.brown@example.com'),
(4, 'Sarah Lee', 'Driver', 'sarah.lee@example.com'),
(5, 'Anna White', 'Responder', 'anna.white@example.com'),
(6, 'Paul Green', 'City Official', 'paul.green@example.com'),
(7, 'Emma Black', 'Driver', 'emma.black@example.com'),
(8, 'James King', 'Responder', 'james.king@example.com'),
(9, 'Sophia Miller', 'City Official', 'sophia.miller@example.com'),
(10, 'Daniel Wilson', 'Driver', 'daniel.wilson@example.com');


CREATE TABLE ermergencyservices (
    id                  INT NOT NULL,
    service_type        VARCHAR(255) NOT NULL,
    response_time       INT NOT NULL,
    PRIMARY KEY (id)
    FOREIGN KEY (accident_id) REFERENCES accidents (id)
        ON delete cascade
        ON update cascade
);

INSERT INTO emergencyservices (id, service_type, response_time) VALUES
(1, 'Ambulance', 12),
(2, 'Police', 10),
(3, 'Fire Truck', 15),
(4, 'Ambulance', 8),
(5, 'Police', 20),
(6, 'Fire Truck', 18),
(7, 'Ambulance', 10),
(8, 'Police', 25),
(9, 'Fire Truck', 14),
(10, 'Ambulance', 9);


CREATE TABLE useraccidents (
    useraccidents_id   int NOT NULL,
    involvement_type    VARCHAR(255) NOT NULL,
    PRIMARY KEY (useraccidents_id),
    FOREIGN KEY (accident_id) REFERENCES accidents (id)
        ON delete cascade
        ON update cascade
    ,FOREIGN KEY (user_id) REFERENCES users (id)
        ON delete cascade
        ON update cascade
);

INSERT INTO user_accidents (user_accidents_id, involvement_type) VALUES
(1, 'Driver'),
(2, 'Witness'),
(3, 'Driver'),
(4, 'Reporter'),
(5, 'Witness'),
(6, 'Driver'),
(7, 'Reporter'),
(8, 'Driver'),
(9, 'Witness'),
(10, 'Reporter');