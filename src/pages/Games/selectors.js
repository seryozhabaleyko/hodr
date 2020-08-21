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

export const getGamesByVisibilityFilters = (state, platforms, genres) => {};

export const getVisibilityFilters = createSelector(
    (state) => state.games.visibilityFilters.ratings,
    (state) => state.games.visibilityFilters.years,
    (ratings, years) => ({ ratings, years }),
);

const isYears = (item, years) => {
    const yearsArray = years.split('-');

    if (years === 'all') {
        return true;
    }

    if (yearsArray.length === 1) {
        return yearsArray[0] === item.createdAt;
    }

    if (yearsArray.length === 2) {
        return yearsArray[0] >= item.createdAt && yearsArray[1] <= item.createdAt;
    }

    return true;
};

export const getVisibleMovies = createSelector(
    gamesItems,
    getVisibilityFilters,
    (items, { ratings, years }) => {
        if (!items || items.length === 0) return [];

        const ratingsArray = ratings.split('-');

        return items.filter((item) => {
            const isRatings =
                ratings === 'all' ||
                (ratingsArray.length === 2 &&
                    item.rating >= ratingsArray[0] &&
                    item.rating <= ratingsArray[1]);

            console.log('isYears()', isYears(item, years));

            /* const isYears =
                years === 'all' || yearsArray.length === 2
                    ? yearsArray[0] >= new Date(item.createdAt).getFullYear() &&
                      yearsArray[1] <= new Date(item.createdAt).getFullYear()
                    : new Date(item.timestamp).getFullYear() == yearsArray[0]; */

            return isRatings;
        });
    },
);
