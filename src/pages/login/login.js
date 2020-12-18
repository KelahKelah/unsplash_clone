import React from 'react';

const Login = () => {
    return(
        <div>
            <form>
                <div>
                    <label>Username</label>
                    <input type="text" />
                </div>

                <div>
                    <label>Password </label>
                    <input type="password" />
                </div>

                <div>
                    <label>Forgot Password?</label>
                    <input type="radio" />
                </div>

            </form>
        </div>
    )
 } 

export default Login;
