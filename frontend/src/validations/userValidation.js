import * as Yup from "yup";

const userValidation = Yup.object().shape({
    username: Yup.string().min(2).required(),
    password: Yup.string()
      .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/, "password regex failed")
      .required(),
    repeat_password: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match",
    ),
    // src:Yup.string().url().required(),
    role: Yup.string().oneOf(["client", "journalist"]).required(),
    email: Yup.string().email().required(),
})

export default userValidation;