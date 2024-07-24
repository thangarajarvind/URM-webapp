import React from 'react'

const FormInputComponent = ({label, type, name, placeholder, register, error ={}, extras ={}, options =[]}) => {
  return (
    <div className='field-wrap'>
        {label && <label htmlFor={name}>{label}</label>}
        {type =="textarea"? <textarea rows={extras.rows || 3} {...register} placeholder ={placeholder} className={`${error[name] && 'has-error'}`}></textarea>: type =="select"? <select {...register} className={`${error[name] && 'has-error'}`} defaultValue={''}>{options.map(({value, label, disabled, selected}, index) =>(<option disabled ={disabled && true} value={value} key={`option-${index}`}>{label}</option>))}</select>: <input type={type || 'text'} {...register} placeholder ={placeholder} className={`${error[name] && 'has-error'}`}/>}
        {error[name] && <small className='error'>{error[name].message || error[name]}</small>}
    </div>
  )
}

export default FormInputComponent;