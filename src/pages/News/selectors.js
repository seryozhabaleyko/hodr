import { createSelector } from 'reselect';

const newsLoadingSelector = (state) => state.news.loading;
const newsItemsSelector = (state) => state.news.data;
const newsErrorSelector = (state) => state.news.error;

export const getNews = createSelector(
    newsLoadingSelector,
    newsItemsSelector,
    newsErrorSelector,
    (loading, data, error) => ({ loading, data, error }),
);
