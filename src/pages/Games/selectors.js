export const getGamesPopular = (state) => {};

export const getGenres = (state) => {
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
};
