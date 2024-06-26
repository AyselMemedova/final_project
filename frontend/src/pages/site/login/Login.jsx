// // import React from 'react';
// // import TextField from '@mui/material/TextField';
// // import { Link, useNavigate } from "react-router-dom";
// // import { useFormik } from "formik";
// // import Swal from 'sweetalert2';
// // import Toastify from 'toastify-js';
// // import 'toastify-js/src/toastify.css';
// // import loginValidation from '../../../validations/loginValidation'; // Correct import path
// // import controller from '../../../services/api/request';
// // import { endpoints } from '../../../services/api/constants';

// // const Login = () => {
// //   const navigate = useNavigate();
// //   const formik = useFormik({
// //     initialValues: {
// //       email: "",
// //       password: "",
// //     },

// //     validationSchema: loginValidation,
// //     onSubmit: async (values, actions) => {
// //       const { email, password } = values;
// //       try {
// //         const users = await controller.getAll(endpoints.users);
// //         const validUser = users.data.find((x) => x.email === email && x.password === password);

// //         if (validUser) {
// //           actions.resetForm();
// //           Swal.fire({
// //             position: "top-end",
// //             icon: "success",
// //             title: "Login successful",
// //             showConfirmButton: false,
// //             timer: 1000,
// //           }).then(() => {
// //             if (validUser.role === "client") {
// //               navigate("/");
// //             } else {
// //               navigate("/dashboard");
// //             }
// //           });
// //         } else {
// //           throw new Error("Invalid credentials");
// //         }
// //       } catch (error) {
// //         actions.resetForm();
// //         Swal.fire({
// //           position: "top-end",
// //           icon: "error",
// //           title: "Email or password is incorrect",
// //           showConfirmButton: false,
// //           timer: 1000,
// //         });
// //       }
// //     },
// //   });


// // import TextField from "@mui/material/TextField";
// // import { Button } from "@mui/material";
// // import { Link, useNavigate } from "react-router-dom";
// // import { useFormik } from "formik";
// // // import controller from "../services/api/requests.js";
// // import Swal from "sweetalert2";
// // // import loginValidation from "../validations/login.validation.js";
// // import { useSelector, useDispatch } from "react-redux";
// // import { login } from "../services/redux/slices/userSlice.js";
// // import { useEffect } from "react";
// // import Cookies from "js-cookie";
// // import loginValidation from '../../../validations/loginValidation'; // Correct import path
// // import controller from '../../../services/api/request';
// // import { endpoints } from '../../../services/api/constants';

// // const Login = () => {
// //   const navigate = useNavigate("");
// //   const dispatch = useDispatch();
// //   const user = useSelector((state) => state.user);

// //   useEffect(()=>{
// //     if(user.id){
// //       navigate('/');
// //     }
// //   },[navigate,user]);

// //   const formik = useFormik({
// //     initialValues: {
// //       email: "",
// //       password: "",
// //     },
// //     validationSchema: loginValidation,
// //     onSubmit: async ({ email, password }, actions) => {
// //       const response = await controller.post('/login',{email:email,password:password});
      
// //       if (response.auth) {
// //         actions.resetForm();
// //         dispatch(login(response.user));
// //         //token
// //         const token = response.token;
// //         Cookies.set('token', token, {expires: 1});
// //         Swal.fire({
// //           position: "top-end",
// //           icon: "success",
// //           title: response.message,
// //           showConfirmButton: false,
// //           timer: 1000,
// //         }).then(() => {
// //           navigate("/");
// //         });
// //       } else {
// //         Swal.fire({
// //           position: "top-end",
// //           icon: "error",
// //           title: response.message,
// //           showConfirmButton: false,
// //           timer: 1000,
// //         });
// //       }
// //     },
// //   });
// //   return (
// //     <div>
// //       <h1 className='register_h1'>Login</h1>
// //       <div className='register_all' >
// //         <div className='container'>
// //           <div className='row'>
// //             <div className='col-6 login_hissesi'>
// //               <form  
// //                 onSubmit={(e) => {
// //                   e.preventDefault();
// //                   formik.handleSubmit(e);
// //                 }}
// //                 className='form_register'
// //                 style={{
// //                   marginTop:"90px",
// //                   backgroundColor: "#ffffff8e",
// //                   display: "flex",
// //                   gap: "20px",
// //                   flexDirection: "column",
// //                   width: "100%",
// //                   fontSize: "16px",
// //                   fontFamily: "Wix Madefor Display"
// //                 }}
// //               >
// //                 <TextField
// //                 style={{marginTop:"50px", marginBottom:"50px"}}
// //                   id="email"
// //                   type='email'
// //                   value={formik.values.email}
// //                   onChange={formik.handleChange}
// //                   name="email"
// //                   onBlur={formik.handleBlur}
// //                   label="Email"
// //                   variant="outlined"
// //                 />
// //                 {formik.touched.email && formik.errors.email && (
// //                   <span style={{ color: "red" }}>{formik.errors.email}</span>
// //                 )}

// //                 <TextField
// //                   id="password"
// //                   type='password'
// //                   value={formik.values.password}
// //                   onChange={formik.handleChange}
// //                   name="password"
// //                   onBlur={formik.handleBlur}
// //                   label="Password"
// //                   variant="outlined"
// //                 />
// //                 {formik.touched.password && formik.errors.password && (
// //                   <span style={{ color: "red" }}>{formik.errors.password}</span>
// //                 )}

// //                 <div className='register_bottom'>
// //                   <Link to={'/register'}>DONT YOU HAVE <br /> ACCOUNT?</Link>
// //                   <button type='submit' variant="contained">Login</button>
// //                 </div>
// //               </form>
// //             </div>

// //             <div className="col-6 register_sekil">
// //               <img
// //                 style={{ width: "440px", marginLeft: "30px" }}
// //                 src="https://images01.nicepagecdn.com/30/ce/30cea8d7da898338ab206b95941294cd.jpeg"
// //                 alt=""
// //               />
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Login;


// import React, { useEffect } from 'react';
// import TextField from '@mui/material/TextField';
// import { Link, useNavigate } from "react-router-dom";
// import { useFormik } from "formik";
// import Swal from 'sweetalert2';
// import Cookies from 'js-cookie';
// import { useSelector, useDispatch } from "react-redux";
// import { login } from '../../../services/redux/slices/userSlice'; // Correct import path
// import loginValidation from '../../../validations/loginValidation'; // Correct import path
// import controller from '../../../services/api/request';
// import { endpoints } from '../../../services/api/constants';

// const Login = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.user);

//   useEffect(() => {
//     if (user.id) {
//       navigate('/');
//     }
//   }, [navigate, user]);

//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     validationSchema: loginValidation,
//     onSubmit: async ({ email, password }, actions) => {
//       const response = await controller.post('/login', { email, password });

//       if (response.auth) {
//         actions.resetForm();
//         dispatch(login(response.user));
//         // token
//         const token = response.token;
//         Cookies.set('token', token, { expires: 1 });
//         Swal.fire({
//           position: "top-end",
//           icon: "success",
//           title: response.message,
//           showConfirmButton: false,
//           timer: 1000,
//         }).then(() => {
//           navigate("/");
//         });
//       } else {
//         Swal.fire({
//           position: "top-end",
//           icon: "error",
//           title: response.message,
//           showConfirmButton: false,
//           timer: 1000,
//         });
//       }
//     },
//   });

//   return (
//     <div>
//       <h1 className='register_h1'>Login</h1>
//       <div className='register_all'>
//         <div className='container'>
//           <div className='row'>
//             <div className='col-6 login_hissesi'>
//               <form
//                 onSubmit={(e) => {
//                   e.preventDefault();
//                   formik.handleSubmit(e);
//                 }}
//                 className='form_register'
//                 style={{
//                   marginTop: "90px",
//                   backgroundColor: "#ffffff8e",
//                   display: "flex",
//                   gap: "20px",
//                   flexDirection: "column",
//                   width: "100%",
//                   fontSize: "16px",
//                   fontFamily: "Wix Madefor Display"
//                 }}
//               >
//                 <TextField
//                   style={{ marginTop: "50px", marginBottom: "50px" }}
//                   id="email"
//                   type='email'
//                   value={formik.values.email}
//                   onChange={formik.handleChange}
//                   name="email"
//                   onBlur={formik.handleBlur}
//                   label="Email"
//                   variant="outlined"
//                 />
//                 {formik.touched.email && formik.errors.email && (
//                   <span style={{ color: "red" }}>{formik.errors.email}</span>
//                 )}

//                 <TextField
//                   id="password"
//                   type='password'
//                   value={formik.values.password}
//                   onChange={formik.handleChange}
//                   name="password"
//                   onBlur={formik.handleBlur}
//                   label="Password"
//                   variant="outlined"
//                 />
//                 {formik.touched.password && formik.errors.password && (
//                   <span style={{ color: "red" }}>{formik.errors.password}</span>
//                 )}

//                 <div className='register_bottom'>
//                   <Link to={'/register'}>DONT YOU HAVE <br /> ACCOUNT?</Link>
//                   <button type='submit' variant="contained">Login</button>
//                 </div>
//               </form>
//             </div>

//             <div className="col-6 register_sekil">
//               <img
//                 style={{ width: "440px", marginLeft: "30px" }}
//                 src="https://images01.nicepagecdn.com/30/ce/30cea8d7da898338ab206b95941294cd.jpeg"
//                 alt=""
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

// import React, { useEffect } from 'react';
// import TextField from '@mui/material/TextField';
// import { Link, useNavigate } from "react-router-dom";
// import { useFormik } from "formik";
// import Swal from 'sweetalert2';
// import Cookies from 'js-cookie';
// import { useSelector, useDispatch } from "react-redux";
// import { login } from '../../../services/redux/slices/userSlice'; 
// import loginValidation from '../../../validations/loginValidation'; // Correct import path
// import controller from '../../../services/api/request';
// import { endpoints } from '../../../services/api/constants';

// const Login = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.user);

//   useEffect(() => {
//     if (user.id) {
//       navigate('/');
//     }
//   }, [navigate, user]);

//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     validationSchema: loginValidation,
//     onSubmit: async ({ email, password }, actions) => {
//       try {
//         const response = await controller.post(endpoints.login, { email, password }); // Use endpoints.login here

//         if (response.auth) {
//           actions.resetForm();
//           dispatch(login(response.user));
//           const token = response.token;
//           Cookies.set('token', token, { expires: 1 });
//           Swal.fire({
//             position: "top-end",
//             icon: "success",
//             title: response.message,
//             showConfirmButton: false,
//             timer: 1000,
//           }).then(() => {
//             navigate("/");
//           });
//         } else {
//           Swal.fire({
//             position: "top-end",
//             icon: "error",
//             title: response.message,
//             showConfirmButton: false,
//             timer: 1000,
//           });
//         }
//       } catch (error) {
//         // console.error('API POST request error:', error);
//         Swal.fire({
//           position: "top-end",
//           icon: "error",
//           title: "An error occurred while logging in",
//           showConfirmButton: false,
//           timer: 1000,
//         });
//       }
//     },
//   });

//   return (
//     <div>
//       <h1 className='register_h1'>Login</h1>
//       <div className='register_all'>
//         <div className='container'>
//           <div className='row'>
//             <div className='col-6 login_hissesi'>
//               <form
//                 onSubmit={(e) => {
//                   e.preventDefault();
//                   formik.handleSubmit(e);
//                 }}
//                 className='form_register'
//                 style={{
//                   marginTop: "90px",
//                   backgroundColor: "#ffffff8e",
//                   display: "flex",
//                   gap: "20px",
//                   flexDirection: "column",
//                   width: "100%",
//                   fontSize: "16px",
//                   fontFamily: "Wix Madefor Display"
//                 }}
//               >
//                 <TextField
//                   style={{ marginTop: "50px", marginBottom: "50px" }}
//                   id="email"
//                   type='email'
//                   value={formik.values.email}
//                   onChange={formik.handleChange}
//                   name="email"
//                   onBlur={formik.handleBlur}
//                   label="Email"
//                   variant="outlined"
//                 />
//                 {formik.touched.email && formik.errors.email && (
//                   <span style={{ color: "red" }}>{formik.errors.email}</span>
//                 )}

//                 <TextField
//                   id="password"
//                   type='password'
//                   value={formik.values.password}
//                   onChange={formik.handleChange}
//                   name="password"
//                   onBlur={formik.handleBlur}
//                   label="Password"
//                   variant="outlined"
//                 />
//                 {formik.touched.password && formik.errors.password && (
//                   <span style={{ color: "red" }}>{formik.errors.password}</span>
//                 )}

//                 <div className='register_bottom'>
//                   <Link to={'/register'}>DONT YOU HAVE <br /> ACCOUNT?</Link>
//                   <button type='submit' variant="contained">Login</button>
//                 </div>
//               </form>
//             </div>

//             <div className="col-6 register_sekil">
//               <img
//                 style={{ width: "440px", marginLeft: "30px" }}
//                 src="https://images01.nicepagecdn.com/30/ce/30cea8d7da898338ab206b95941294cd.jpeg"
//                 alt=""
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import { useSelector, useDispatch } from "react-redux";
import { login } from '../../../services/redux/slices/userSlice';
import loginValidation from '../../../validations/loginValidation';
import controller from '../../../services/api/request';
import { endpoints } from '../../../services/api/constants';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user.id) {
      navigate('/');
    }
  }, [navigate, user]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidation,
    onSubmit: async ({ email, password }, actions) => {
      try {
        const response = await controller.post(endpoints.login, { email, password });

        if (response.auth) {
          actions.resetForm();
          dispatch(login(response.user));
          const token = response.token;
          Cookies.set('token', token, { expires: 1 });
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: response.message,
            showConfirmButton: false,
            timer: 1000,
          }).then(() => {
            navigate("/");
          });
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: response.message,
            showConfirmButton: false,
            timer: 1000,
          });
        }
      } catch (error) {
        console.error('API POST request error:', error);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "An error occurred while logging in",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    },
  });

  return (
    <div>
      <h1 className='register_h1'>Login</h1>
      <div className='register_all'>
        <div className='container'>
          <div className='row'>
            <div className='col-6 login_hissesi'>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  formik.handleSubmit(e);
                }}
                className='form_register'
                style={{
                  marginTop: "90px",
                  backgroundColor: "#ffffff8e",
                  display: "flex",
                  gap: "20px",
                  flexDirection: "column",
                  width: "100%",
                  fontSize: "16px",
                  fontFamily: "Wix Madefor Display"
                }}
              >
                <TextField
                  style={{ marginTop: "50px", marginBottom: "50px" }}
                  id="email"
                  type='email'
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  name="email"
                  onBlur={formik.handleBlur}
                  label="Email"
                  variant="outlined"
                />
                {formik.touched.email && formik.errors.email && (
                  <span style={{ color: "red" }}>{formik.errors.email}</span>
                )}

                <TextField
                  id="password"
                  type='password'
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  name="password"
                  onBlur={formik.handleBlur}
                  label="Password"
                  variant="outlined"
                />
                {formik.touched.password && formik.errors.password && (
                  <span style={{ color: "red" }}>{formik.errors.password}</span>
                )}

                <div className='register_bottom'>
                  <Link to={'/register'}>DONT YOU HAVE <br /> ACCOUNT?</Link>
                  <button type='submit' variant="contained">Login</button>
                </div>
              </form>
            </div>

            <div className="col-6 register_sekil">
              <img
                style={{ width: "440px", marginLeft: "30px" }}
                src="https://images01.nicepagecdn.com/30/ce/30cea8d7da898338ab206b95941294cd.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
