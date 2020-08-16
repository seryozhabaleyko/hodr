import { firestore } from '../services/firebase';

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
        .get()
        .then((snapshot) => snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
}

export function fetchPopularGamesApi() {
    return firestore
        .collection('games')
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

export function fetchGenresApi() {
    return firestore
        .collection('genres')
        .get()
        .then((querySnapshot) => querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
}

export function addNewGenreApi(data) {
    return firestore
        .collection('genres')
        .add(data)
        .then((docRef) => {
            //firestore.collection('genres').doc(docRef.id).update({ id: docRef.id });
            docRef.update({ id: docRef.id });
            return docRef.get();
        });
    //.then((doc) => ({ ...doc.data(), id: doc.id }));
}

function subscribeGameApi() {
    return firestore.collection('games').doc('subscribers');
}
