import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from 'evergreen-ui';

import { AuthContext } from '../Auth';

import './UserAccount.scss';

function UserAccount() {
    const { currentUser } = useContext(AuthContext);

    return currentUser ? (
        <Link to={`/user/${currentUser.displayName}`}>
            <Avatar src={currentUser.photoURL} size={35} />
        </Link>
    ) : (
        <Link to="/login">
            <Avatar isSolid name="Anonymous User" size={35} />
        </Link>
    );
}

export default UserAccount;
