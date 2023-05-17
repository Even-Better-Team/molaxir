import * as shopDao from "../models/shopDao";

export const getShopProducts = async (categoryId, sort) => {
  const bestSellerProductId = await shopDao.getBestSellerProductId(categoryId);
  const bestSellerProducts = await shopDao.getBestSellerProducts(
    bestSellerProductId
  );
  const productList =
    categoryId === "all"
      ? await shopDao.getAllProducts(sort)
      : await shopDao.getProducts(categoryId, sort);

  productList.bestSeller = bestSellerProducts;
  return productList;
};
