import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import { FormInputComponent, LoadingSpinnerComponent, ServerResponseAlertComponent} from '../components'
import {register_user} from '../api/accounts';

const RegistrationPage = () => {
    const [navHeight, setNavHeight] =useState('0px');
    const {register, watch, reset, formState: {errors}, handleSubmit} =useForm();
    const [submiting, setSubmitting] =useState(false);
    const [serverError, setServerError] =useState(null);
    const navigate =useNavigate();

    const fields =[
        [{fieldName: 'first_name', type: 'text', label: 'First Name',  placeholder: 'Enter intial name',validations: {
            required: 'First name required*'
        }},
        {fieldName: 'last_name', type: 'text', label: 'Last Name',  placeholder: 'Enter surname',validations: {
            required: 'Last name required*'
        }},],
        [{fieldName: 'email', type: 'email', label: 'Email',  placeholder: 'Enter email',validations: {
            required: 'Email required*',
            isEmail: 'Provide a valid email',
        }},
        {fieldName: 'address', type: 'text', label: 'Address',  placeholder: 'Enter your address',validations: {
            required: 'Address required*'
        }},],
        [{fieldName: 'phone', type: 'text', label: 'Phone',  placeholder: '29 123-456-7890',validations: {
            required: 'Phone number required*',
            pattern: {
                value: /^\+?[0-9]{1,3}[0-9]{3}[0-9]{3}[0-9]{4}$/,
                message: 'Invalid phone number'
            }
        }},
        {fieldName: 'role', type: 'select', label: 'Role', 
        options: [
            {label: '---Select Role---', value: '', disabled: true, selected: true},
            {label: 'Candidate', value: 'candidate', },
            {label: 'Dei', value: 'dei', },
            {label: 'Recruiter', value: 'recruiter', },
            {label: 'Academia', value: 'academia', },
            {label: 'Admin', value: 'admin', },
        ],
        validations: {
            required: 'Select your role*'
        }},],
        [{fieldName: 'password', type: 'password', label: 'Password',  placeholder: 'Enter password',validations: {
            required: 'Password required*',
        }},
        {fieldName: 'cpassword', type: 'password', label: 'Confirm Password',  placeholder: 'Confirm password',validations: {
            required: 'Confirmation password*',
            validate: v => v !=watch('password')? 'Passwords do not match': null,
        }},],
    ];
    
    useEffect(() =>{
        const nav =document.getElementById('nav');
        if(nav) setNavHeight(`${nav.scrollHeight}px`);
    }, []);
    
    const handleRegister =async values =>{
        setSubmitting(true);
        setServerError(null);
        const form =document.forms['register-form'];
        try {
            delete values.cpassword;
            [...form.querySelectorAll('input, select, button')].forEach(input => input.disabled =true);
            const {status, data} =await register_user(values);
            if(status >=400) throw new Error(data.message);
            if(data ==false) setServerError("User already exists or bad input");
            else{
                reset();
                navigate('/login', {replace: true});
            }
        } catch (error) {
            if(error.response) setServerError(error.response.data.message);
            else setServerError(error.message);
        }
        setSubmitting(false);
        [...form.querySelectorAll('input, select, button')].forEach(input => input.disabled =false);
    }
    return (
        <div className='h-full auth-ui' style={{"--vh-full": `calc(100vh - ${navHeight})`}}>
            <form name='register-form' className='auth-form' onSubmit={handleSubmit(handleRegister)} style={{width: '500px'}}>
                <h3 className='form-header'>Create Account</h3>
                {fields.map((field, index) =>(<div className='form-row' key={index}>{field.map(({label, placeholder, fieldName, type, validations, options}, idx) =>(<FormInputComponent name={fieldName} label={label} placeholder={placeholder} key={`${index}.${idx}`} type={type} register={register(fieldName, validations)} error={errors} options={options}/>))}</div>))}
                {submiting? <LoadingSpinnerComponent />: <button type='submit'>Signup</button>}
                {serverError &&<ServerResponseAlertComponent alert={serverError}/>}
            </form>
        </div>
    )
    }

export default RegistrationPage;