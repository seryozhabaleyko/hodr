import React, { memo } from 'react';

import './NewsCard.scss';

function NewsCardSkeleton() {
    return (
        <div className="news-card-skeleton">
            <div className="news-card-skeleton__image" />
            <div className="news-card-skeleton__content">
                <div className="news-card-skeleton__title" />
                <div className="news-card-skeleton__date-time" />
            </div>
        </div>
    );
}

export default memo(NewsCardSkeleton);
