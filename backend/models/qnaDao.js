import database from "./database";

export const createPostForNonLoginUser = async (
  title,
  name,
  email,
  password,
  description
) => {
  const query = `
  INSERT INTO
    product_qna(
      title,
      name,
      email,
      password,
      description,
      user_id
    ) VALUES(
      ?,?,?,?,?,NULL
    )
  `;
  let values;
  if (password) {
    values = [title, name, email, password, description];
  } else {
    values = [title, name, email, null, description];
  }

  const result = await database.query(query, values);
  return result;
};

export const createPostForLoginUser = async (
  title,
  password,
  description,
  userId
) => {
  const query = `
  INSERT INTO
    product_qna(
      title,
      password,
      description
    ) VALUES(
      ?,?,?
    )
  `;

  let values;
  if (password) {
    values = [title, password, description];
  } else {
    values = [title, null, description];
  }

  const result = await database.query(query, values);
  return result;
};

export const deletePost = async (qnaId) => {
  const result = await database.query(
    `
    DELETE FROM
      product_qna
    WHERE
      id=?
    `,
    [qnaId]
  );
  return result;
};

export const updatePostForNonLoginUser = async (
  qnaId,
  title,
  name,
  email,
  description,
  productId
) => {
  const result = await database.query(
    `
    UPDATE
      product_qna
    SET
      title=?,
      name=?,
      email=?,
      description=?,
      product_id=?
    WHERE id=?
    `,
    [title, name, email, description, productId, qnaId]
  );
  return result;
};

export const updatePostForLoginUser = async (title, description, productId) => {
  const result = await database.query(
    `
    UPDATE
      product_qna
    SET
      title=?,
      description=?,
      product_id=?
    WHERE id=?
    `,
    [title, description, productId]
  );
  return result;
};

export const getPost = async () => {
  const result = await database.query(
    `
    SELECT
      pq.id AS productQnaId,
      pq.title AS productQnaTitle,
      pq.name AS productQnaName,
      pq.created_at AS createdAt,
      u.name AS userName,
      p.name AS productName,
      mi.url AS productMainImage
    FROM
      product_qna pq
    INNER JOIN
      users u
    ON
      pq.user_id=u.id
    INNER JOIN
      products p
    ON
      pq.product_id=p.id
    INNER JOIN
      main_images mi
    ON
      p.id=mi.product_id
    `
  );
  return result;
};

export const getPostDetail = async (qnaId) => {
  const result = await database.query(
    `
    SELECT
      pq.id AS productQnaId,
      p.name AS productName,
      p.price AS productPrice,
      mi.url AS productMainImage,
      pq.title AS productQnaTitle,
      IF(pq.user_id IS NULL, u.name, pq.name) AS productQnaName,
      pq.description AS productDescription,
      pq.created_at AS createdAt,
      p.name AS productName,
    FROM
      product_qna pq
    INNER JOIN
      users u
    ON
      pq.user_id=u.id
    INNER JOIN
      products p
    ON
      pq.product_id=p.id
    INNER JOIN
      main_images mi
    ON
      p.id=mi.product_id
    WHERE
      pq.id=?
    `,
    [qnaId]
  );
  return result;
};
