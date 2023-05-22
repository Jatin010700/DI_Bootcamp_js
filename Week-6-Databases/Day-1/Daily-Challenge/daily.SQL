	CREATE TABLE IF NOT EXISTS actors (
	id SERIAL PRIMARY KEY,
	fName VARCHAR(100),
	lName VARCHAR(100),
	age DATE,
	numberOscars FLOAT
);
INSERT INTO actors (fName, lName) VALUES
('Angelina','Jolie'),
('George','Clooney'),
('Jennifer','Aniston'),
('Matt','Damon'),
('Chuck','Norris')
;
SELECT COUNT(*) FROM Actors;