import React, { memo, forwardRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Avatar.scss';

const Avatar = forwardRef((props, ref) => {
    const { src, size = 24, shape = 'circle', alt, ...restProps } = props;
    const isClassShape = shape === 'circle' ? 'avatar-circle' : 'avatar-square';
    const classes = classNames('avatar', isClassShape, { 'avatar-image': src });

    return (
        <span
            className={classes}
            style={{ width: `${size}px`, height: `${size}px`, lineHeight: `${size}px` }}
            ref={ref}
            {...restProps}
        >
            <img src={src} alt={alt} />
        </span>
    );
});

Avatar.propTypes = {
    src: PropTypes.string,
    size: PropTypes.number,
    alt: PropTypes.string,
    shape: PropTypes.oneOf(['circle', 'square']),
};

export default memo(Avatar);
