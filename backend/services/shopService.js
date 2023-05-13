import * as shopDao from "../models/shopDao";

export const getShopProducts = async (categoryId, sort) => {
  const bestSellerProductId = await shopDao.getBestSellerProductId(categoryId);
  const bestSellerProducts = await shopDao.getBestSellerProducts(
    bestSellerProductId
  );
  const products =
    categoryId === "all"
      ? await shopDao.getAllProducts(sort)
      : await shopDao.getProducts(categoryId, sort);

  products.bestSeller = bestSellerProducts;
  return products;
};
