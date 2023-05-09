import productDao from "../models/productDao";

export const getProductDetail = async (productId) => {
  return await productDao.getProductDetail(productId);
};
