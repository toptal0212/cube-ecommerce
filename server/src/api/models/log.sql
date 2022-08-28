-- Queries

-- Create users table
CREATE TABLE users(
    id VARCHAR(255) PRIMARY KEY NOT NULL,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Create a user
INSERT INTO users(id, username, password)
VALUES ('tempId', 'jimmy', '1234');

-- Query to check for existing username
SELECT username FROM users WHERE username = 'jimmy';

-- Product table
CREATE TABLE products(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    company VARCHAR(255) NOT NULL,
    product_name VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    price DECIMAL(5,2) NOT NULL,
    description TEXT NOT NULL,
    image_url VARCHAR(512) NOT NULL,
    created_date DATE DEFAULT(NOW()) NOT NULL
);

-- Insert product into table
INSERT INTO 
products(
        company, 
        product_name, 
        category, 
        price, 
        description, 
        image_url)
VALUES(
    'Crown',
    'Crown button shirt',
    'shirt',
     24.99,
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'http://drive.google.com/uc?export=view&id=13Fhbs88i6UOmlFYw8j3HkgaSri4ZM-ap');
    
-- Carts table
CREATE TABLE carts(
    index BIGSERIAL NOT NULL,
    user_id VARCHAR(255) NOT NULL,
    product_id BIGINT NOT NULL,
    qty INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

-- Insert into cart
INSERT INTO carts(user_id, product_id, qty) 
VALUES('dee0bb67-1ffa-42db-9235-1e1ce33ee27d', 1, 1);

-- Get user cart and product info

SELECT * FROM products
JOIN carts ON products.id = carts.product_id
WHERE user_id = 'dee0bb67-1ffa-42db-9235-1e1ce33ee27d'; 

-- SELECT single item from user cart
SELECT * FROM carts
WHERE user_id = 'dee0bb67-1ffa-42db-9235-1e1ce33ee27d' 
AND product_id = 2;

-- UPDATE user cart
UPDATE carts
SET qty = 3
WHERE user_id = 'dee0bb67-1ffa-42db-9235-1e1ce33ee27d' 
AND product_id = 5;

INSERT INTO users(stripe_customer_id) 
VALUES($2) 
WHERE id = $1 RETURNING *;

-- Orders Table
CREATE TABLE orders(
    id VARCHAR(255) NOT NULL PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
    total_price DECIMAL(7,2) NOT NULL,
    amount_of_items BIGINT NOT NULL,
    created_date DATE DEFAULT(NOW()) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

SELECT products.price, products.product_name, qty, products.id FROM order_products
JOIN products ON products.id = order_products.product_id
WHERE order_id = 'pi_3LaVMLAVpkOiV3p53Rp7BV63';