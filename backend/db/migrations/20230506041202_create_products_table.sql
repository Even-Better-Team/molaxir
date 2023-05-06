-- migrate:up
CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(300) NOT NULL,
  price DECIMAL(10,2) NULL DEFAULT 0,
  discount_price DECIMAL(10,2) NULL DEFAULT 0,
  description VARCHAR(3000) NULL,
  product_status_id INT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,

  CONSTRAINT products_product_status_id_fk FOREIGN KEY (product_status_id) REFERENCES product_status (id)
);

-- migrate:down
DROP TABLE products;
