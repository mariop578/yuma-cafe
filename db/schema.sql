DROP DATABASE IF EXISTS ycafe_db;
CREATE DATABASE ycafe_db;
USE ycafe_db;

DROP TABLE IF EXISTS cafe_menu;

CREATE TABLE cafe_menu (
    item_id INT PRIMARY KEY,
    item_name VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL,
    price DECIMAL(8, 2) NOT NULL,
    description TEXT
);

INSERT INTO cafe_menu (item_id, item_name, category, price, description)
VALUES
    (1, 'Vanilla Latte', 'Coffee', 2.50, 'Espresso with 2% milk and a splash of vanilla'),
    (2, 'Double Torture', 'Coffee', 6.55, 'Espresso with chocolate milk and vanilla'),
    (3, 'Croissant', 'Bakery', 3.50, 'Flaky and buttery pastry'),
    (4, 'Blueberry Muffin', 'Bakery', 3.50, 'Fresh oven-baked Blueberry Muffin'),
    (5, 'Espresso', 'Coffee', 2.00, 'A double shot of espresso');
