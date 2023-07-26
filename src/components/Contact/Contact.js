import React from 'react';
import { useFormik } from "formik";
import * as yup from 'yup';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './contact.scss';

const Contact = () => {
   const formik = useFormik({
      initialValues: {
          name: "",
          email: "",
      },
      onSubmit: (values) => {
          fetch('https://jsonplaceholder.typicode.com/users', {
              method: "POST",
              headers: {
                  'Content-Type' : 'application/json'
              },
              body: JSON.stringify(values)
          }).then(response => {
              if (response.status === 201) {
                  toast.success("Пользователь успешно создан", {
                      position: "top-center",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: 'colored'
                  })
              }
          })
      },
      validationSchema: yup.object().shape({
          name: yup.string()
              .min(3, "минимальное имя из 3х букв")
              .max(10, "максимально 10 букв")
              .required("обязательное поле"),
              email: yup.string()
              .email("Введите действительный email")
              .matches(/.*\..*/, "Email должен содержать точку")
              .required("Пожалуйста, введите email"),
            message: yup.string().required("Пожалуйста, введите сообщение")
      })
  })

  return (
    <div className="contact" style={{marginTop:'60px'}}>
      
      <div className="contact-bg">
       
          
            <div className="col-lg-6">
              <div className="contact-box">
                <div className="px-lg-3">
                  <div className="header-text">
                    <h3>Свяжитесь с нами</h3>
                    <p>Не стесняйтесь связаться с нами.</p>
                  </div>
                  <form onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Имя"
                        name="name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                      />
                     {formik.touched.name && formik.errors.name &&
                        <div style={{fontSize: '12px', color: "red"}}>{formik.errors.name}</div>
                    }
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                      />
                        {formik.touched.email && formik.errors.email &&
                        <div style={{fontSize: '12px', color: "red"}}>{formik.errors.email}</div>
                    }
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        cols="30"
                        rows="3"
                        placeholder="Опишите"
                        name="message"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.message}
                      />
                      {formik.touched.message && formik.errors.message ? (
                        <div className="error">{formik.errors.message}</div>
                      ) : null}
                    </div>
                    <div className="form-group mb-0">
                      <button type="submit" className="submit-btn">
                        ОТПРАВИТЬ
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
    
      <ToastContainer />
    </div>
  );
};

export default Contact;
