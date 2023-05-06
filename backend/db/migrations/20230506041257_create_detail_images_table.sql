-- migrate:up
CREATE TABLE detail_images (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  url VARCHAR(1000) NULL,
  product_id INT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,

  CONSTRAINT detail_images_product_id_fk FOREIGN KEY (product_id) REFERENCES products (id)
);

-- migrate:down
DROP TABLE detail_images;
