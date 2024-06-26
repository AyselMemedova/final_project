// import * as Yup from "yup";

// const loginValidation = Yup.object().shape({
//   password: Yup.string()
//     .matches 
//     .required(),
//   email: Yup.string().email().required(),
// });

// export default loginValidation;

import * as Yup from "yup";

const loginValidation = Yup.object().shape({
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string()
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/, "Password must contain at least 5 characters, one letter and one number")
    .required("Password is required"),
});

export default loginValidation;
