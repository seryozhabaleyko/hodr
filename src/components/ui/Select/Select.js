import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Select.scss';

function Select({
    className,
    defaultValue,
    disabled,
    onChange,
    value,
    height = 32,
    options = [],
    ...restProps
}) {
    const classes = classNames('select', className);

    return (
        <div className="select-wrapper" style={{ height }} {...restProps}>
            <select
                className={classes}
                style={{ paddingLeft: '10px', paddingRight: '28px' }}
                disabled={disabled}
                defaultValue={defaultValue}
                value={value}
                onChange={onChange}
            >
                {options.map(({ value, label }) => (
                    <option value={value} key={value}>
                        {label}
                    </option>
                ))}
            </select>
        </div>
    );
}

Select.propTypes = {
    defaultValue: PropTypes.any,
    value: PropTypes.any,
    onChange: PropTypes.func,
    required: PropTypes.bool,
};

export default Select;
