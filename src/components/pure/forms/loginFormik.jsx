import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {
 Formik, Field, Form, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';

/**
 * * Data validation - Yup Schema
 */
const loginSchema = (Yup
    .object()
    .shape(
        {
            email: Yup.string()
                .email('Formato de email inválido, papá!')
                .required('Meté un email loco...'),
            password: Yup.string()
                .required('Necesitás una contraseña...'),
        },
    )
);

/**
 * * Register Form - functional component w/ Formik & Yup
 */
function LoginFormik() {
    // Navigation functions
    const location = useLocation();
    console.log(`We are in Route ${location.pathname}`);
    const history = useHistory();
    const navigateTo = (path) => {
        history.push(path);
    };

    // Login
    const initialCredentials = {
        email: '',
        password: '',
    };

    return (
      <div>
        <h4>Sign Up</h4>
        <Formik
                // **** Initial values
          initialValues={initialCredentials}
                // **** Yup validation
          validationSchema={loginSchema}
                // **** onSubmit
          onSubmit={async (values) => {
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                    alert(JSON.stringify(values, null, 2));
                    // Data storage in localStorage
                    await localStorage.setItem('credentials', values);
                    navigateTo('/');
                }}
        >
          {/* We obtain props from Formik */}
          {({
                    values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                }) => (
                  <Form>
                    <label htmlFor="email">Email</label>
                    {/* Email Errors */}
                    {
                            errors.email && touched.email
                            && (
                            <ErrorMessage name="email" component="div" />
                            )
                        }
                    <Field id="email" type="email" name="email" placeholder="example@email.com" />

                    <label htmlFor="password">Password</label>
                    {/* Password Errors */}
                    {
                            errors.password && touched.password
                            && (
                            <ErrorMessage name="password" component="div" />
                            )
                        }
                    <Field
                      id="password"
                      name="password"
                      placeholder="password"
                      type="password"
                    />
                    <button type="submit">Ingresar</button>
                    {isSubmitting ? (<p>Validando credenciales...</p>) : null}
                  </Form>
                )}
        </Formik>
      </div>
    );
}

export default LoginFormik;
