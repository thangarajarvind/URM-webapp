import { useState, useEffect } from 'react';
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FormInputComponent,LoadingSpinnerComponent, ServerResponseAlertComponent } from '../components';
import {login_user} from '../api/accounts';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    const [navHeight, setNavHeight] =useState('0px');
    const {register, reset, formState: {errors},handleSubmit} =useForm();
    const [submiting, setSubmitting] =useState(false);
    const [serverError, setServerError] =useState(null);
    const navigate =useNavigate();

    const fields =[
        {fieldName: 'userid', type: 'text', label: 'Email',  placeholder: 'Enter Email',validations: {
            required: 'Login ID required*'
        }},
        {fieldName: 'password', type: 'password', label: 'Password',  placeholder: 'Enter Password',validations: {
            required: 'Login Password required*'
        }},
    ];
    
    useEffect(() =>{
        const nav =document.getElementById('nav');
        if(nav) setNavHeight(`${nav.scrollHeight}px`);
    }, []);

    
    const handleLogin =async values =>{
        setSubmitting(true);
        setServerError(null);
        console.log(values)
        const form =document.forms['login-form'];
        try {
            [...form.querySelectorAll('input, button')].forEach(input => input.disabled =true);
            
            const [message, role, id, name] =await login_user(values);

            console.warn(message, role, id, name)
            if(message) setServerError(message);
            else{
                sessionStorage.setItem('sessionid', JSON.stringify({role, id, name}));
                sessionStorage.setItem('id', id);
                sessionStorage.setItem('name', name);
                sessionStorage.setItem('role', role);
                
                reset();
                //Navigate to Dashboard
                console.log('Success Login');
                if (role=='candidate'){
                    navigate('/candidate', {replace: true});
                }else if(role=='recruiter'){
                    navigate('/recruiter', {replace: true}); 
                }else if(role=='admin'){
                    navigate('/admin', {replace: true}); 
                }
                else if(role=='dei'){
                    navigate('/deiofficer', {replace: true}); 
                }else if(role=='academia'){
                    navigate('/academia', {replace: true}); 
                }
                
            }
        } catch (error) {
            if(error.response) setServerError(error.response.data.message);
            else setServerError(error.message);
        }
        setSubmitting(false);
        [...form.querySelectorAll('input, button')].forEach(input => input.disabled =false);
    }
    return (
        <div className='h-full auth-ui' style={{"--vh-full": `calc(100vh - ${navHeight})`}}>
            <form name='login-form' className='auth-form' onSubmit={handleSubmit(handleLogin)}>
                <h3 className='form-header'>Enter Login Details</h3>
                {fields.map(({label, placeholder, fieldName, type, validations}, index) =>(<FormInputComponent name={fieldName} label={label} placeholder={placeholder} key={index} type={type} register={register(fieldName, validations)} error={errors}/>))}
                {submiting? <LoadingSpinnerComponent />: <button type='submit'>Login</button>}
                {serverError &&<ServerResponseAlertComponent alert={serverError}/>}
                <Link to={`/forget`}>Forget password?</Link>
            </form>
        </div>
    )
    }

export default LoginPage;