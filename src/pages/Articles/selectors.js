import { createSelector } from 'reselect';

const articlesLoadingSelector = (state) => state.articles.loading;
const articlesItemsSelector = (state) => state.articles.data;
const articlesErrorSelector = (state) => state.articles.error;

/* const sortByDateArticlesItems = createSelector(articlesItemsSelector, (items) =>
    items.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
); */

export const getArticles = createSelector(
    articlesLoadingSelector,
    articlesItemsSelector,
    articlesErrorSelector,
    (loading, items, error) => ({ loading, items, error }),
);
