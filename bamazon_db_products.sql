# Create database
CREATE DATABASE bamazon_db;

USE bamazon_db;

# Create table to store product information
CREATE TABLE products (
  ItemID INT(11) NOT NULL AUTO_INCREMENT,
  ProductName VARCHAR(100) NOT NULL,
  DepartmentName VARCHAR(50) NOT NULL,
  Price FLOAT NOT NULL,
  StockQuantity INT(10) NOT NULL,
  PRIMARY KEY (ItemID),
  UNIQUE INDEX ItemID_UNIQUE (ItemID ASC));
  
# Fill table with products
INSERT INTO products (ProductName, DepartmentName, Price, StockQuantity) 
	VALUES ('Heat TV Stick', 'Electronics', 29.99, 17);
INSERT INTO products (ProductName, DepartmentName, Price, StockQuantity)
	VALUES ('Reverb Dot (2nd Generation)', 'Electronics', 59.99, 31);
INSERT INTO products (ProductName, DepartmentName, Price, StockQuantity)
	VALUES ('Heat Tablet', 'Electronics', 49.99, 4);
INSERT INTO products (ProductName, DepartmentName, Price, StockQuantity)
	VALUES ("Men's Adventure Jacket", 'Clothing', 69.85, 13);
