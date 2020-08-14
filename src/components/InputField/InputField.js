import React from 'react';

import Input from '../Input';

import './InputField.scss';

function InputField({ label, name, ...restProps }) {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <Input id={name} {...restProps} />
        </div>
    );
}

export default InputField;
