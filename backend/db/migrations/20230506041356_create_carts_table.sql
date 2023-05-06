-- migrate:up
CREATE TABLE carts (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  quantity INT NULL,
  user_id INT NULL,
  product_id INT NULL,
  product_option_id INT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,

  CONSTRAINT carts_user_id_fk FOREIGN KEY (user_id) REFERENCES users (id),
  CONSTRAINT carts_product_id_fk FOREIGN KEY (product_id) REFERENCES products (id),
  CONSTRAINT carts_product_option_id_fk FOREIGN KEY (product_option_id) REFERENCES product_options (id)
);

-- migrate:down
DROP TABLE carts;
