import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Input({
    className,
    required,
    placeholder,
    value,
    onChange = () => {},
    type = 'text',
    width = 280,
    height = 32,
    disabled = false,
    isInvalid = false,
    ...restProps
}) {
    const classes = classNames('form-control', className);

    const handleChange = (event) => {
        onChange(event.target.value);
    };

    return (
        <input
            className={classes}
            type={type}
            width={width}
            height={height}
            required={required}
            disabled={disabled}
            placeholder={placeholder}
            aria-invalid={isInvalid}
            value={value}
            onChange={handleChange}
            {...restProps}
        />
    );
}

Input.propTypes = {
    className: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Input;
