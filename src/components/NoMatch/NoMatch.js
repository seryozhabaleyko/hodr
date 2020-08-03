import React from 'react';

import './NoMatch.scss';

function NoMatch({ location }) {
    return (
        <div className="container">
            <h1>No route match for {location.pathname}</h1>
        </div>
    );
}

export default NoMatch;
