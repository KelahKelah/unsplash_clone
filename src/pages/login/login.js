import React, { useEffect, useState } from 'react';
import './login.css';
import   {Link } from 'react-router-dom';
import { GoogleLogin } from "react-google-login";
import {BsFillEyeFill, BsCheckCircle, BsXCircle} from 'react-icons/bs';
import Axios from 'axios';

const Login = (props) => {
const [showPassword, setShowPassword] = useState(false);
const [tokenId, setTokenId] = useState('');


   const handleShowPassword = () => {
    setShowPassword(true)
    }

    const responseGoogle = async (res) => {
        Axios.defaults.headers.common['Authorization'] = "";
        const resp = await res.tokenId
        console.log('resolved tokenid',resp)
        Axios.get(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${resp}`)
        .then((res) => {
            console.log('getting hd',res)
        }).catch((err) => {
            console.log(err)
            console.log("ERRRRROROOROROR")
        })
    }

    const getToken = () => {
        // setTokenId(tokenId);
        console.log('value tokenidddddd',tokenId);
        // console.log('value tokenidddddd',tokenId);
    }

    // useEffect (() => {
    //     // console.log('value tokenid inside effect',tokenId);
    //     // Axios.get(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${tokenId}`)
        
    //     // .then((res) => {

    //     // }).catch((err) => {

    //     // })
    // }, [tokenId]);


    return(
        <div className="login-wrapper">
            <div className="login-container"> 
            <h4>Login to your account</h4>
            <form>
                <div>
                    <label className="label-class">Username </label>
                    <input className="input-field p-2" type="text" />
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
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                    onClick={getToken}
                    
                    />
                </div>

            </form>
            </div>
        </div>
    )
 } 

export default Login;
