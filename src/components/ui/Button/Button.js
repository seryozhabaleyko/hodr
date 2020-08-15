import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Spinner } from '../../ui';

import './Button.scss';

function Button({
    className,
    height = 32,
    appearance = 'default',
    children,
    isLoading,
    disabled,
    type = 'button',
    ...restProps
}) {
    const classes = classNames('btn', 'btn-primary', className);

    return (
        <button type={type} className={classes} {...restProps} disabled={disabled}>
            {isLoading && (
                <Spinner
                    color="#fff"
                    marginRight={Math.round(height / 4)}
                    size={Math.round(height / 2)}
                />
            )}
            {children}
        </button>
    );
}

Button.propTypes = {
    isLoading: PropTypes.bool,
    disabled: PropTypes.bool,
    className: PropTypes.string,
};

export default Button;
