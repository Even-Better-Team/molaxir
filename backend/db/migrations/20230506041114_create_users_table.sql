-- migrate:up
CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  molaxir_id VARCHAR(200) NULL,
  password VARCHAR(300) NULL,
  name VARCHAR(100) NULL,
  email VARCHAR(200) NUll,
  address VARCHAR(300) NULL,
  phone_number VARCHAR(100) NULL,
  gender VARCHAR(50) NULL,
  birth VARCHAR(100) NULL,
  google_id VARCHAR(200) NULL,
  kakao_id VARCHAR(200) NULL,
  naver_id VARCHAR(200) NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,

CONSTRAINT users_molaxir_id_uk UNIQUE (molaxir_id),
CONSTRAINT users_email_uk UNIQUE (email),
CONSTRAINT users_google_id_uk UNIQUE (google_id),
CONSTRAINT users_kakao_id_uk UNIQUE (kakao_id),
CONSTRAINT users_naver_id_uk UNIQUE (naver_id)
);


-- migrate:down
DROP TABLE users;
