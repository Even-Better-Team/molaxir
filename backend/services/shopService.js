import * as shopDao from "../models/shopDao";
import { getBestSellerProducts } from "../models/productDao";

export const getShopProducts = async (categoryId, sort) => {
  const bestSellerProductId = await shopDao.getBestSellerProductId(categoryId);
  const bestSellerProducts = await getBestSellerProducts(bestSellerProductId);
  const productList =
    categoryId === "all"
      ? await shopDao.getAllProducts(sort)
      : await shopDao.getProducts(categoryId, sort);

  productList.bestSeller = bestSellerProducts;
  return productList;
};
