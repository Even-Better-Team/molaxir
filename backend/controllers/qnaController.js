// import * as qnaService from "../services/qnaService.js";
// import { catchAsync } from "../utils/errors.js";

// export const createPost = catchAsync(async (req, res) => {
//   //productId가 있는경우와 없는경우에 대해서 구분에 대한 기능을 할 수 있도록 소스코드 추가로 필요함
//   //const userId = req.user;
//   //비로그인 유저 경우의 Q&A post 작성
//   //if (!userId) {
//   const { title, name, email, password, description, productId } = req.body;

//   if (!title || !name || !email || !description) {
//     const error = new Error("KEY_ERROR");
//     error.statusCode = 400;
//     res.json({
//       code: 400,
//       message: `작성항목에 필수로 작성되어야 하는 항목이 누락되었습니다.`,
//     });
//     throw error;
//   }

//   await qnaService.createPostForNonLoginUser(
//     title,
//     name,
//     email,
//     password,
//     description,
//     productId
//   );
//   //}
//   //로그인 유저 경우의 Q&A post 작성
//   if (userId) {
//     const { title, password, description, productId } = req.body;

//     if (!title || !description) {
//       const error = new Error("KEY_ERROR");
//       error.statusCode = 400;
//       res.json({
//         code: 400,
//         message: `작성항목에 필수로 작성되어야 하는 항목이 누락되었습니다.`,
//       });
//       throw error;
//     }

//     await qnaService.createPostForLoginUser(
//       title,
//       password,
//       description,
//       userId,
//       productId
//     );
//   }

//   res.status(200).json({ message: `SUCCESS_CREATE_Q&A_POST` });
// });

// export const deletePost = catchAsync(async (req, res) => {
//   const { qnaId } = req.params;
//   // 작성한 유저만 지울 수 있도록 하는 기능 필요
//   //const userId = req.user;

//   //userId paramater에 추가 필요
//   await qnaService.deletePost(qnaId);

//   res.status(200).json({ message: `DELETE_Q&A_${qnaId}_POST` });
// });

// export const updatePost = async (qnaId) => {
//   const { qnaId } = req.params;
//   const { userId } = req.user;

//   if (!userId) {
//     const { title, name, password, email, description, productId } = req.body;
//     if (!title || !name || !email || !description) {
//       const error = new Error("KEY_ERROR");
//       error.statusCode = 400;
//       throw error;
//     }

//     const data = await qnaService.updatePostForNonLoginUser(
//       title,
//       name,
//       password,
//       email,
//       description,
//       productId
//     );
//     return data;
//   }

//   if (userId) {
//     const { title, password, description, productId } = req.body;
//     if (!title || !description || !productId) {
//       const error = new Error("KEY_ERROR");
//       error.statusCode = 400;
//       throw error;
//     }

//     const data = await qnaService.updatePostForLoginUser(
//       title,
//       password,
//       description,
//       productId
//     );
//     return data;
//   }

//   res.status(200).json({ message: `UPDATE_Q&A_${qnaId}_POST` }, { data });
// };

// export const getPost = catchAsync(async (req, res) => {
//   const data = await qnaService.getPost();

//   return res.status(200).json({ data });
// });

// export const getPostDetail = catchAsync(async (req, res) => {
//   const { qnaId } = req.params;

//   const data = await qnaService.getPostDetail(qnaId);

//   res.status(200).json({ data });
// });
