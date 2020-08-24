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

const gamesLoadingSelector = (state) => state.games.loading;
const gamesItemsSelector = (state) => state.games.data;
const gamesErrorSelectorSelector = (state) => state.games.error;

const sortByDateGamesItems = createSelector(gamesItemsSelector, (items) =>
    items.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
);

export const getNewGames = createSelector(
    gamesLoadingSelector,
    sortByDateGamesItems,
    gamesErrorSelectorSelector,
    (loading, items, error) => ({ loading, items, error }),
);

export const getPopularGames = createSelector(
    gamesLoadingSelector,
    sortByDateGamesItems,
    gamesErrorSelectorSelector,
    (loading, items, error) => ({ loading, items, error }),
);

export const getCollectionNewGames = createSelector(
    gamesLoadingSelector,
    sortByDateGamesItems,
    gamesErrorSelectorSelector,
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

const isYears = (itemYear, filterByYear) => {
    if (filterByYear === 'all') {
        return true;
    }

    const yearsArray = filterByYear.split('-');

    if (yearsArray.length === 1) {
        return itemYear === parseInt(yearsArray[0], 10);
    }

    if (yearsArray.length === 2) {
        return itemYear >= parseInt(yearsArray[0], 10) && itemYear <= parseInt(yearsArray[1], 10);
    }

    return false;
};

function isRating(itemRating, filterByRating) {
    if (filterByRating === 'all') {
        return true;
    }

    const ratingsArray = filterByRating.split('-');
    const minRating = parseInt(ratingsArray[0], 10);
    const maxRating = parseInt(ratingsArray[1], 10);

    if (ratingsArray.length === 2) {
        return itemRating >= minRating && itemRating <= maxRating;
    }

    return false;
}

const gamesFilterByRatingSelector = (state) => state.games.filterByRating;
const gamesFilterByYearSelector = (state) => state.games.filterByYear;

export const getFilteredGames = createSelector(
    gamesItemsSelector,
    gamesFilterByRatingSelector,
    gamesFilterByYearSelector,
    (items, filterByRating, filterByYear) => {
        if (!items || items.length === 0) return [];

        return items.filter(
            (item) =>
                isRating(item.rating, filterByRating) &&
                isYears(item.releaseDate.toDate().getFullYear(), filterByYear),
        );
    },
);

export const getGames = createSelector(
    gamesLoadingSelector,
    getFilteredGames,
    gamesErrorSelectorSelector,
    (loading, items, error) => ({ loading, items, error }),
);
