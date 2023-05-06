-- migrate:up
CREATE TABLE product_options (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(200) NULL,
  inventory INT NULL DEFAULT 0,
  extra_price DECIMAL(10,2) NULL DEFAULT 0,
  product_id INT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,

  CONSTRAINT product_options_product_id_fk FOREIGN KEY (product_id) REFERENCES products (id)
);

-- migrate:down
DROP TABLE product_options;

