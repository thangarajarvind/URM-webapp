import React from 'react'

const LoadingSpinnerComponent = ({message}) => {
  return (
    <div className='loader'>
        <div className="spinner"></div>
        <p>{message || 'Please Wait...'}</p>
    </div>
  )
}

export default LoadingSpinnerComponent;