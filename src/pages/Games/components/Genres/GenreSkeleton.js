import React, { memo } from 'react';

import './GenreSkeleton.scss';

function GenreSkeleton() {
    return (
        <div className="gp-genre-skeleton">
            <div className="gp-genre-skeleton__image" />
            <div className="gp-genre-skeleton__title" />
        </div>
    );
}

export default memo(GenreSkeleton);
