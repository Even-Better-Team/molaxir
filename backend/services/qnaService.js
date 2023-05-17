// import * as qnaDao from "../models/qnaDao.js";

// //create 할때 name은 **표시가 될 수 있도록 할 것
// export const createPostForNonLoginUser = async (
//   title,
//   name,
//   email,
//   password,
//   description
// ) => {
//   await qnaDao.createPostForNonLoginUser(
//     title,
//     name,
//     email,
//     password,
//     description
//   );
// };

// export const createPostForLoginUser = async (
//   title,
//   password,
//   description,
//   userId
// ) => {
//   await qnaDao.createPostForLoginUser(title, password, description, userId);
// };

// export const deletePost = async (qnaId) => {
//   await qnaDao.deletePost(qnaId);
// };

// export const updatePostForNonLoginUser = async (
//   qnaId,
//   userId,
//   title,
//   name,
//   password,
//   email,
//   description,
//   productId
// ) => {
//   await qnaDao.updatePostForNonLoginUser(
//     qnaId,
//     userId,
//     title,
//     name,
//     password,
//     email,
//     description,
//     productId
//   );
// };

// export const updatePostForLoginUser = async (
//   title,
//   password,
//   description,
//   productId
// ) => {
//   //post의 게시판 비밀번호와 검증한 후에 수정 가능 틀리면 오류발생시켜야 함
//   await qnaDao.updatePostForLoginUser(title, description, productId);
// };

// export const getPost = async () => {
//   //qna 게시글 전체 조회시 번호가 삭제하더라도 게시id가 아닌 별도의 번호로 반환할 수 있도록 해야함
//   await qnaDao.getPost();
// };

// export const getPostDetail = async (qnaId) => {
//   await qnaDao.getPostDetail(qnaId);
// };
