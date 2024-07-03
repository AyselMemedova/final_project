import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import MainContext from '../../../context/context';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import "./add.css";

const Add = () => {
  const { data, setData } = useContext(MainContext);

  return (
    <>
      <Helmet>
        <title>Add</title>
      </Helmet>
      <div className='add_all'>
        <h1 className='add_all_head' >Add</h1>
        <Formik
          initialValues={{ title: '', price: '', description: '', haqqinda: '', haqqindaki: '', haqqindauc: '', count: '', totalPrice: '' }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              axios.post("http://localhost:8080/api/mehsular", {
                title: values.title,
                price: values.price,
                description: values.description,
                haqqinda: values.haqqinda,
                haqqindaki: values.haqqindaki,
                haqqindauc: values.haqqindauc,
                count: 1,
                totalPrice: values.price
              }).then((response) => {
                setData([ ...response.data]);
                setSubmitting(false);
              }).catch((error) => {
                console.error("There was an error adding the item!", error);
                setSubmitting(false);
              });
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="text" name="title" id="field" placeholder="Title" />
              <ErrorMessage name="title" component="div" />

              <Field type="text" name="description" id="field" placeholder="Description" />
              <ErrorMessage name="description" component="div" />

              <Field type="text" name="haqqinda" id="field" placeholder="haqqinda" />
              <ErrorMessage name="haqqinda" component="div" />

              <Field type="text" name="haqqindaki" id="field" placeholder="haqqindaki" />
              <ErrorMessage name="haqqindaki" component="div" />

              <Field type="text" name="haqqindauc" id="field" placeholder="haqqindauc" />
              <ErrorMessage name="haqqindauc" component="div" />

              <Field type="number" name="price" id="field" placeholder="Price" />
              <ErrorMessage name="price" component="div" />

              <button id="submit" type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Add;
