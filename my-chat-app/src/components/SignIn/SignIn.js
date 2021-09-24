import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Field, Form, ErrorMessage } from 'formik'

import { signinRequest } from '../../store/actions'
import styles from './SignIn.module.css'

const SignIn = ({ cbSignedIn}) => {
    const [errorHidden, setErrorHidden] = useState(false)

    const user = useSelector(state => state.user)
    const auth = useSelector(state => state.auth)

    const dispatch = useDispatch()
    const parentCallBack = useCallback(cbSignedIn)

    const validate = (values) => {
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
    }
    const onChange = (formik) => (event) => {
        formik.handleChange(event)
        setErrorHidden(true)
    }
    const onSubmit = (values) => {
        dispatch(signinRequest(values))
        setErrorHidden(false)
    }
    useEffect(() => {
        !!user && parentCallBack()
    }, [user, parentCallBack])

    return (
        <Formik initialValues={{ email: '', password: '' }} validate={validate} onSubmit={onSubmit}>
            {formik => (
                <div className={styles.signin}>
                    <div className={styles.signinplate}>
                        <Form>
                            <Field name="email" type="email" placeholder="Enter e-mail here" onChange={onChange(formik)}/>
                            <Field name="password" type="password" placeholder="Enter password here" onChange={onChange(formik)} />
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
                        <div>
                            {(!user) ? ((errorHidden) ? null : auth.error) : null}
                        </div>
                    </div>
                </div>
            )}
        </Formik>
    )
}

export default SignIn
