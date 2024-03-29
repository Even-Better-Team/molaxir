-- migrate:up
CREATE TABLE order_items (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  product_option_id INT NULL,
  order_id INT NULL,
  quantity INT NULL,

  CONSTRAINT order_items_product_option_id_fk FOREIGN KEY (product_option_id) REFERENCES product_options (id),
  CONSTRAINT order_items_order_id_fk FOREIGN KEY (order_id) REFERENCES orders (id)
);


-- migrate:down
DROP TABLE order_items;

