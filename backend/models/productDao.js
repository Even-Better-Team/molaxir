import database from "./database";

export const getProductDetail = async (productId) => {
  const [result] = await database.query(
    `
    SELECT
      p.id as productId,
        JSON_OBJECT(
          'productName', p.name, 
          'productPrice', p.price,  
          'productDiscountPrice', p.discount_price,
          'productDescription', p.description,
          'productCategoryName', p.category_name,
          'ProductStatus', ps.status,
          'createdAt', p.created_at,
          'updatedAt', p.updated_at
        ) as productInfo,
        JSON_ARRAYAGG(
          JSON_OBJECT(
            'mainImageId', mi.id,
            'mainImageUrl', mi.url
          )
        )as mainImages,
        JSON_ARRAYAGG(
          JSON_OBJECT(
            'detailImageId', di.id,
            'detailImageUrl', di.url
          )
        )as detailImages,
        JSON_OBJECT(
          'productOptionId', po.id,
          'productOptionName', po.name,
          'productOptionInventory', po.inventory,
          'productOptionExtraPrice', po.extra_price
        )as productOption,
        (SELECT COUNT(r.id) FROM reviews r WHERE r.product_id=p.id) as reviewCount
    FROM
      products p
    LEFT JOIN
      product_status ps ON p.status_id = ps.id
    LEFT JOIN
      main_images mi ON mi.product_id = p.id
    LEFT JOIN
      detail_images di ON di.product_id = p.id
    LEFT JOIN
      product_options po ON po.product_id = p.id
    WHERE
      p.id=?
    GROUP BY
      productId
    `,
    [productId]
  );
  return result;
};

// //쿼리문 result 반환값 예시
//   {
//     "productId": 1,
//     "productInfo": {
//       "productName": "Product 1",
//       "productPrice": 10.99,
//       "productDiscountPrice": 8.99,
//       "productDescription": "Product 1 description",
//       "productCategoryName": "Category 1",
//       "ProductStatus": "Active",
//       "createdAt": "2022-01-01 10:00:00",
//       "updatedAt": "2022-01-02 15:30:00"
//     },
//     "mainImages": [
//       {
//         "mainImageId": 1,
//         "mainImageUrl": "image1.jpg"
//       },
//       {
//         "mainImageId": 2,
//         "mainImageUrl": "image2.jpg"
//       }
//     ],
//     "detailImages": [
//       {
//         "detailImageId": 1,
//         "detailImageUrl": "detail1.jpg"
//       },
//       {
//         "detailImageId": 2,
//         "detailImageUrl": "detail2.jpg"
//       }
//     ],
//     "productOption": {
//       "productOptionId": 1,
//       "productOptionName": "Option 1",
//       "productOptionInventory": 10,
//       "productOptionExtraPrice": 2.99
//     },
//     "reviewCount": 5
//   }

//쿼리문에 리뷰와 qna까지 불러올것인지에 대한 선택에 따라 작업쿼리내용이 추가될 수도 있는 내용들(작성하다가 맒)
// JSON_ARRAYAGG(
//   JSON_OBJECT(
//     r.id as reviewId,
//     r.star as reviewStar,
//     r.description as reviewDescription,
//     u.name as reviewer,
//     JSON_ARRAYAGG(
//       JSON_OBJECT(
//         ri.id as reviewImageId,
//         ri.url as reviewImageUrl
//       )
//     )as reviewImages,
//     r.created_at as reviewCreatedAt,
//     r.updated_at as reviewUpdatedAt
//   )
// )as reviews,
// JSON_ARRAYAGG(
//   JSON_OBJECT(
//     pq.id as productQnaId,
//     pq.title as productQnaTitle,
//     pq.
//   )
// )productQna

export const getBestSellerProducts = async () => {
  const bestSellerProductId = await database.query(
    `
    SELECT
      o.product_id,
      COUNT(*) AS order_count
    FROM orders o
    GROUP BY product_id
    ORDER BY order_count DESC
    LIMIT 3
    `
  );
  const productId = bestSellerProductId.map((product) => product.product_id);
  const bestSellerProducts = [];
  for (let i = 0; i < productId.length; i++) {
    const product = productId[i];
    const data = await database.query(
      `
    SELECT
      p.id,
      p.name,
      p.category_name AS categoryName,
      p.price,
      p.discount_price AS discountPrice,
      JSON_ARRAYAGG(mi.url) AS imageUrl
    FROM products p
    JOIN main_images mi ON p.id = mi.product_id
    WHERE p.id=?
    GROUP BY p.id, p.name, p.price, p.discount_price
    `,
      [product]
    );

    const imageUrlArray = data[0].imageUrl;
    if (typeof imageUrlArray === "string") {
      imageUrlArray = JSON.parse(imageUrlArray);
    }

    const processedData = {
      ...data[0],
      imageUrl: imageUrlArray,
    };
    bestSellerProducts.push(processedData);
  }
  return bestSellerProducts;
};

export const getNewArrivalProducts = async () => {
  const data = await database.query(
    `
    SELECT
      p.id,
      p.name,
      p.category_name AS categoryName,
      p.price,
      p.discount_price AS discountPrice,
      JSON_ARRAYAGG(mi.url) AS imageUrl
    FROM products p
    JOIN main_images mi ON p.id = mi.product_id
    GROUP BY p.id, p.name, p.price, p.discount_price
    ORDER BY p.created_at DESC
    LIMIT 8
    `
  );
  return data;
};
