import React, { memo } from 'react';

import './GameCardSkeleton.scss';

function GameCardSkeleton() {
    return (
        <div className="gc-skeleton">
            <div className="gc-skeleton__thumbnail"></div>
            <div className="gc-skeleton__content">
                <div className="gc-skeleton__title"></div>
                <div className="gc-skeleton__developer"></div>
            </div>
        </div>
    );
}

export default memo(GameCardSkeleton);
