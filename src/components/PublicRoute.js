import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './Auth';

function PublicRoute({ component: Component, ...rest }) {
    const { currentUser } = useContext(AuthContext);

    return (
        <Route
            {...rest}
            render={(props) =>
                !!currentUser === false ? <Component {...props} /> : <Redirect to="/profile" />
            }
        />
    );
}

export default PublicRoute;
