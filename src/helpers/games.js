import { db } from '../services/firebase';

export function fetchGamesApi() {
    return db
        .ref('games')
        .once('value')
        .then((snapshot) => {
            return snapshot.val();
        });
}

export function fetchGenresApi() {
    return db
        .ref('genres/games')
        .once('value')
        .then((snapshot) => {
            return snapshot.val();
        });
}

export function postGenreApi() {
    return db
        .ref('genres/games')
        .once('value')
        .then((snapshot) => {
            return snapshot.val();
        });
}
