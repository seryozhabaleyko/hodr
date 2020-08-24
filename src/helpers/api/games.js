import { firestore } from '../../services/firebase';

export function addNewGameApi(data) {
    return firestore
        .collection('games')
        .add(data)
        .then((docRef) => {
            docRef.update({ id: docRef.id });
        });
}

export function fetchGamesApi() {
    return firestore
        .collection('games')
        .orderBy('releaseDate', 'desc')
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
