CREATE DATABASE bamazon;
USE bamazon;
CREATE TABLE products(
ID INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
itemId INTEGER(10),
productName VARCHAR(100),
departmentName VARCHAR(100),
price INTEGER(10),
stockQuantity INTEGER(30)
);

ALTER TABLE products
DROP COLUMN itemId;

INSERT INTO products (itemId, productName, departmentName, price, stockQuantity)
VALUES ('050001', 'sunglass', 'eyewear', '299.00', '100');
INSERT INTO products (itemId, productName, departmentName, price, stockQuantity)
VALUES ('050002', 'watch', 'jewelry', '399.00', '50');
INSERT INTO products (itemId, productName, departmentName, price, stockQuantity)
VALUES ('050003', 'shoes', 'footwear', '29.99', '75');
INSERT INTO products (itemId, productName, departmentName, price, stockQuantity)
VALUES ('050004', 'boots', 'footwear', '29.99', '75');
INSERT INTO products (itemId, productName, departmentName, price, stockQuantity)
VALUES ('050005', 'backpack', 'bags', '59.99', '70');
INSERT INTO products (itemId, productName, departmentName, price, stockQuantity)
VALUES ('050006', 'handbag', 'bags', '139.00', '50');
INSERT INTO products (itemId, productName, departmentName, price, stockQuantity)
VALUES ('050007', 'scarf', 'accessories', '39.99', '50');
INSERT INTO products (itemId, productName, departmentName, price, stockQuantity)
VALUES ('050008', 'gloves', 'accessories', '59.99', '70');
INSERT INTO products (itemId, productName, departmentName, price, stockQuantity)
VALUES ('050009', 'tote', 'bags', '139.00', '50');
INSERT INTO products (itemId, productName, departmentName, price, stockQuantity)
VALUES ('050010', 't-shirt', 'clothes', '39.99', '50');

show tables;
SELECT * FROM products

