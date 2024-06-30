// import React, { useContext } from 'react'
// import { Helmet } from 'react-helmet'
// import MainContext from '../../../context/context'
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// // import "./add.css"
// import axios from 'axios';

// const Addİmg = () => {
//     const { data, setdata } = useContext(MainContext)

//   return (
//     <div>
//         <Helmet>
//                 <title>Add İmage</title>
//             </Helmet>
//             <div>
//             <Formik
//                     initialValues={{    
//                         title:"",
//                         ingridient:"",
//                         Preperation:"",
//                         Vegetables:"",
//                         icindekiler:"",
//                         Dressing:"",
//                         yaglar:"",
//                         text:"",
//                         description:"",
//                         enjoy:"",
//                         price:"",
//                         image:"",
//                         count:'', totalPrice:''}}

//                     onSubmit={(values, { setSubmitting }) => {
//                         setTimeout(() => {
//                             alert(JSON.stringify(values, null, 2));
//                             axios.post("http://localhost:8080/api/sekil", {
//                                 title: values.title,
//                                 // ingridient:values.ingridient,
//                                 // Preperation:values.Preperation,
//                                 // Vegetables:values.Vegetables,
//                                 // icindekiler:values.icindekiler,
//                                 // Dressing:values.Dressing,
//                                 // yaglar:values.yaglar,
//                                 // text:values.text,
//                                 // description:values.description,
//                                 // enjoy:values.enjoy,
//                                 image:values.image,
//                                 // price: values.price,
//                                 count: 1,
//                                 totalPrice:values.price
//                             })
//                             setdata([...data,values])
//                             setSubmitting(false);
//                         }, 400);
//                     }}
//                 >
//                     {({ isSubmitting }) => (
//                         <Form>
//                             <Field type="text" name="title" id="field" placeholder="Title" />
//                             <ErrorMessage name="title" component="div" />

//                             <Field type="text" name="image" id="field" placeholder="Image" />
//                             <ErrorMessage name="image" component="div" />


//                             {/* <Field type="text" name="description" id="field" placeholder="Description" />
//                             <ErrorMessage name="description" component="div" />

//                             <Field type="text" name="haqqinda" id="field" placeholder="haqqinda" />
//                             <ErrorMessage name="haqqinda" component="div" />

//                             <Field type="text" name="haqqindaki" id="field" placeholder="haqqindaki" />
//                             <ErrorMessage name="haqqindaki" component="div" />

//                             <Field type="text" name="haqqindauc" id="field" placeholder="haqqindauc" />
//                             <ErrorMessage name="haqqindauc" component="div" /> */}

//                             <Field type="number" name="price" id="field" placeholder="Price" />
//                             <ErrorMessage name="price" component="div" />

//                             <button id='submit' type="submit" disabled={isSubmitting}>
//                                 Submit
//                             </button>
//                         </Form>
//                     )}
//                 </Formik>

//             </div>
      
//     </div>
//   )
// }

// export default Addİmg
