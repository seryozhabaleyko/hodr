import { createSelector } from 'reselect';

/* export const getGenres = (state) => {
    let data = [];

    function byField(field) {
        return (a, b) => (a[field].toLowerCase() > b[field].toLowerCase() ? 1 : -1);
    }

    if (state.games.genres.data) {
        data = Object.values(state.games.genres.data).sort(byField('title'));
    }

    return {
        loading: state.games.genres.loading,
        data,
        error: state.games.genres.error,
    };
}; */

const gamesLoading = (state) => state.games.loading;
const gamesItems = (state) => state.games.data;
const gamesError = (state) => state.games.error;

const sortByDateGamesItems = createSelector(gamesItems, (items) =>
    items.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
);

export const getNewGames = createSelector(
    gamesLoading,
    sortByDateGamesItems,
    gamesError,
    (loading, items, error) => ({
        loading,
        items,
        error,
    }),
);

export const getPopularGames = createSelector(
    gamesLoading,
    sortByDateGamesItems,
    gamesError,
    (loading, items, error) => ({
        loading,
        items,
        error,
    }),
);

export const getCollectionNewGames = createSelector(
    gamesLoading,
    sortByDateGamesItems,
    gamesError,
    (loading, items, error) => ({
        loading,
        items: items.slice(0, 15),
        error,
    }),
);

export const getPlatforms = createSelector(
    (state) => state.games.platforms.loading,
    (state) => state.games.platforms.data,
    (state) => state.games.platforms.error,
    (loading, data, error) => ({ loading, data, error }),
);

export const getGenres = createSelector(
    (state) => state.games.genres.loading,
    (state) => state.games.genres.data,
    (state) => state.games.genres.error,
    (loading, data, error) => ({ loading, data, error }),
);
