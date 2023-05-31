import bcrypt from "bcrypt";
import * as userDao from "../models/userDao.js";
import * as checkValidaion from "../utils/checkValidation.js";
import * as identityVerification from "../utils/identityVerification.js";

//본인인증(메일방식)
//유효성검사가 완료되지 않음
// export const identityVerificationByEmail = async (email) => {
//   try {
//     const isValid = await checkValidaion.checkValidationEmail(email);

//     if (!isValid) {
//       const token = identityVerification.getToken();
//       const emailTemplate = identityVerification.reqTokenTemplate(token);
//       //await userDao.verifyInfo(email, token); -> model로 token을 보내면  emailTemplate와 다른 token 번호가 생김
//       await identityVerification.sendTokenTemplateToEmail(email, emailTemplate);
//     }
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };

//이메일 인증번호를 받고 난 다음 이메일 인증번호에 대한 유효성 검사가 이루어 져야함.
//유효성 검사가 정상적으로 끝나면 그다음 회원가입에 대해서 진행이 가능하도록 해야함.
//또한 유효성 검사가 정상적으로 끝나면 유저가 작성한 이메일에 대해서 자동으로 이메일칸에 고정으로 들어가야함(이건 프론트쪽에서 구현이 되도록 해야할 듯 함)

export const signup = async (
  molaxirId,
  password,
  name,
  email,
  address,
  phoneNumber,
  gender,
  birth
) => {
  await checkValidaion.checkValidationEmail(email);
  await checkValidaion.checkValidationPassword(password);
  await checkValidaion.checkValdationPhoneNumber(phoneNumber);

  const duplicateMolaxirId = await userDao.checkDuplicateMolaxirId(molaxirId);
  const duplicateEmail = await userDao.checkDuplicateEmail(email);
  const duplicatePhoneNumber = await userDao.checkDuplicatePhoneNumber(
    phoneNumber
  );

  if (duplicateMolaxirId) {
    const error = new Error("이미 존재하는 ID 입력");
    error.statusCode = 400;
    throw error;
  }

  if (duplicateEmail) {
    const error = new Error("이미 존재하는 EMAIL  입력");
    error.statusCode = 400;
    throw error;
  }

  if (duplicatePhoneNumber) {
    const error = new Error("이미 존재하는 전화번호 입력");
    error.statusCode = 400;
    throw error;
  }

  const SALT = parseInt(process.env.SALT);
  const hashPassword = await bcrypt.hash(password, SALT);

  const createUser = await userDao.createUser(
    molaxirId,
    hashPassword,
    name,
    email,
    address,
    phoneNumber,
    gender,
    birth
  );

  return createUser;
};
