import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import './logo.scss';

function Logo() {
    return (
        <Link to="/" className="logo">
            Valhalla
        </Link>
    );
}

export default memo(Logo);
