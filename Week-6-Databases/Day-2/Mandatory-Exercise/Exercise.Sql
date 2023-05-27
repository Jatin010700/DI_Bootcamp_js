-- Create the "items" table
CREATE TABLE IF NOT EXISTS items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2)
);

-- Insert data into the "items" table
INSERT INTO items (name, price)
VALUES
    ('Small Desk', 100),
    ('Large Desk', 300),
    ('Fan', 80);

-- Create the "customers" table
CREATE TABLE IF NOT EXISTS customers (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL
);

-- Insert data into the "customers" table
INSERT INTO customers (first_name, last_name)
VALUES
    ('Greg', 'Jones'),
    ('Sandra', 'Jones'),
    ('Scott', 'Scott'),
    ('Trevor', 'Green'),
    ('Melanie', 'Johnson');

SELECT * FROM items ORDER BY price DESC;

SELECT * FROM items WHERE price > 80 ORDER BY price ASC;

SELECT * FROM customers ORDER BY first_name ASC;

SELECT * FROM items INNER JOIN  customers ON items.id = customers.id ORDER BY last_name DESC;