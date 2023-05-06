-- migrate:up
CREATE TABLE delivery_fee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NULL,
  fee DECIMAL(10,2) NULL
);

-- migrate:down
DROP TABLE delivery_fee;

