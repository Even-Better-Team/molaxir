import * as productService from "../services/productService";
import { catchAsync } from "../utils/errors";

export const getProductDetail = catchAsync(async (req, res) => {
  const { productId } = req.params;

  if (!productId) {
    const error = new Error("KEY_ERROR");
    error.statusCode = 404;
    throw error;
  }

  const data = await productService.getProductDetail(productId);
  res.status(200).json({ data });
});

export const getMainProducts = catchAsync(async (req, res) => {
  const productList = await productService.getMainProducts();
  return res.status(200).json({ data: productList });
});
