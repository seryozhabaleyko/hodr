import React from 'react';

import { auth } from '../../services/firebase';

import './UserAccount.scss';

/* <Badge count={0}>
            <Avatar
                src={auth().currentUser.photoURL}
                size={32}
                icon={<UserOutlined />}
                alt={auth().currentUser.displayName}
            />
        </Badge> */

function UserAccount() {
    return auth().currentUser ? 1 : 2;
}

export default UserAccount;
