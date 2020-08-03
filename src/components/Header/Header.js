import React, { memo } from 'react';

import Navbar from '../Navbar';

import './Header.scss';

function Header() {
    return (
        <header className="header">
            <Navbar />
        </header>
    );
}

export default memo(Header);
