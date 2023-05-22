import * as productDao from "../models/productDao.js";

export const getProductDetail = async (productId) => {
  return await productDao.getProductDetail(productId);
};

export const getMainProducts = async () => {
  const bestSellerProduct = await productDao.getBestSellerProducts();
  const newArrivalProduct = await productDao.getNewArrivalProducts();

  const productList = {
    bestSellers: bestSellerProduct,
    newArrivals: newArrivalProduct,
  };
  return productList;
};
