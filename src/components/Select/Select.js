import React from 'react';

import './Select.scss';

function Select({ options = [] }) {
    return (
        <select className="select">
            {options.map(({ value, label }) => (
                <option value={value} key={value}>
                    {label}
                </option>
            ))}
        </select>
    );
}

export default Select;
