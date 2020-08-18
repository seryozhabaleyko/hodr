import { createSelector } from 'reselect';

const articlesLoading = (state) => state.articles.loading;
const articlesItems = (state) => state.articles.data;
const articlesError = (state) => state.articles.error;

const sortByDateArticlesItems = createSelector(articlesItems, (items) =>
    items.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
);

export const getArticles = createSelector(
    articlesLoading,
    sortByDateArticlesItems,
    articlesError,
    (loading, items, error) => ({ loading, items, error }),
);
