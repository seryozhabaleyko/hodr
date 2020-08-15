import { createSelector } from 'reselect';

const newsLoadingSelector = (state) => state.news.loading;
const newsItemsSelector = (state) => state.news.data;
const newsErrorSelector = (state) => state.news.error;

const getNewsItemsSelector = createSelector(newsItemsSelector, (items) =>
    items.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
);

export const getNews = createSelector(
    newsLoadingSelector,
    getNewsItemsSelector,
    newsErrorSelector,
    (loading, data, error) => ({ loading, data, error }),
);
