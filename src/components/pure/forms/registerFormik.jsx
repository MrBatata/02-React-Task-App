import React from 'react';
import {
 Formik, Form, Field, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import { ROLES } from '../../../models/roles.enum';
import { User } from '../../../models/user.class';

/**
 * * Register Form - functional component w/ Formik & Yup
 */
function RegisterFormik() {
    const initialValues = new User('', '', '', '');

    // Data validation - Yup Schema
    const registerSchema = Yup.object()
        .shape({
            username: Yup.string()
                .min(6, 'Username too short')
                .max(12, 'Username too long')
                .required('Username is required'),
            email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
            password: Yup.string()
                .min(8, 'Password too short')
                .required('Password is required'),
            confirm: Yup.string()
                .when('password', {
                    is: (pass) => (!!(pass && pass.length > 0)),
                    then: Yup.string()
                        .oneOf(
                            [Yup.ref('password')],
                            '¡Passwords must match!',
                        ),
                })
                .required('You must confirm the password'),
            role: Yup.string()
                .oneOf(
                    [ROLES.USER, ROLES.ADMIN],
                    'You must select a Role: User / Admin',
                )
                .required('Role is required'),
        });

    return (
      <div>
        <h4>Completar el formulario</h4>

        <Formik
                // Initial values
          initialValues={initialValues}
                // Yup Validation Schema
          validationSchema={registerSchema}
                // onSubmit Event
          onSubmit={async (values) => {
                    // Simulates a delay time response
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                    alert(JSON.stringify(values, null, 2));
                }}
        >
          {/* Formik props */}
          {
                    ({
                        values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                    }) => (
                      <Form>
                        {/* *** User Name Input *** */}
                        <Field id="username" type="text" name="username" placeholder="Ingrese nombre de usuario" />
                        {/* username Errors */}
                        {
                                errors.username && touched.username
                                && (
                                <ErrorMessage name="username" component="div" />
                                )
                            }
                        <br />

                        {/* *** Email Input *** */}
                        <Field id="email" type="email" name="email" placeholder="ejemplo@correo.com" />
                        {/* Email Errors */}
                        {
                                errors.email && touched.email
                                && (
                                <ErrorMessage name="email" component="div" />
                                )
                            }
                        <br />

                        {/* *** Password Input *** */}
                        <Field id="password" name="password" placeholder="Ingrese contraseña" type="password" />
                        {/* Password Errors */}
                        {
                                errors.password && touched.password
                                && (
                                <ErrorMessage name="password" component="div" />
                                )
                            }
                        <br />

                        {/* *** Confirmation Input *** */}
                        <Field id="confirm" name="confirm" placeholder="Confirmar contraseña" type="password" />
                        {/* Confirm Errors */}
                        {
                                errors.confirm && touched.confirm
                                && (
                                <ErrorMessage name="confirm" component="div" />
                                )
                            }
                        <br />

                        {/* Submit button */}
                        <button type="submit">Registrarse</button>
                        {isSubmitting ? (<p>Registrando usuario...</p>) : null}
                      </Form>
                    )

                }
        </Formik>
      </div>
    );
}

export default RegisterFormik;
