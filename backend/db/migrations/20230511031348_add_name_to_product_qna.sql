-- migrate:up
ALTER TABLE product_qna ADD name VARCHAR(100) AFTER title

-- migrate:down
ALTER TABLE product_qna DROP COLUMN name