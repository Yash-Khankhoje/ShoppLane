import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Navbar } from '../components/Navbar';
import { CategoryList } from '../components/CategoryList';
import EndPoints from '../api/EndPoints';

const RegiterPage = () => {

    const [requestedResponse, setRequestResponse] = useState({
        textMessage: '',
        alertClass: ''
    })

    const initialValues = {
        firstName: '',
        email: '',
        mobile: '',
        password: ''
    }

    const onSubmit = (values) => {
        console.log(values);
        axios.post(EndPoints.USER_SIGNUP_URL, values)
        .then((response) => {
            console.log(response)
            setRequestResponse({
                textMessage: response.data,
                alertClass: 'alert alert-success'
            })
        }, (error) => {
            console.log(error);
            setRequestResponse({
                textMessage: error.response.data,
                alertClass: 'alert alert-danger'
            })
        })
        .catch(error => {
            console.log(error);
        })
    }

    const validationSchema = Yup.object({
        firstName: Yup.string().required('firstName is required.'),
        email: Yup.string().required('email is required.').email('email must be a valid email.'),
        mobile: Yup.string().required('mobile is required.'),
        password: Yup.string().required('password is required.').min(6, 'password must contain at least 6 charectors.')
    })

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: onSubmit,
        validationSchema: validationSchema,
        validateOnMount: true

    })

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="registration-wrapper">
                            <div className={requestedResponse.alertClass} role='alert'>
                                {requestedResponse.textMessage}
                            </div>
                            <h2 style={{ textAlign: 'center', marginBottom: '8%' }}>
                                Sign Up
                            </h2>
                            <form onSubmit={formik.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="firstName">FirstName</label>
                                    <input type="text" name='firstName' id='firstName' className={formik.touched.firstName && formik.errors.firstName ? 'form-control is-invalid' : 'form-control'} value={formik.values.firstName} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                    {formik.errors.firstName && formik.touched.firstName ? (<small className='text-danger'>{formik.errors.firstName}</small>):null}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="text" name='email' id='email' className={formik.touched.email && formik.errors.email ? 'form-control is-invalid' : 'form-control'} value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                    {formik.errors.email && formik.touched.email ?(<small className='text-danger'>{formik.errors.email}</small>):null}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="mobile">Mobile</label>
                                    <input type="text" name='mobile' id='mobile' className={formik.touched.mobile && formik.errors.mobile ? 'form-control is-invalid' : 'form-control'} value={formik.values.mobile} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                    {formik.errors.mobile && formik.touched.mobile ?(<small className='text-danger'>{formik.errors.mobile}</small>):null}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name='password' id='password' className={formik.touched.password && formik.errors.password ? 'form-control is-invalid' : 'form-control'} value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                    {formik.errors.password && formik.touched.password ?(<small className='text-danger'>{formik.errors.password}</small>):null}
                                </div>

                                <input type="submit" value="Register" className="btn btn-primary btn-block" disabled={!formik.isValid} />
                            </form>
                            <p className="text-center">
                                Already registered? <a href='/login'>login</a>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </>
    )
}

export default RegiterPage