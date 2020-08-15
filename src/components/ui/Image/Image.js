import React, { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';

const Image = forwardRef(({ src, alt, ...restProps }, ref) => {
    return <img src={src} alt={alt} {...restProps} ref={ref} />;
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
};

export default memo(Image);
