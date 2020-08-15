import React from 'react';
import { v4 as uuid } from 'uuid';

import { Input } from '../../ui';

import './InputField.scss';

function InputField({ id = uuid(), label = 'default label', name, ...restProps }) {
    return (
        <div className="form-group">
            <label className="form-label" htmlFor={id}>
                {label}
            </label>
            <Input id={id} {...restProps} />
        </div>
    );
}

export default InputField;
