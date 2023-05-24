CREATE TABLE IF NOT EXISTS countries (
    country_id SERIAL PRIMARY KEY,
    country_name VARCHAR(100) NOT NULL
);

INSERT INTO countries (country_name) VALUES 
('Reunion'),
('Mauritius'),
('France')
;

	CREATE TABLE IF NOT EXISTS actors (
	id SERIAL PRIMARY KEY,
	fName VARCHAR(100) NOT NULL,
	lName VARCHAR(100) NOT NULL,
	age DATE NOT NULL,
	numberoscars FLOAT
);
INSERT INTO actors (fName, lName, birthdate , numberoscars) VALUES
('Angelina','Jolie','01/02/1990',5),
('George','Clooney','07/05/1992',2),
('Jennifer','Aniston','08/28/1999',9),
('Matt','Damon','07/04/1996',4),
('Chuck','Norris','03/06/1989',1)
;

-- SELECT * 
-- FROM actors
-- INNER JOIN countries
-- ON actors.id = countries.country_id;

-- SELECT *
-- FROM actors
-- LEFT OUTER JOIN countries
-- ON actors.id = countries.country_id;

-- SELECT *
-- FROM actors
-- RIGHT OUTER JOIN countries
-- ON actors.id = countries.country_id;

-- SELECT *
-- FROM actors
-- FULL OUTER JOIN countries
-- ON actors.id = countries.country_id;