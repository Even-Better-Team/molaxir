-- migrate:up
CREATE TABLE product_status (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  status VARCHAR(100) NULL
);

-- migrate:down
DROP TABLE product_status;