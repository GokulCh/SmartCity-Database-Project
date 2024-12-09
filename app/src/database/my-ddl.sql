SCHEMA accident_reporting;
TABLE Locations { location_id INT AUTO_INCREMENT PRIMARY KEY;
street VARCHAR(255) NOT NULL;
intersection VARCHAR(255);
latitude DECIMAL(8, 6) CHECK (
    latitude BETWEEN -90 AND 90
);
longitude DECIMAL(9, 6) CHECK (
    longitude BETWEEN -180 AND 180
);
} TABLE Users { user_id INT AUTO_INCREMENT PRIMARY KEY;
name VARCHAR(255) NOT NULL;
user_role ENUM('driver', 'city_official', 'responder') NOT NULL;
contact_info VARCHAR(255) NOT NULL;
} TABLE Accidents { accident_id INT AUTO_INCREMENT PRIMARY KEY;
date_time DATETIME NOT NULL;
severity ENUM('minor', 'moderate', 'severe') NOT NULL;
description TEXT;
location_id INT REFERENCES Locations(location_id);
} TABLE EmergencyServices { service_id INT AUTO_INCREMENT PRIMARY KEY;
service_type ENUM('ambulance', 'police', 'fire_truck') NOT NULL;
response_time INT NOT NULL;
accident_id INT REFERENCES Accidents(accident_id);
} TABLE UserAccidents { user_id INT REFERENCES Users(user_id);
accident_id INT REFERENCES Accidents(accident_id);
involvement_type ENUM('witness', 'driver', 'reporter') NOT NULL;
PRIMARY KEY (user_id, accident_id);
} SEED Locations { COUNT 100;
street = RANDOM.STREET();
intersection = RANDOM.STREET_ADDRESS();
latitude = RANDOM.LATITUDE();
longitude = RANDOM.LONGITUDE();
} SEED Users { COUNT 200;
name = RANDOM.FULL_NAME();
user_role = RANDOM.PICK('driver', 'city_official', 'responder');
contact_info = RANDOM.PHONE_NUMBER();
} SEED Accidents { COUNT 300;
date_time = RANDOM.RECENT_DATE(365);
severity = RANDOM.PICK('minor', 'moderate', 'severe');
description = CUSTOM.DESCRIPTION(severity);
location_id = RANDOM.FOREIGN_KEY(Locations.location_id);
} SEED EmergencyServices { COUNT 200;
service_type = RANDOM.PICK('ambulance', 'police', 'fire_truck');
response_time = RANDOM.INT(5, 120);
accident_id = RANDOM.FOREIGN_KEY(Accidents.accident_id);
} SEED UserAccidents { COUNT 400;
user_id = RANDOM.FOREIGN_KEY(Users.user_id);
accident_id = RANDOM.FOREIGN_KEY(Accidents.accident_id);
involvement_type = RANDOM.PICK('witness', 'driver', 'reporter');
} CUSTOM FUNCTION DESCRIPTION(severity) { accidentTypes = [
        "rear-end collision", "side-swipe accident", "head-on collision", 
        "intersection collision", "single-vehicle accident", 
        "multi-vehicle pileup", "pedestrian involved accident"
    ];
causeFactors = [
        "driver distracted by mobile phone", "driver failed to yield right of way", 
        "driver ran a red light", "slippery road conditions", 
        "sudden lane change", "driver under the influence", 
        "vehicle mechanical failure", "poor visibility due to weather", 
        "driver fatigue"
    ];
severityDescriptors = { minor: ["minor damage to vehicles", "no serious injuries reported", "vehicles able to drive away"],
moderate: ["significant vehicle damage", "some injuries requiring medical attention", "traffic disruption"],
severe: ["extensive vehicle damage", "multiple serious injuries", "emergency services required", "potential road closure"] };
type = RANDOM.PICK(accidentTypes);
cause = RANDOM.PICK(causeFactors);
details = RANDOM.PICK(severityDescriptors [severity]);
RETURN CONCAT(
    UPPER(SUBSTRING(type, 1, 1)),
    LOWER(SUBSTRING(type, 2)),
    " occurred due to ",
    cause,
    ". ",
    details,
    "."
);
}