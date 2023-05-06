-- migrate:up
CREATE TABLE review_images (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  url VARCHAR(1000) NULL
);

-- migrate:down
DROP TABLE review_images;

