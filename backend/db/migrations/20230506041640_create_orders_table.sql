-- migrate:up
CREATE TABLE orders (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  order_number VARCHAR(500) NOT NULL,
  receiver VARCHAR(500) NOT NULL,
  phone_number VARCHAR(300) NOT NULL,
  address VARCHAR(500) NOT NULL,
  quantity INT NULL,
  total_price DECIMAL(10,2) NOT NULL,
  payment_method VARCHAR(100) NULL,
  delivery_memo VARCHAR(150) NULL,
  non_member_password VARCHAR(150) NULL,
  product_id INT NOT NULL,
  user_id INT NULL,
  delivery_fee_id INT NULL,
  delivery_status_id INT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  
  CONSTRAINT orders_product_id_fk FOREIGN KEY (product_id) REFERENCES products (id),
  CONSTRAINT orders_user_id_fk FOREIGN KEY (user_id) REFERENCES users (id),
  CONSTRAINT orders_delivery_fee_id_fk FOREIGN KEY (delivery_fee_id) REFERENCES delivery_fee (id),
  CONSTRAINT orders_delivery_status_id_fk FOREIGN KEY (delivery_status_id) REFERENCES delivery_status (id)
);


-- migrate:down
DROP TABLE orders;

