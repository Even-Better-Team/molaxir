import productService from "../services/productService.js";
import { catchAsync } from "../utils/errors.js";

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
