-- migrate:up
CREATE TABLE reviews (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  star DECIMAL(1,1) NULL,
  description VARCHAR(3000) NULL,
  user_id INT NULL,
  product_id INT NULL,
  review_image_id INT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,

  CONSTRAINT reviews_user_id_fk FOREIGN KEY (user_id) REFERENCES users (id),
  CONSTRAINT reviews_product_id_fk FOREIGN KEY (product_id) REFERENCES products (id),
  CONSTRAINT reviews_review_image_id_fk FOREIGN KEY (review_image_id) REFERENCES review_images (id)
);

-- migrate:down
DROP TABLE reviews;

