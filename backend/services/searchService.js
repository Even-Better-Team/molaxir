import * as searchDao from "../models/searchDao.js";

export const getSearchProducts = async (keyword, sort) => {
  const productList = await searchDao.getSearchProducts(keyword, sort);
  return productList;
};
