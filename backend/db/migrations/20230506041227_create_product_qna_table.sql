-- migrate:up
CREATE TABLE product_qna (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(300) NULL,
  email VARCHAR(200) NULL,
  password VARCHAR(100) NULL,
  description VARCHAR(3000) NULL,
  user_id INT NULL,
  product_id INT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,

  CONSTRAINT product_qna_user_id_fk FOREIGN KEY (user_id) REFERENCES users (id),
  CONSTRAINT product_qna_product_id_fk FOREIGN KEY (product_id) REFERENCES products (id)
);

-- migrate:down
DROP TABLE product_qna;
