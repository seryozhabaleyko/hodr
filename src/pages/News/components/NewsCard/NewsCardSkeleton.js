import React, { memo } from 'react';

import './NewsCard.scss';

function NewsCardSkeleton() {
    return (
        <div className="news-card-skeleton">
            <div className="news-card-skeleton__image" />
            <div className="news-card-skeleton__title" />
        </div>
    );
}

export default memo(NewsCardSkeleton);
