import React, { useEffect, useState } from 'react';
import './login.css';
import   {Link } from 'react-router-dom';
import { GoogleLogin } from "react-google-login";
import {BsFillEyeFill, BsCheckCircle, BsXCircle} from 'react-icons/bs';
import jwt_decode from 'jwt-decode';
import Axios from 'axios';

const Login = (props) => {
const [showPassword, setShowPassword] = useState(false);
const [decodeToken, setDecodeToken] = useState('');
const [googleLoginDetail, setGoogleLogin] = useState({email: '', password: ''});


   const handleShowPassword = () => {
    setShowPassword(true)
    }

    // GOOGLE LOGIN 
    const responseGoogle = async (res) => {
        const token = await res.tokenId
        const decode = jwt_decode(token);
        setGoogleLogin({email: decode.email, password: decode.at_hash});
        // Axios.interceptors.request.use({
            
        // })
        Axios.defaults.headers.common['Authorization'] = `${token}`
        Axios.get(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${token}`, {
            'Access-Control-Allow-Origin' : 'https://60095ecf2113e3b03ed2cb39--gallant-euler-315628.netlify.app',
        })
        .then((res) => {
            console.log('getting hd',res)
        }).catch((err) => {
            console.log(err)
            console.log("ERRRRROROOROROR")
        })
    }

    const errorGoogle = async (err) => {
        console.log('error google',err)
    }

    // PASSWORD STRENGTH VALIDATION 
    const validatePasswordStrength = () => {

        // function passwordChanged() {
        //     // let strength = document.getElementById('strength');
        //     let strongRegex = new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
        //     let mediumRegex = new RegExp("^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
        //     let enoughRegex = new RegExp("(?=.{8,}).*", "g");
        //     // let pwd = document.getElementById("password");
        //     if (pwd.value.length == 0) {
        //         strength.innerHTML = 'Type Password';
        //     } else if (false == enoughRegex.test(pwd.value)) {
        //         strength.innerHTML = 'More Characters';
        //     } else if (strongRegex.test(pwd.value)) {
        //         strength.innerHTML = '<span style="color:green">Strong!</span>';
        //     } else if (mediumRegex.test(pwd.value)) {
        //         strength.innerHTML = '<span style="color:orange">Medium!</span>';
        //     } else {
        //         strength.innerHTML = '<span style="color:red">Weak!</span>';
        //     }
        // }
    }
    //


    return(
        <div className="login-wrapper">
            <div className="login-container pt-3"> 
            <h4>Login to your account</h4>
            <form>
                <div>
                    <label className="label-class">Email</label>
                    <input className="input-field p-2" type="email" />
                </div>

                <div>
                    <label className="label-class">Password </label>
                    <input className="input-field-password p-2" type={showPassword? "text":"password"} />
                    <BsFillEyeFill className="password-eye" onClick={()=>handleShowPassword(false)} />
                </div>

                <div>
                    <button className="btn btn-outline-secondary login-button mt-5" type="submit">Login</button>
                </div>

                <div className="external-links p-4">
                    <button className="radio-button-label">Forgot Password?</button>
                    <GoogleLogin 
                        clientId="153316680024-56hc2h4pk0sjsbhm218801lummqm4523.apps.googleusercontent.com"
                        buttonText="Login with google"
                        onSuccess={responseGoogle}
                        onFailure={errorGoogle}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={true}
                    />
                </div>

            </form>
            </div>
        </div>
    )
 } 

export default Login;
