-- migrate:up
CREATE TABLE delivery_status (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  status VARCHAR(100) NULL
);

-- migrate:down
DROP TABLE delivery_status;

