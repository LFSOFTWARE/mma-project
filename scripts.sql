-- Table Event
CREATE TABLE Event (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    date TIMESTAMP NOT NULL
);

-- Table Fighter
CREATE TABLE Fighter (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    weight_class VARCHAR(50) NOT NULL,
    nationality VARCHAR(100) NOT NULL,
    team VARCHAR(100) NOT NULL
);

-- Table Fight
CREATE TABLE Fight (
    id SERIAL PRIMARY KEY,
    event_id INT REFERENCES Event(id),
    fighterA_id INT REFERENCES Fighter(id),
    fighterB_id INT REFERENCES Fighter(id),
    resultado VARCHAR(50) NOT NULL
);

-- Table Statistics
CREATE TABLE Statistics (
    id SERIAL PRIMARY KEY,
    fighter_id INT REFERENCES Fighter(id),
    wins INT NOT NULL,
    losses INT NOT NULL,
    knockouts INT NOT NULL,
    submissions INT NOT NULL
);

-- Table Ranking
CREATE TABLE Ranking (
    id SERIAL PRIMARY KEY,
    fighter_id INT REFERENCES Fighter(id),
    weight_class VARCHAR(50) NOT NULL,
    posicao INT NOT NULL
);
