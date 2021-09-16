import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Field, Form, ErrorMessage } from 'formik'

import { signinRequest } from '../../store/actions'
import styles from './SignIn.module.css'

const SignIn = ({ cbSignedIn}) => {
    const refLoginErrorMessage = useRef(null)
    const [loginError, setLoginError] = useState(undefined)

    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const onChangeFormik = (formik) => (event) => {
        formik.handleChange(event);
        // refLoginErrorMessage.current.style.display = 'none';
        setLoginError(false)
    }
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
    const onSubmit = (values) => dispatch(signinRequest(values))

    useEffect(() => {
        // if (typeof user.signedin !== 'undefined') {
        //     refLoginErrorMessage.current.style.display = (!user.signedin) ? ('block') : ('none')
        //     !!user.signedin && parentCallBack()
        // }

        // Uncomment to supress login error blinking effect 
        //if (typeof user.signedin !== 'undefined') {
            setLoginError(!user.signedin)
            !!user.signedin && parentCallBack()
        //}
    }, [user, parentCallBack])
    return (
        <Formik initialValues={{ email: '', password: '' }} validate={validate} onSubmit={onSubmit}>
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
                        {/* <div ref={refLoginErrorMessage} style={{display: 'none'}}>
                            Invalid e-mail or password
                        </div> */}
                        <div>
                            {(loginError) ? ((!formik.touched.email || !formik.touched.password) ? null :("Invalid e-mail or password")) : null}
                        </div>
                    </div>
                </div>
            )}
        </Formik>
    )
}

export default SignIn
