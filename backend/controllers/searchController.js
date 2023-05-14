import * as searchService from "../services/searchService";
import { catchAsync } from "../utils/errors";
import { PAGE_PER_PRODUCTS } from "../constants";

export const getSearchProducts = catchAsync(async (req, res) => {
  const { keyword, pageNo = 1, sort = "new" } = req.query;
  if (!keyword) {
    const error = new Error("검색어를 입력하세요.");
    error.statusCode = 400;
    throw error;
  }
  const productList = await searchService.getSearchProducts(keyword, sort);
  const totalCount = productList.length;
  const currentPage = Math.max(1, Number(pageNo));
  const start = (currentPage - 1) * PAGE_PER_PRODUCTS;
  const end = start + PAGE_PER_PRODUCTS;
  const pageList = productList.slice(start, end);

  res.status(200).json({ products: pageList, totalCount });
});
