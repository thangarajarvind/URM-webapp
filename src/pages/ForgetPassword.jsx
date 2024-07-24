import { useState, useEffect } from 'react';
import {useForm} from 'react-hook-form';
import { FormInputComponent } from '../components'

const ForgetPassword = () => {
    const [navHeight, setNavHeight] =useState('0px');
    const {register, formState: {errors},handleSubmit} =useForm();
    const fields =[
        {fieldName: 'name', type: 'text', label: 'Name',  placeholder: 'Provide your name',validations: {
            required: 'Name is required*'
        }},
        {fieldName: 'email', type: 'email', label: 'Email',  placeholder: 'Provide our email',validations: {
            required: 'Email is required*',
            isEmail: "Provide your valid email*"
        }},
        {fieldName: 'inquiry', type: 'textarea', label: 'Inquiry',  placeholder: 'How can we help?',validations: {
            required: 'Please Leave us a message',
        }},
    ];
    useEffect(() =>{
        const nav =document.getElementById('nav');
        if(nav) {
            setNavHeight(`${nav.scrollHeight}px`);
            console.log(navHeight); 
        }
    }, []);
    const handleContact =values =>{
        console.log(values);
    }
    return (
        <div className="h-full contact-page" style={{"--vh-full": `calc(100vh - ${navHeight})`}}>
        <div class="div_rows_container">
        <div class="div_row" id="register_row">
            <h4>Get OTP</h4>
            <p>Please enter your Email</p>
            <form class="form_register">
                <table class="table_register">
                    <tr>
                        <td>
                            <input class="register" type="email" placeholder="Email" size="50"></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button type="submit" >Get OTP</button>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
        <div class="div_row" id="login_row">
            <h4>Reset Password</h4>
            <p>Enter your login details</p>
            <form name="loginform" class="form_login" onsubmit="validateLogin()">
                <table class="table_login">
                    <tr>
                        <td>
                        <input class="login" type="text" name="username" placeholder="Username or Email" size="50" ></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <input class="login" type="text" name="otp" placeholder="Enter OTP" size="5" ></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <input class="login" type="password" name="password" placeholder="New Password" size="50" ></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <input class="login" type="password" name="password" placeholder="Confirm New Password" size="50" ></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <button type="submit">Reset Password</button>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    </div>
    </div>        
  )
}

export default ForgetPassword;