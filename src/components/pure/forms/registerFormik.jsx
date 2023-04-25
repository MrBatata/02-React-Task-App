import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

/*
*   Models Imports
*/
import { ROLES } from '../../../models/roles.enum';
import { User } from '../../../models/user.class';

/*
*   Register Form - functional component w/ Formik & Yup
*/
const Registerformik = () => {

    let user = new User();

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '', // to confirm password
        role: ROLES.USER
    }

    /*
    *   Data validation - Yup Schema
    */
    const registerSchema = Yup.object().shape(
        {
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
                .when("password", {
                    is: pass => (pass && pass.length > 0 ? true : false),
                    then: Yup.string()
                        .oneOf(
                            [Yup.ref("password")],
                            '¡Passwords must match!'
                        )
                })
                .required('You must confirm the password'),
            role: Yup.string()
                .oneOf(
                    [ROLES.USER, ROLES.ADMIN],
                    'You must select a Role: User / Admin'
                )
                .required('Role is required'),
        }
    )

    const submit = (values) => {
        alert('Register user')
    }

    return (
        <div>
            <h4>Register Formik</h4>

            <Formik
                // **** Initial values
                initialValues={initialValues}
                // *** Yup Validation Schema ***
                validationSchema={registerSchema}
                // ** onSubmit Event
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2))
                }}
            >
                {/* We obtain props from Formik */}
                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                    <Form>
                        {/* *** User Name Input *** */}
                        {/* username Errors */}
                        {
                            errors.username && touched.username &&
                            (
                                <ErrorMessage name="username" component='div'></ErrorMessage>
                            )
                        }
                        <Field id="username" type="text" name="username" placeholder="Ingrese nombre de usuario" />
                        <br></br>

                        {/* *** Email Input *** */}
                        {/* Email Errors */}
                        {
                            errors.email && touched.email &&
                            (
                                <ErrorMessage name="email" component='div'></ErrorMessage>
                            )
                        }
                        <Field id="email" type="email" name="email" placeholder="ejemplo@correo.com" />
                        <br></br>

                        {/* *** Password Input *** */}
                        {/* Password Errors */}
                        {
                            errors.password && touched.password &&
                            (
                                <ErrorMessage name="password" component='div'></ErrorMessage>
                            )
                        }
                        <Field id="password" name="password" placeholder="Ingrese contraseña" type='password' />
                        <br></br>

                        {/* *** Confirmation Input *** */}
                        {/* Confirm Errors */}
                        {
                            errors.confirm && touched.confirm &&
                            (
                                <ErrorMessage name="confirm" component='div'></ErrorMessage>
                            )
                        }
                        <Field id="confirm" name="confirm" placeholder="Confirmar contraseña" type='password' />
                        <br></br>

                        {/* *** Role Input *** */}
                        {/* TODO: for now, not optional to choose between user/admin in register */}
                        {/* <Field id="role" name="role" placeholder="Seleccione rol"  as="select">
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </Field> */}

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

export default Registerformik;
