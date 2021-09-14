import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Field, Form, ErrorMessage } from 'formik'

import { signinRequest } from '../../store/actions'
import styles from './SignIn.module.css'

const SignIn = ({ cbSignedIn}) => {
    const refLoginErrorMessage = useRef(null)

    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const onChangeFormik = (formik) => (event) => {
        formik.handleChange(event);
        refLoginErrorMessage.current.style.display = 'none';
    }

    useEffect(() => {
        if (typeof user.signedin !== 'undefined') {
            refLoginErrorMessage.current.style.display = (!user.signedin) ? ('block') : ('none')
            !!user.signedin && cbSignedIn()
        }
    }, [user])
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
            onSubmit={(values) => dispatch(signinRequest({ ...values }))}
        >
            {formik => (
                <div className={styles.signin}>
                    <div className={styles.signinplate}>
                        <Form>
                            <Field name="email" type="email" placeholder="Enter e-mail here" onChange={onChangeFormik(formik)} />
                            <Field name="password" type="password" placeholder="Enter password here" onChange={onChangeFormik(formik)} />
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
                        <div ref={refLoginErrorMessage} style={{ display: 'none' }}>
                            Invalid e-mail or password
                        </div>
                    </div>
                </div>
            )}
        </Formik>
    )
}

export default SignIn
