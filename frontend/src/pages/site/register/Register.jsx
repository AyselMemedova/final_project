// import React from 'react'
// import TextField from '@mui/material/TextField';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import { Link, Navigate, useNavigate } from "react-router-dom";
// import "./Register.css"
// import { useFormik } from "formik";
// import User from "../../../classes/User"
// import userValidation from '../../../validations/userValidation';
// import controller from "../../../services/api/request"
// import { endpoints } from '../../../services/api/constants';
// import Toastify from 'toastify-js';
// import 'toastify-js/src/toastify.css';

// const Register = () => {
//     const formik = useFormik
//     const navigate=useNavigate
//     ({
//         initialValues: {
//             username: "",
//             email: "",
//             password: "",
//             repeat_password: "",
//             role: "",
//             src: "",
//         },
//         validationSchema: userValidation,
//           onSubmit: async ({ username, password, email, src, role }, actions) => {
//             const newUser = new User(username, email, password, src, role);
//             await controller.post(endpoints.users, newUser)
//              actions.resetForm()
//             Toastify({
//                 text: "User Sign Up Successfully ",
//                 className: "info",
//                 style: {
//                   background: "linear-gradient(to right, #00b09b, #96c93d)",
//                 }
//               }).showToast().then(()=>{
//                 navigate("/login")
//               })
//         }
//     })

//     return (
//         <div className='register_headr'>
//             <h1 className='register_h1'>Register</h1>
//             <div className='register_all'>
//                 <div className="container">
//                     <div className="row ">
//                         <div className="col-6 register_hissesi">

//                             <form onSubmit={formik.handleSubmit}
//                                 className='form_register' style={{
//                                     backgroundColor: "##ffffffa9",
//                                     display: "flex",
//                                     gap: "20px",
//                                     flexDirection: "column",
//                                     width: "100%",
//                                     fontSize: "16px",
//                                     fontFamily: "Wix Madefor Display"

//                                 }} >
//                                 <TextField id="outlined-basic" type='text'
//                                     value={formik.values.username}
//                                     onChange={formik.handleChange}
//                                     name="username"
//                                     onBlur={formik.handleBlur}
//                                     label="User Name" variant="outlined" />
//                                 {formik.touched.username && formik.errors.username && (
//                                     <span style={{ color: "red" }}>{formik.errors.username}</span>
//                                 )}

//                                 <TextField id="outlined-basic" type='email'
//                                     value={formik.values.email}
//                                     onChange={formik.handleChange}
//                                     name="email"
//                                     onBlur={formik.handleBlur}
//                                     label="Email" variant="outlined" />
//                                 {formik.touched.email && formik.errors.email && (
//                                     <span style={{ color: "red" }}>{formik.errors.email}</span>
//                                 )}

//                                 <TextField id="outlined-basic" type='password'
//                                     value={formik.values.password}
//                                     onChange={formik.handleChange}
//                                     name="password"
//                                     onBlur={formik.handleBlur}
//                                     label="Password" variant="outlined" />
//                                 {formik.touched.password && formik.errors.password && (
//                                     <span style={{ color: "red" }}>{formik.errors.password}</span>
//                                 )}

//                                 <TextField id="outlined-basic" type='password'
//                                     value={formik.values.repeat_password}
//                                     onChange={formik.handleChange}
//                                     name="repeat_password"
//                                     onBlur={formik.handleBlur}
//                                     label="Repeat Password" variant="outlined" />
//                                 {formik.touched.repeat_password && formik.errors.repeat_password && (
//                                     <span style={{ color: "red" }}>{formik.errors.repeat_password}</span>
//                                 )}

//                                 <TextField id="outlined-basic" type='text'
//                                     value={formik.values.src}
//                                     onChange={formik.handleChange}
//                                     name="src"
//                                     onBlur={formik.handleBlur}
//                                     label="Profile Image" variant="outlined" />
//                                 {formik.touched.src && formik.errors.src && (
//                                     <span style={{ color: "red" }}>{formik.errors.src}</span>
//                                 )}

//                                 <FormControl fullWidth>
//                                     <InputLabel id="demo-simple-select-label">Role</InputLabel>
//                                     <Select
//                                         value={formik.values.role}
//                                         onChange={formik.handleChange}
//                                         name="role"
//                                         onBlur={formik.handleBlur}
//                                         labelId="demo-simple-select-label"
//                                         id="demo-simple-select"
//                                         label="Role"

//                                     >
//                                         <MenuItem value={"Journalist"}>Journalist</MenuItem>
//                                         <MenuItem value={"Client"}>Client</MenuItem>
//                                     </Select>
//                                 </FormControl>
//                                 {formik.touched.role && formik.errors.role && (
//                                     <span style={{ color: "red" }}>{formik.errors.role}</span>
//                                 )}
//                             </form>

//                             <div className='register_bottom'>
//                                 <Link to={'/login'} > HAVE YOU <br /> ACCOUNT ?</Link>
//                                 <button type='submit' variant="contained" color='rgb(29, 59, 42)'>Sign Up</button>
//                             </div>
//                         </div>

//                         <div className="col-6 register_sekil">
//                             <img style={{ width: "440px", marginLeft: "30px" }} src="https://images01.nicepagecdn.com/30/ce/30cea8d7da898338ab206b95941294cd.jpeg" alt="" />
//                             {/* <img src="https://static.wixstatic.com/media/2a1a02_1f38d9901e2345a483fd9e9c4d1d79bc~mv2.jpg/v1/fill/w_925,h_925,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2a1a02_1f38d9901e2345a483fd9e9c4d1d79bc~mv2.jpg" alt="" /> */}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Register



// import React from 'react';
// import TextField from '@mui/material/TextField';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import { Link, useNavigate } from "react-router-dom";
// import "./Register.css";
// import { useFormik } from "formik";
// import User from "../../../classes/User";
// import userValidation from '../../../validations/userValidation';
// import controller from "../../../services/api/request";
// import { endpoints } from '../../../services/api/constants';
// import Toastify from 'toastify-js';
// import 'toastify-js/src/toastify.css';

// const Register = () => {
//     const navigate = useNavigate();

//     const formik = useFormik({
//         initialValues: {
//             username: "",
//             email: "",
//             password: "",
//             repeat_password: "",
//             role: "",
//             src: "",
//         },
//         validationSchema: userValidation,
//         onSubmit: async ({ username, password, email, src, role }, actions) => {
//             const newUser = new User(username, email, password, src, role);
//             await controller.post(endpoints.users, newUser);
//             actions.resetForm();
//             Toastify({
//                 text: "User Sign Up Successfully",
//                 className: "info",
//                 style: {
//                     background: "linear-gradient(to right, #00b09b, #96c93d)",
//                 }
//             }).showToast();
//             navigate("/login");
//         }
//     });

//     return (
//         <div className='register_headr'>
//             <h1 className='register_h1'>Register</h1>
//             <div className='register_all'>
//                 <div className="container">
//                     <div className="row ">
//                         <div className="col-6 register_hissesi">
//                             <form onSubmit={formik.handleSubmit}
//                                 className='form_register' style={{
//                                     backgroundColor: "##ffffffa9",
//                                     display: "flex",
//                                     gap: "20px",
//                                     flexDirection: "column",
//                                     width: "100%",
//                                     fontSize: "16px",
//                                     fontFamily: "Wix Madefor Display"
//                                 }}>
//                                 <TextField id="outlined-basic" type='text'
//                                     value={formik.values.username}
//                                     onChange={formik.handleChange}
//                                     name="username"
//                                     onBlur={formik.handleBlur}
//                                     label="User Name" variant="outlined" />
//                                 {formik.touched.username && formik.errors.username && (
//                                     <span style={{ color: "red" }}>{formik.errors.username}</span>
//                                 )}

//                                 <TextField id="outlined-basic" type='email'
//                                     value={formik.values.email}
//                                     onChange={formik.handleChange}
//                                     name="email"
//                                     onBlur={formik.handleBlur}
//                                     label="Email" variant="outlined" />
//                                 {formik.touched.email && formik.errors.email && (
//                                     <span style={{ color: "red" }}>{formik.errors.email}</span>
//                                 )}

//                                 <TextField id="outlined-basic" type='password'
//                                     value={formik.values.password}
//                                     onChange={formik.handleChange}
//                                     name="password"
//                                     onBlur={formik.handleBlur}
//                                     label="Password" variant="outlined" />
//                                 {formik.touched.password && formik.errors.password && (
//                                     <span style={{ color: "red" }}>{formik.errors.password}</span>
//                                 )}

//                                 <TextField id="outlined-basic" type='password'
//                                     value={formik.values.repeat_password}
//                                     onChange={formik.handleChange}
//                                     name="repeat_password"
//                                     onBlur={formik.handleBlur}
//                                     label="Repeat Password" variant="outlined" />
//                                 {formik.touched.repeat_password && formik.errors.repeat_password && (
//                                     <span style={{ color: "red" }}>{formik.errors.repeat_password}</span>
//                                 )}

//                                 <TextField id="outlined-basic" type='text'
//                                     value={formik.values.src}
//                                     onChange={formik.handleChange}
//                                     name="src"
//                                     onBlur={formik.handleBlur}
//                                     label="Profile Image" variant="outlined" />
//                                 {formik.touched.src && formik.errors.src && (
//                                     <span style={{ color: "red" }}>{formik.errors.src}</span>
//                                 )}

//                                 <FormControl fullWidth>
//                                     <InputLabel id="demo-simple-select-label">Role</InputLabel>
//                                     <Select
//                                         value={formik.values.role}
//                                         onChange={formik.handleChange}
//                                         name="role"
//                                         onBlur={formik.handleBlur}
//                                         labelId="demo-simple-select-label"
//                                         id="demo-simple-select"
//                                         label="Role"
//                                     >
//                                         <MenuItem value={"Journalist"}>Journalist</MenuItem>
//                                         <MenuItem value={"Client"}>Client</MenuItem>
//                                     </Select>
//                                 </FormControl>
//                                 {formik.touched.role && formik.errors.role && (
//                                     <span style={{ color: "red" }}>{formik.errors.role}</span>
//                                 )}
//                                 <div className='register_bottom'>
//                                     <Link to={'/login'}>HAVE YOU <br /> ACCOUNT?</Link>
//                                     <button type='submit' variant="contained" color='rgb(29, 59, 42)'>Sign Up</button>
//                                 </div>
//                             </form>
//                         </div>

//                         <div className="col-6 register_sekil">
//                             <img style={{ width: "440px", marginLeft: "30px" }} src="https://images01.nicepagecdn.com/30/ce/30cea8d7da898338ab206b95941294cd.jpeg" alt="" />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Register;

import React from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import { useFormik } from "formik";
import User from "../../../classes/User";
import userValidation from '../../../validations/userValidation';
import controller from "../../../services/api/request";
import { endpoints } from '../../../services/api/constants';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

const Register = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
            repeat_password: "",
            role: "",
            src: "",
        },
        validationSchema: userValidation,
        onSubmit: async (values, actions) => {
            try {
                const { username, email, password, src, role } = values;
                const newUser = new User(username, email, password, src, role);
                await controller.post(endpoints.users, newUser);
                actions.resetForm();
                Toastify({
                    text: "User Sign Up Successfully",
                    className: "info",
                    style: {
                        background: "linear-gradient(to right, #00b09b, #96c93d)",
                    }
                }).showToast();
                navigate("/login");
            } catch (error) {
                console.error("Error during user registration:", error);
                Toastify({
                    text: "User Sign Up Failed",
                    className: "error",
                    style: {
                        background: "linear-gradient(to right, #ff5f6d, #ffc371)",
                    }
                }).showToast();
            }
        }
    });

    return (
        <div className='register_headr'>
            <h1 className='register_h1'>Register</h1>
            <div className='register_all'>
                <div className="container">
                    <div className="row ">
                        <div className="col-6 register_hissesi">
                            <form onSubmit={formik.handleSubmit}
                                className='form_register' style={{
                                    backgroundColor: "##ffffffa9",
                                    display: "flex",
                                    gap: "20px",
                                    flexDirection: "column",
                                    width: "100%",
                                    fontSize: "16px",
                                    fontFamily: "Wix Madefor Display"
                                }}>
                                <TextField id="outlined-basic" type='text'
                                    value={formik.values.username}
                                    onChange={formik.handleChange}
                                    name="username"
                                    onBlur={formik.handleBlur}
                                    label="User Name" variant="outlined" />
                                {formik.touched.username && formik.errors.username && (
                                    <span style={{ color: "red" }}>{formik.errors.username}</span>
                                )}

                                <TextField id="outlined-basic" type='email'
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    name="email"
                                    onBlur={formik.handleBlur}
                                    label="Email" variant="outlined" />
                                {formik.touched.email && formik.errors.email && (
                                    <span style={{ color: "red" }}>{formik.errors.email}</span>
                                )}

                                <TextField id="outlined-basic" type='password'
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    name="password"
                                    onBlur={formik.handleBlur}
                                    label="Password" variant="outlined" />
                                {formik.touched.password && formik.errors.password && (
                                    <span style={{ color: "red" }}>{formik.errors.password}</span>
                                )}

                                <TextField id="outlined-basic" type='password'
                                    value={formik.values.repeat_password}
                                    onChange={formik.handleChange}
                                    name="repeat_password"
                                    onBlur={formik.handleBlur}
                                    label="Repeat Password" variant="outlined" />
                                {formik.touched.repeat_password && formik.errors.repeat_password && (
                                    <span style={{ color: "red" }}>{formik.errors.repeat_password}</span>
                                )}

                                <TextField id="outlined-basic" type='text'
                                    value={formik.values.src}
                                    onChange={formik.handleChange}
                                    name="src"
                                    onBlur={formik.handleBlur}
                                    label="Profile Image" variant="outlined" />
                                {formik.touched.src && formik.errors.src && (
                                    <span style={{ color: "red" }}>{formik.errors.src}</span>
                                )}

                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Role</InputLabel>
                                    <Select
                                        value={formik.values.role}
                                        onChange={formik.handleChange}
                                        name="role"
                                        onBlur={formik.handleBlur}
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Role"
                                    >
                                        <MenuItem value={"Journalist"}>Journalist</MenuItem>
                                        <MenuItem value={"Client"}>Client</MenuItem>
                                    </Select>
                                </FormControl>
                                {formik.touched.role && formik.errors.role && (
                                    <span style={{ color: "red" }}>{formik.errors.role}</span>
                                )}
                                <div className='register_bottom'>
                                    <Link to={'/login'}>HAVE YOU <br /> ACCOUNT?</Link>
                                    <button type='submit' variant="contained" color='rgb(29, 59, 42)'>Sign Up</button>
                                </div>
                            </form>
                        </div>

                        <div className="col-6 register_sekil">
                            <img style={{ width: "440px", marginLeft: "30px" }} src="https://images01.nicepagecdn.com/30/ce/30cea8d7da898338ab206b95941294cd.jpeg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
