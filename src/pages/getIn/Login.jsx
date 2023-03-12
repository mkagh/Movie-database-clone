import React, { useState } from 'react'
import { useFormik } from "formik"
import Session from "../../cookies"
import * as Yup from "yup"
const Login = () => {

    let session = new Session()
    let getCookie = session.getSession()


    if (getCookie !== "") {
        window.location.href = "/"
    }
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
            email: ""
        },
        validationSchema: Yup.object({
            username: Yup.string().max(15, "needs to be less then 15 char").required(),
            email: Yup.string().email("e-mail isnt adequate").required("required")
        }),
        onSubmit: (values) => {
            const key = JSON.parse(localStorage.getItem("key"))
            key.forEach(element => {
                if (element.name == values.username && element.password == values.password && element.email == values.email) {
                    session.user_id = element.name
                    session.startSession()
                    window.location.href = "/"

                }
            });
        }
    })
    return (
        <div className='loginWrapper'>
            <div className="form">

                <form onSubmit={formik.handleSubmit}>


                    <input placeholder='Username' onBlur={formik.handleBlur} type="text" name='username' value={formik.values.username} onChange={formik.handleChange} />
                    {formik.errors.username && formik.touched.username ? <p>{formik.errors.username}</p> : null}

                    <input placeholder='Email' type="email" name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.errors.email && formik.touched.email ? <p>{formik.errors.email}</p> : null}

                    <input placeholder='Password ' onBlur={formik.handleBlur} value={formik.values.password} onChange={formik.handleChange} type="password" name='password' />

                    {formik.errors.password && formik.touched.password ? <p>{formik.errors.password}</p> : null}
                    <div className="buttonLogin">
                        <button type='submit'>Login</button>

                    </div>

                </form>



            </div>
        </div>
    )
}

export default Login