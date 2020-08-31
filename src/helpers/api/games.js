import { firestore } from '../../services/firebase';

const gamesRef = firestore.collection('games');

export function addNewGameApi(data) {
    return firestore
        .collection('games')
        .add(data)
        .then((docRef) => {
            docRef.update({ id: docRef.id });
        });
}

export function fetchGamesApi({ orderBy, platform, genre }) {
    let query = gamesRef;

    if (platform) {
        query = gamesRef.where('platforms', 'array-contains', platform);
    } else if (genre) {
        query = gamesRef.where('genres', 'array-contains', genre);
    } else if (platform && genre) {
        query = gamesRef
            .where('platforms', 'array-contains', platform)
            .where('genres', 'array-contains', genre);
    }

    let foo;

    if (orderBy === 'new') {
        foo = query.orderBy('releaseDate', 'desc');
    } else {
        foo = query.orderBy('rating', 'desc');
    }

    console.log('api:', orderBy);

    return foo
        .get()
        .then((snapshot) => snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
}

export function fetchGameApi(slug) {
    return firestore
        .collection('games')
        .where('slug', '==', slug)
        .get()
        .then((doc) => ({ ...doc.docs[0].data(), id: doc.docs[0].id }));
}

export function fetchCollectionNewGamesApi() {
    return gamesRef
        .orderBy('releaseDate', 'desc')
        .limit(21)
        .get()
        .then((snapshot) => snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
}

export function fetchCollectionPopularGamesApi() {
    return gamesRef
        .orderBy('rating', 'desc')
        .limit(21)
        .get()
        .then((snapshot) => snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
}
