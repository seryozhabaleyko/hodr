import React from 'react';
import { Avatar, Badge } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { auth } from '../../services/firebase';

import './UserAccount.scss';

function UserAccount() {
    return auth().currentUser ? (
        <Badge count={0}>
            <Avatar
                src={auth().currentUser.photoURL}
                size={32}
                icon={<UserOutlined />}
                alt={auth().currentUser.displayName}
            />
        </Badge>
    ) : (
        <Avatar size={32} icon={<UserOutlined />} />
    );
}

export default UserAccount;
