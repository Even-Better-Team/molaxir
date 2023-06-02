import database from "./database.js";

// 이메일 인증번호를 위한 model 쿼리문(emailTemplate에서 생기는 token 번호와 달라서 주석처리해놓은 상태)
// export const verifyInfo = async (email, token) => {
//   const result = await database.query(
//     `
//     INSERT INTO
//       signup_token_info(
//         email,
//         token
//       ) VALUES(
//         ?,?
//       )
//     `,
//     [email, token]
//   );
//   console.log(result);
//   return result;
// };

export const checkDuplicateMolaxirId = async (molaxirId) => {
  const [result] = await database.query(
    `
    SELECT EXISTS(
      SELECT
        molaxir_id
      FROM
       users
      WHERE
       molaxir_id=?
    )as checkExistMolaxirId
    `,
    [molaxirId]
  );
  return !!parseInt(result.checkExistMolaxirId);
};

export const checkDuplicateEmail = async (email) => {
  const [result] = await database.query(
    `
    SELECT EXISTS(
      SELECT
        email
      FROM
       users
      WHERE
       email=?
    )as checkExistEmail
    `,
    [email]
  );
  return !!parseInt(result.checkExistEmail);
};

export const checkDuplicatePhoneNumber = async (phoneNumber) => {
  const [result] = await database.query(
    `
    SELECT EXISTS(
      SELECT
        phone_number
      FROM
       users
      WHERE
       phone_number=?)as checkExistPhoneNumber
    `,
    [phoneNumber]
  );
  return !!parseInt(result.checkExistPhoneNumber);
};

export const createUser = async (
  molaxirId,
  password,
  name,
  email,
  address,
  phoneNumber,
  gender,
  birth
) => {
  const createUser = await database.query(
    `
    INSERT
      INTO
        users(
          molaxir_id,
          password,
          name,
          email,
          address,
          phone_number,
          gender,
          birth)
      VALUES(
        ?,?,?,?,?,?,?,?
        )
    `,
    [molaxirId, password, name, email, address, phoneNumber, gender, birth]
  );
  return createUser;
};
