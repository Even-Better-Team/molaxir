import database from "../models/database.js";
import { SORT_BY } from "../constants.js";

export const getSearchProducts = async (keyword, sort) => {
  const data = await database.query(
    `  SELECT
    p.id,
    p.name,
    p.category_name AS categoryName,
    p.price,
    p.discount_price AS discountPrice,
    JSON_ARRAYAGG(mi.url) AS images
  FROM products p
  JOIN main_images mi ON p.id = mi.product_id
  WHERE p.name LIKE '%${keyword}%'
  GROUP BY p.id, p.name, p.price, p.discount_price
  ORDER BY ${SORT_BY[sort]}
  `
  );
  return data;
};
