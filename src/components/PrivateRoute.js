import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './Auth';

function PrivateRoute({ component: Component, ...rest }) {
    const { currentUser } = useContext(AuthContext);

    return (
        <Route
            {...rest}
            render={(props) =>
                !!currentUser === true ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                )
            }
        />
    );
}

export default PrivateRoute;
