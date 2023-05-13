import * as shopService from "../services/shopService.js";
import { catchAsync } from "../utils/errors.js";

export const getShopProducts = catchAsync(async (req, res) => {
  const { categoryId = "all", sort = "new" } = req.query;
  const productList = await shopService.getShopProducts(categoryId, sort);
  return res.status(200).json({ data: productList });
});
