import React, { useState } from 'react';
import logo from '../images/logo1.png'
import './user.css'

function LoginUser({ getData }) {
    const [data, setData] = useState(getData)
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const handleAdd = (e) => {
        e.preventDefault();
        getData({  email, password })
    }
    return (
        <>
            <img src={logo} alt="logo" className="logo" />

            <div className="login-user ">
                <div className="link-register">
                    <p><a href="/user/login" className='link-register-user'>  Login as Uesr</a></p>
                    <p><a href="/vondeur/login " >  Login as Seller</a></p>
                </div>
                <form action="/register" method="post" onSubmit={handleAdd}>
                 
                    <div class="form-group">
                        <label for="email" className='label-group'>Email:</label>
                        <input type="email" id="email" name="email" required
                            onChange={(e) => setemail(e.target.value)}
                            className="input-group"
                        />
                    </div>
                    <div class="form-group">
                        <label for="password" className='label-group'>Password:</label>
                        <input type="password" id="password" name="password" required
                            onChange={(e) => setpassword(e.target.value)}

                            className="input-group"
                        />
                    </div>
                    <button type="submit" className="login-user-botton" >Login</button>
                    <p>New in our platform ? <a href="/user/register">Register</a></p>
                </form>

            </div>
        </>
    );

}

export default LoginUser;