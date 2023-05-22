import * as productService from "../services/productService.js";
import { catchAsync } from "../utils/errors.js";

export const getProductDetail = catchAsync(async (req, res) => {
  const { productId } = req.params;
  const data = await productService.getProductDetail(productId);
  res.status(200).json({ data });
});

export const getMainProducts = catchAsync(async (req, res) => {
  const productList = await productService.getMainProducts();
  return res.status(200).json({ data: productList });
});
