import database from "./database.js";
import { LIMIT, CATEGORY_NAME, SORT_BY } from "../constants.js";

export const getBestSellerProductId = async (categoryId) => {
  const clause =
    categoryId === "all"
      ? ``
      : `WHERE p.category_name = '${CATEGORY_NAME[categoryId]}'`;

  const products = await database.query(
    `
    SELECT
      o.product_id,
      p.category_name,
      COUNT(*) AS order_count
    FROM orders o
    JOIN products p
    ON o.product_id = p.id
    ${clause}
    GROUP BY product_id
    ORDER BY order_count DESC
    LIMIT ?
    `,
    [LIMIT[categoryId]]
  );
  const productId = products.map((product) => product.product_id);
  return productId;
};

export const getProducts = async (categoryId, sort) => {
  const clause = `WHERE p.category_name = '${CATEGORY_NAME[categoryId]}'`;
  const data = await database.query(
    `
    SELECT
      p.id,
      p.name,
      p.category_name AS categoryName,
      p.price,
      p.discount_price AS discountPrice,
      p.created_at AS createdAt,
      p.updated_at AS updatedAt,
    JSON_ARRAYAGG(mi.url) AS imageUrl
    FROM products p
    JOIN main_images mi ON p.id = mi.product_id
    ${clause}
    GROUP BY p.id, p.name, p.price, p.discount_price
    ORDER BY ${SORT_BY[sort]}
    `
  );

  const products = {
    [categoryId]: data,
  };
  return products;
};

export const getAllProducts = async (sort) => {
  const data = await database.query(
    `
    SELECT
      p.id,
      p.name,
      p.category_name AS categoryName,
      p.price,
      p.discount_price AS discountPrice,
      p.created_at AS createdAt,
      p.updated_at AS updatedAt,
    JSON_ARRAYAGG(mi.url) AS imageUrl
    FROM products p
    JOIN main_images mi ON p.id = mi.product_id
    GROUP BY p.id, p.name, p.price, p.discount_price
    ORDER BY ${SORT_BY[sort]}
    `
  );
  const skinCareProducts = data.filter(
    (product) => product.categoryName === "스킨케어"
  );
  const bodyCareProducts = data.filter(
    (product) => product.categoryName === "바디케어"
  );

  const products = {
    skinCare: skinCareProducts,
    bodyCare: bodyCareProducts,
  };
  return products;
};
