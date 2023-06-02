import nodemailer from "nodemailer";

//6자리 인증번호(토큰) 생성
export const getToken = () => {
  const tokenLength = parseInt(process.env.SIGNUP_TOKEN_LENGTH);

  const result = //
    String(Math.floor(Math.random() * 10 ** tokenLength)).padStart(
      tokenLength,
      "0"
    );
  return result;
};

//생성된 토큰을 발송할 메일 양식
export const reqTokenTemplate = () => {
  const token = getToken();
  const result = `
        <html>
            <body>
                <div style="display: flex; flex-direction: column; align-items: center;">
                    <div style="width: 500px;">
                <h1>안녕하세요. molaxir입니다. 인증번호 입니다. </h1>
                <hr/>
                <div style="color: blue;">인증번호 : ${token}</div>
            </body>
        </html>
    `;
  return result;
};

//토큰을 이메일로 발송
export const sendTokenTemplateToEmail = async (email, emailTemplate) => {
  const authUser = process.env.GOOGLE_MAIL_AUTH_USER;
  const authPass = process.env.GOOGLE_MAIL_AUTH_PASS;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: authUser,
      pass: authPass,
    },
  });
  const sendMail = await transporter.sendMail({
    from: "zeler1004@gmail.com",
    to: email,
    subject: `[API테스트][인증번호요청] 안녕하세요. molaxir입니다.`,
    html: emailTemplate,
  });

  return console.log(`${email}주소로 ${emailTemplate}을 전송합니다,`);
};
