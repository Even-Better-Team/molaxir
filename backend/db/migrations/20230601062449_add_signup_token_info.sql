-- migrate:up
CREATE TABLE signup_token_info (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(100) NULL,
  token VARCHAR(100) NULL
);

-- migrate:down
DROP TABLE signup_token_info;