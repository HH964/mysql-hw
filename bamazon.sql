DROP DATABASE IF EXISTS bamazon_db;
create database bamazon_db;
use bamazon_db;

create table products (
    product_id INTEGER(11) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(100),
    department_name VARCHAR(100),
    price dec(10),
    stock_quantity int(10),
    PRIMARY KEY (product_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Water Bottle', "Beverages", 3.45, 35);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Laptop', "Electronics", 450, 125);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Candle', "Home Goods", 8.50, 75);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Aphone', "Electronics", 1500, 450);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Cheese Pizza', "Frozen Food", 5.25, 950);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Dog Leash', "Pets", 11.99, 777);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Hammer', "Construction", 15, 350);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Book', "Reading", 10.45, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Mouse', "Electronics", 80.99, 95);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Desk', "Office Furniture", 600, 999);

use bamazon_db;
select * from products;
