import { useState, useEffect } from 'react';
import {useForm} from 'react-hook-form';
import { FormInputComponent } from '../components'

const ContactPage = () => {
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
        <div className="contact-body">
            <div className='contact-dm'>
                <h3 className='form-header'>Direct Message</h3>
                <form name='login-form' className='auth-form' onSubmit={handleSubmit(handleContact)} style={{width: '450px'}}>
                    {fields.map(({label, placeholder, fieldName, type, validations}, index) =>(<FormInputComponent name={fieldName} label={label} placeholder={placeholder} key={index} type={type} register={register(fieldName, validations)} error={errors} extras={{rows: 2}}/>))}
                    <button type='submit'>Send</button>
                </form>
            </div>
            <div className='contact-details'>
                <h3 className='form-header'>Contact Details</h3>
                <ul>
                    <li><i className="fa-solid fa-phone"></i><span>+91 111 111 000</span></li>
                    <li><i className="fa-solid fa-envelope"></i><span>support@academia.com</span></li>
                    <li><i className="fa-brands fa-facebook"></i><span>Like Us</span></li>
                    <li><i className="fa-brands fa-twitter"></i><span>Follow Us</span></li>
                </ul>
            </div>
        </div>
    </div>        
  )
}

export default ContactPage;