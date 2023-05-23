CREATE TABLE IF NOT EXISTS students (
	id AUTOINCREMENT PRIMARY KEY,
	firstName VARCHAR(100) NOT NULL,
	lastName VARCHAR(100) NOT NULL,
	birthDate DATE NOT NULL,
	grade FLOAT
);

INSERT INTO students (firstName, lastName, dob,grade) VALUES 
	('Marc','Benichou', '02/11/1998', 2),
	('Yoan', 'Cohen', '01/01/2000', 15),
	('Lea', 'Benichou','07/27/1987', 10),
	('Amelia', 'Dux', '07/04/1996', 9),
	('David', 'Grez', '06/14/2003', 7),
	('Omer', 'Simpson','03/10/1980', 6),
	('Anna', 'Bella','03/10/1981', 5)
	;
	
	SELECT * FROM students;
	
	SELECT firstName, lastName FROM students;
	
	SELECT * FROM students 
	WHERE id = 2;
	
	SELECT * FROM students
	WHERE lastName = 'Benichou' AND firstName = 'Marc';
	
	SELECT * FROM students
	WHERE lastName = 'Benichou' OR firstName = 'Marc';
	
	SELECT * FROM students WHERE firstName LIKE '%a%'
	
	SELECT * FROM students WHERE firstName LIKE 'a%'
	
	SELECT * FROM students WHERE firstName LIKE '%a'
	
	SELECT * FROM students
	WHERE firstName LIKE '_a%';

	SELECT * FROM students
	WHERE id IN (1, 3);

	SELECT * FROM students WHERE dob >= '2000/01/01'
	