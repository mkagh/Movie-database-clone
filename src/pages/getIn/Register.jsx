import React, { useState } from 'react'
import Session from "../../cookies"
const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState(false)

    let session = new Session()
    let getCookie = session.getSession()

    if (getCookie !== "") {
        window.location.href = "/"
    }
    return (
        <div className='registerWrapper'>
            <div className="form">

                <form onSubmit={(e) => {
                    e.preventDefault()
                    console.log(name, email, password, confirm)
                    if (name && email && password && confirm) {
                        /*  localStorage.setItem('testObject', JSON.stringify({ name: name, email: email, password: password })); */
                        let existingData = JSON.parse(localStorage.getItem('key'));
                        if (existingData == null) {
                            existingData = [];

                        }
                        existingData.push({ name: name, email: email, password: password });
                        localStorage.setItem('key', JSON.stringify(existingData));
                        session.user_id = name
                        session.startSession()
                        window.location.href = "/"
                    }
                    else {
                        window.location.href = "/register"
                    }
                }} action="">


                    <input placeholder='Username' onChange={(e) => {
                        setName(e.target.value)
                    }} type="text" name='username' />


                    <input placeholder='Email' onChange={(e) => {
                        if (e.target.value.includes("@")) {
                            setEmail(e.target.value)

                        }
                    }} type="email" name='email' />


                    <input placeholder='Password' onChange={(e) => {
                        if (e.target.value.length > 6) {
                            setPassword(e.target.value)


                        }
                    }} type="password" name='password' />


                    <input placeholder='Password confirmation' onChange={(e) => {
                        if (e.target.value === password) {
                            setConfirm(true)


                        }
                        else {
                            setConfirm(false)
                        }
                    }} type="password" name='confirmpassword' />
                    <div className="buttonRegister">
                        <button type='submit'>Register</button>

                    </div>
                </form>
            </div>

        </div>
    )
}

export default Register