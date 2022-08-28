
CREATE TABLE users(
    id VARCHAR(255) PRIMARY KEY NOT NULL,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);


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

CREATE TABLE carts(
    index BIGSERIAL NOT NULL,
    user_id VARCHAR(255) NOT NULL,
    product_id BIGINT NOT NULL,
    qty INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

CREATE TABLE orders(
    id VARCHAR(255) NOT NULL PRIMARY KEY,
    index BIGSERIAL NOT NULL,
    user_id VARCHAR(255) NOT NULL,
    total_price DECIMAL(7,2) NOT NULL,
    amount_of_items BIGINT NOT NULL,
    created_date DATE DEFAULT(NOW()) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE order_products(
    order_id VARCHAR(255) NOT NULL,
    product_id BIGINT NOT NULL,
    qty BIGINT NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(id),
    FOREIGN KEY (order_id) REFERENCES orders(id)
);
