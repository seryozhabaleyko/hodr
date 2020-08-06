import { db, firestore } from '../services/firebase';

export function fetchGamesApi() {
    return db
        .ref('games')
        .once('value')
        .then((snapshot) => {
            return snapshot.val();
        });
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

export function postGenreApi() {
    return db
        .ref('genres/games')
        .once('value')
        .then((snapshot) => {
            return snapshot.val();
        });
}
