import React from 'react'
import { useDispatch } from 'react-redux'
import { Formik, Field, Form, ErrorMessage } from 'formik'

import { signinRequest } from '../../store/actions'
import styles from './SignIn.module.css'

const SignIn = () => {
    const dispatch = useDispatch()

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
                const errors = {}
                if (!values.email) {
                    errors.email = 'e-mail required'
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                    errors.email = 'Invalid e-mail address'
                }
                if (!values.password) {
                    errors.password = 'Password required'
                }
                return errors
            }}
            onSubmit={(values, { setSubmitting }) => {
                alert(JSON.stringify(values, null, 2))
                dispatch(signinRequest({ ...values }))
                setSubmitting(false)
            }}
        >
            {formik => (
                <div className={styles.signin}>
                    <div className={styles.signinplate}>
                        <Form>
                            <Field name="email" type="email" placeholder="Enter e-mail here"/>
                            <Field name="password" type="password" placeholder="Enter password here"/>
                            <button type="submit">Sign In</button>
                        </Form>
                        <a href="/restorepassword">Forgot password?</a>
                    </div>
                    <div className={styles.signinerrors}>
                        <div>
                            <ErrorMessage name="email" />
                        </div>
                        <div>
                            <ErrorMessage name="password" />
                        </div>
                    </div>
                </div>
            )}
        </Formik>
    )
}

export default SignIn
