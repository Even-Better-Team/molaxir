import * as searchDao from "../models/searchDao";

export const getSearchProducts = async (keyword, sort) => {
  const productList = await searchDao.getSearchProducts(keyword, sort);
  return productList;
};
