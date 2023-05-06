import React, { useState } from 'react';
import '../assets/css/form.css'

const Form = (props) => {
    const [focused, setFocused] =useState(false);
    const { label, errorMessage, onChange, id, ...inputProps } = props;

    const handleFocus = (e)=>{
        setFocused(true);
    };
    return (

        <div className='container my-5 text-center bg-secondary rounded'>
            <div className='card bg-secondary rounded'>
                <label className='card-title bg-secondary rounded'>{label}</label>
                <input className='card-body rounded'{...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()}></input>
                <span className='card-message rounded'>{errorMessage}</span>
            </div>
        </div>
    );
};

export default Form;