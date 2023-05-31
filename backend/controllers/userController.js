import * as userService from "../services/userService.js";
import { catchAsync } from "../utils/errors.js";

export const verification = catchAsync(async (req, res) => {
  const { email } = req.body;

  if (!email) {
    const error = new Error("KEY_ERROR");
    error.statusCode = 400;
    throw error;
  }
  await userService.identityVerificationByEmail(email);
  res.status(200).json({ message: `${email}로 인증번호 발송완료` });
});

// token번호 유효성 검사 기능
// export const checkverify = catchAsync(async (req, res) => {
//   const { token } = req.body;

//   if (!token) {
//     const error = new Error("KEY_ERROR");
//     error.statusCode = 400;
//     throw error;
//   }
// });

export const signup = catchAsync(async (req, res) => {
  const {
    molaxirId,
    password,
    name,
    email,
    address,
    phoneNumber,
    gender,
    birth,
  } = req.body;

  if (!molaxirId || !password || !name || !email || !phoneNumber) {
    const error = new Error("KEY_ERROR");
    error.statusCode = 400;
    throw error;
  }

  await userService.signup(
    molaxirId,
    password,
    name,
    email,
    address,
    phoneNumber,
    gender,
    birth
  );

  return res.status(201).json({ message: "회원가입 완료" });
});
